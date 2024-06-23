import { Presenter } from "@packages/middlewares/types";
import { assertIsAPIGatewayProxyResult } from "@packages/middlewares/utils/api-gateway-proxy-result-validator";
import { APIGatewayProxyResult } from "aws-lambda";

import { httpApiPresenter } from "../http-api.presenter";

export function withFallbackPresenterAndAssertion<RESPONSE>(
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
