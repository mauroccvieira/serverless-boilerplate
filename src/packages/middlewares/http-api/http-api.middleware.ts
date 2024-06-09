import cors from "@middy/http-cors";
import { createMiddleware } from "@packages/middlewares/interface.middleware";
import { Middleware } from "@packages/middlewares/types";

import { httpApiHandler } from "./http-api.handler";
import { HttpApiHandlerFactoryProperties } from "./types";

const httpApiMiddleware = <RESPONSE>(
  properties: HttpApiHandlerFactoryProperties<RESPONSE>
): Middleware => {
  return createMiddleware().use(cors()).handler(httpApiHandler(properties));
};

export default httpApiMiddleware;
