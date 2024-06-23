import cors from "@middy/http-cors";
import httpErrorHandler from "@middy/http-error-handler";
import httpHeaderNormalizer from "@middy/http-header-normalizer";
import httpJsonBodyParser from "@middy/http-json-body-parser";
import httpSecurityHeaders from "@middy/http-security-headers";
import validator from "@middy/validator";
import { transpileSchema } from "@middy/validator/transpile";
import { ResponseBuilder } from "@packages/aws/lambda/response-builder";
import { createMiddleware } from "@packages/middlewares/interface.middleware";
import { Middleware } from "@packages/middlewares/types";

import { httpApiHandler } from "./http-api.handler";
import { HttpApiHandlerFactoryProperties } from "./types";

const httpApiMiddleware = <RESPONSE>(
  properties: HttpApiHandlerFactoryProperties<RESPONSE>
): Middleware => {
  return (
    createMiddleware()
      .use(cors())
      .use(httpHeaderNormalizer())

      // .use({
      //   before: (request: any) => {
      //     throw new Error("test before");
      //   }
      // })
      .use(httpJsonBodyParser())
      .use(
        validator({
          eventSchema: transpileSchema(properties.bodySchema || {})
        })
      )
      .use(httpSecurityHeaders())
      .use(
        httpErrorHandler({
          fallbackMessage: "An error occurred"
        })
      )
      .onError((req) => {
        const receivedError = req.error;
        console.info(
          "Error received in middleware",
          JSON.stringify(receivedError)
        );
        if (isMiddyValidatorError(receivedError)) {
          console.debug("Error is a validator error", receivedError);
          req.response = new ResponseBuilder()
            .withStatusCode(400)
            .withJsonBody({
              name: "ValidationError",
              message: receivedError.message,
              cause: receivedError.cause.data
            })
            .build();

          req.error = null;
        }
      })
      .handler(httpApiHandler(properties))
  );
};

export default httpApiMiddleware;

function isMiddyValidatorError(error: unknown | undefined): error is {
  name: string;
  message: string;
  cause: { package: string; data: unknown[] };
} {
  return (
    typeof error === "object" &&
    error !== null &&
    "cause" in error &&
    "name" in error &&
    error.name === "BadRequestError" &&
    "statusCode" in error &&
    "message" in error &&
    error.statusCode === 400 &&
    error.message === "Event object failed validation"
  );
}
