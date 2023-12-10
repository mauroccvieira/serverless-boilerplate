import type { HttpHandler } from "@adapters/primaries/handler.interface";
import { ResponseGateway } from "@packages/response-builder";
import { LambdaResponse } from "@packages/response-builder/builder";

type Class<I, Args extends never[] = never[]> = new (...args: Args) => I;

export type ExceptionResponseMapper = {
  exception: Class<Error>;
  response: (error: Error) => LambdaResponse;
};

export function Controller(config: { exception: ExceptionResponseMapper[] }) {
  return function InnerController(originalClass: Class<HttpHandler>) {
    const originalHandlerMethod = originalClass.prototype.handler;
    originalClass.prototype.handler = async function (...args: never[]) {
      try {
        return await originalHandlerMethod.apply(this, args);
      } catch (error) {
        const mapper = config.exception.find(
          (mapper: ExceptionResponseMapper) => error instanceof mapper.exception
        );
        if (mapper) {
          return mapper.response(error as Error);
        }

        return ResponseGateway.INTERNAL_SERVER_ERROR();
      }
    };
  };
}
