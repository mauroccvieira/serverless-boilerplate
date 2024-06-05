import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";
import type { Account } from "@domains/entities/account";
import type { AccountRepository } from "@domains/repositories/createAccountRepository";
import { DYNAMODB_CLIENT } from "@packages/aws/dynamodb/dynamo-client";

export class DynamoAccountRepository implements AccountRepository {
  private readonly _tableName = "Account";

  async create(account: Account): Promise<Account> {
    const item = marshall(account.toDto());

    const command = new PutItemCommand({
      TableName: this._tableName,
      Item: item
    });

    await DYNAMODB_CLIENT.send(command);

    return account;
  }
}
