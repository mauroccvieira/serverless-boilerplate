import { wrapHandler } from "@packages/middlewares/interface.middleware";
import { WrappedHandler } from "@packages/middlewares/types";

import { httpApiHandler } from "./http-api.handler";
import { HttpApiHandlerFactoryProperties } from "./types";

const httpApiMiddleware = <RESPONSE>(
  properties: HttpApiHandlerFactoryProperties<RESPONSE>
): WrappedHandler => {
  return wrapHandler(httpApiHandler(properties));
};

export default httpApiMiddleware;
