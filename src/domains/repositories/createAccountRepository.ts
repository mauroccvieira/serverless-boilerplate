import type { Account } from "@domains/entities/account";

export interface AccountRepository {
  create(account: Account): Promise<Account>;
}
