import { Account } from "@domains/entities/account";
import type { AccountRepository } from "@domains/repositories/createAccountRepository";
import { ddb } from "@packages/aws/dynamodb/dynamo-client";

export class DynamoAccountRepository implements AccountRepository {
  private readonly _tableName = "Account";

  async save(account: Account): Promise<Account> {
    await ddb.put({
      TableName: this._tableName,
      Item: account
    });

    return account;
  }
}
