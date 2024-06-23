import { ResponseBuilder } from "@packages/aws/lambda/response-builder";
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Callback,
  Context
} from "aws-lambda";

import { HttpApiHandler, HttpApiHandlerFactoryProperties } from "./types";
import { withPresenter } from "./utils/with-callback-presenter";
import { withFallbackPresenterAndAssertion } from "./utils/with-fallback-presenter-and-assertion";

export function httpApiHandler<RESPONSE>(
  properties: HttpApiHandlerFactoryProperties<RESPONSE>
): HttpApiHandler {
  const { handler, presenter: rawPresenter } = properties;
  return async (
    event: APIGatewayProxyEvent,
    context: Context,
    cb: Callback<APIGatewayProxyResult>
  ): Promise<APIGatewayProxyResult> => {
    const presenter = withFallbackPresenterAndAssertion(rawPresenter);

    try {
      const response = await handler(
        event,
        context,
        withPresenter(presenter, cb)
      );

      return presenter(response);
    } catch (e) {
      console.error("httpApiHandler@catch", e);
      return ResponseBuilder.internalServerError();
    }
  };
}
