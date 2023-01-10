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

class Card {
  constructor() {}

  getSomething(it: number) {
    if (it === 2) {
      return true;
    }
    else if (it === 1 ) {
      return "bool"
    }
    else {
      return false
    }
  }
}
