import { APIGatewayProxyResult } from "aws-lambda";

export function assertIsAPIGatewayProxyResult(
  response: unknown
): asserts response is APIGatewayProxyResult {
  const error = new Error(
    "Response presented should be an APIGatewayProxyResult"
  );
  if (response === null || typeof response !== "object") {
    error.cause = "Response is null or not an object";
    throw error;
  }
  if (!("body" in response)) {
    error.cause = "Response does not have a body";
    throw error;
  }
  if (!(typeof response.body === "string")) {
    error.cause = "Response body is not a string";
    throw error;
  }

  if (!("headers" in response)) {
    error.cause = "Response does not have headers";
    throw error;
  }
  if (!(typeof response.headers === "object")) {
    error.cause = "Response headers is not an object";
    throw error;
  }

  if (!("statusCode" in response)) {
    error.cause = "Response does not have a statusCode";
    throw error;
  }

  if (!(typeof response.statusCode === "number")) {
    error.cause = "Response statusCode is not a number";
    throw error;
  }
}
