import {
  wrapHandler,
  WrappedHandler
} from "@packages/middlewares/interface.middleware";
import { Presenter } from "@packages/middlewares/presenter";
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Handler
} from "aws-lambda";

import { httpApiHandler } from "./http-api.handler";

export interface HttpApiHandlerFactoryProperties<RESPONSE> {
  handler: Handler<APIGatewayProxyEvent, RESPONSE>;
  presenter?: Presenter<
    Awaited<RESPONSE> | RESPONSE | void,
    APIGatewayProxyResult
  >;
}

const httpApiMiddleware = <RESPONSE>(
  properties: HttpApiHandlerFactoryProperties<RESPONSE>
): WrappedHandler => {
  return wrapHandler(httpApiHandler(properties));
};

export default httpApiMiddleware;
