import { DynamoAccountRepository } from "@adapters/secondary/repositories/dynamo-account-repository";
import { Account } from "@domains/entities/account";
import { createCustomerAccountUseCase } from "@domains/usecases/create-account";
import { EventBridgePublisher } from "@packages/aws/event-bridge/event-bridge-publisher";
import httpApiMiddleware from "@packages/middlewares/http-api/http-api.middleware";
import type { APIGatewayProxyEvent } from "aws-lambda";

const repository = new DynamoAccountRepository();
const publisher = new EventBridgePublisher();
const handler = async (event: APIGatewayProxyEvent): Promise<Account> => {
  console.info("Event received in Handler", event);
  if (!event.body) throw new Error("Invalid body received");
  const { firstName, surname } = event.body as any;

  return createCustomerAccountUseCase(
    {
      firstName,
      surname
    },
    {
      accountRepository: repository,
      publisher
    }
  );
};

export const main = httpApiMiddleware({ handler });
