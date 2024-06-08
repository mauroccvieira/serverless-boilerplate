import { ResponseBuilder } from "@packages/aws/lambda/response-builder";
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Callback,
  Context,
  Handler
} from "aws-lambda";

import { httpApiCallback } from "./http-api.callback";
import { HttpApiHandlerFactoryProperties } from "./http-api.middleware";
import { httpApiPresenter } from "./http-api.presenter";

type ApiGatewayHandler = Handler<APIGatewayProxyEvent, APIGatewayProxyResult>;

export function httpApiHandler<RESPONSE>(
  properties: HttpApiHandlerFactoryProperties<RESPONSE>
): ApiGatewayHandler {
  const { handler, presenter } = properties;
  return async (
    event: APIGatewayProxyEvent,
    context: Context,
    cb: Callback<APIGatewayProxyResult>
  ): Promise<APIGatewayProxyResult> => {
    const selectedPresenter = presenter ?? httpApiPresenter;
    try {
      const response = await handler(
        event,
        context,
        httpApiCallback(selectedPresenter, cb)
      );

      return selectedPresenter(response);
    } catch (e) {
      console.error(e);
      return new ResponseBuilder()
        .withStatusCode(500)
        .withJsonBody({
          message: "Internal server error"
        })
        .build();
    }
  };
}
