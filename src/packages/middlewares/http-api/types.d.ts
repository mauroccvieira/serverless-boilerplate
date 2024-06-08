import { Presenter } from "@packages/middlewares/types";
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Handler
} from "aws-lambda";

export type HttpApiHandler = Handler<
  APIGatewayProxyEvent,
  APIGatewayProxyResult
>;

export interface HttpApiHandlerFactoryProperties<RESPONSE> {
  handler: Handler<APIGatewayProxyEvent, RESPONSE>;
  presenter?: Presenter<
    Awaited<RESPONSE> | RESPONSE | void,
    APIGatewayProxyResult
  >;
}
