import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const handler = async ({
  body,
}: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  console.log(body);
  return {
    statusCode: 500,
    body: JSON.stringify("Not implemented yet. But it will"),
  };
};
