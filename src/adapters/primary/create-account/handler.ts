import { DynamoAccountRepository } from "@adapters/secondary/repositories/dynamo-account-repository";
import { createCustomerAccountUseCase } from "@domains/usecases/create-account";
import { EventBridgePublisher } from "@packages/aws/event-bridge/event-bridge-publisher";
import { errorHandler } from "@packages/aws/lambda/error-handlers/error-handler";
import { ResponseBuilder } from "@packages/aws/lambda/response-builder";
import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

const logger = console;
export const main = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const repository = new DynamoAccountRepository();
    const publisher = new EventBridgePublisher();

    if (!event.body)
      return new ResponseBuilder()
        .withJsonBody({ message: "Invalid request" })
        .withStatusCode(400)
        .build();

    const { firstName, surname } = JSON.parse(event.body);

    const response = await createCustomerAccountUseCase(
      {
        firstName,
        surname
      },
      repository,
      publisher
    );

    return {
      statusCode: 200,
      body: JSON.stringify(response)
    };
  } catch (error: unknown) {
    logger.error("lambda-handler-error", error);
    return errorHandler(error);
  }
};
