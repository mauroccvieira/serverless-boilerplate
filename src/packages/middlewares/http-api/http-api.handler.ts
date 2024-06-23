import { ResponseBuilder } from "@packages/aws/lambda/response-builder";
import { Presenter } from "@packages/middlewares/types";
import { assertIsAPIGatewayProxyResult } from "@packages/middlewares/utils/api-gateway-proxy-result-validator";
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Callback,
  Context
} from "aws-lambda";

import { httpApiCallback } from "./http-api.callback";
import { httpApiPresenter } from "./http-api.presenter";
import { HttpApiHandler, HttpApiHandlerFactoryProperties } from "./types";

export function httpApiHandler<RESPONSE>(
  properties: HttpApiHandlerFactoryProperties<RESPONSE>
): HttpApiHandler {
  const { handler, presenter } = properties;
  return async (
    event: APIGatewayProxyEvent,
    context: Context,
    cb: Callback<APIGatewayProxyResult>
  ): Promise<APIGatewayProxyResult> => {
    const selectedPresenter = wrapPresenter(presenter);
    try {
      const response = await handler(
        event,
        context,
        httpApiCallback(selectedPresenter, cb)
      );
      console.log("response", response);
      try {
        const presentedResponse = selectedPresenter(response);
        console.log("presentedResponse", presentedResponse);
        return presentedResponse;
      } catch (e) {
        console.error("Error found while presenting", e);
        throw e;
      }
    } catch (e) {
      console.info("something went wrong here", e);
      return new ResponseBuilder()
        .withStatusCode(500)
        .withJsonBody({
          message: "Internal server error"
        })
        .build();
    }
  };
}

function wrapPresenter<RESPONSE>(
  presenter: Presenter<RESPONSE, APIGatewayProxyResult> | undefined
): Presenter<RESPONSE, APIGatewayProxyResult> {
  return (response: RESPONSE): APIGatewayProxyResult => {
    try {
      const selectedPresenter = presenter ?? httpApiPresenter;
      const presentedResponse = selectedPresenter(response);
      assertIsAPIGatewayProxyResult(presentedResponse);
      return presentedResponse;
    } catch (e) {
      console.error("Error found while presenting", e);
      throw e;
    }
  };
}
