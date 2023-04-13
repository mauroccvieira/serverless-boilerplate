import type { APIGatewayProxyResult } from "aws-lambda";

export function internalErrorHandler(): APIGatewayProxyResult {
  return {
    statusCode: 500,
    body: "Something went wrong!"
  };
}
