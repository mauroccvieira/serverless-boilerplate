import cors from "@middy/http-cors";
import httpErrorHandler from "@middy/http-error-handler";
import httpHeaderNormalizer from "@middy/http-header-normalizer";
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
      .use(
        httpErrorHandler({
          fallbackMessage: "An error occurred"
        })
      )
      .handler(httpApiHandler(properties))
  );
};

export default httpApiMiddleware;
