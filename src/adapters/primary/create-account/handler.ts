import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const main = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  console.log(event);
  return {
    statusCode: 500,
    body: JSON.stringify("Not implemented yet. But it will")
  };
};
