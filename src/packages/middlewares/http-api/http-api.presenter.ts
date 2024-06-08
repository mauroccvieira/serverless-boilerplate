import { ResponseBuilder } from "@packages/aws/lambda/response-builder";
import { APIGatewayProxyResult } from "aws-lambda";

export function httpApiPresenter<RESPONSE>(
  response: RESPONSE
): APIGatewayProxyResult {
  return new ResponseBuilder()
    .withStatusCode(200)
    .withJsonBody(response || {})
    .build();
}
