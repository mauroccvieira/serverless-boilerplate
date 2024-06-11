import type { Account } from "@domains/entities/account";

export interface AccountRepository {
  save(account: Account): Promise<Account>;
}
