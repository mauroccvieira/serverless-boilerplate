import cors from "@middy/http-cors";
import httpErrorHandler from "@middy/http-error-handler";
import httpHeaderNormalizer from "@middy/http-header-normalizer";
import httpJsonBodyParser from "@middy/http-json-body-parser";
import httpSecurityHeaders from "@middy/http-security-headers";
import validator from "@middy/validator";
import { transpileSchema } from "@middy/validator/transpile";
import { createMiddleware } from "@packages/middlewares/interface.middleware";
import { Middleware } from "@packages/middlewares/types";

import { httpApiHandler } from "./http-api.handler";
import { HttpApiHandlerFactoryProperties } from "./types";
import { onValidationError } from "./utils/on-validation-error";

const httpApiMiddleware = <RESPONSE>(
  properties: HttpApiHandlerFactoryProperties<RESPONSE>
): Middleware => {
  return createMiddleware()
    .use(cors())
    .use(httpHeaderNormalizer())
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
    .onError(onValidationError())
    .handler(httpApiHandler(properties));
};

export default httpApiMiddleware;
