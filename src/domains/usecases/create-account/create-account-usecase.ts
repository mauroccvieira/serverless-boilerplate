import type { NewAccountProps } from "@domains/dto/new-account-props";
import { Account } from "@domains/entities/account";
import { AccountCreatedEvent } from "@domains/events/account-created-event";
import type { EventPublisher } from "@domains/events/event-repository";
import type { AccountRepository } from "@domains/repositories/createAccountRepository";

export async function createCustomerAccountUseCase(
  newAccountProps: NewAccountProps,
  repository: AccountRepository,
  publisher: EventPublisher
): Promise<Account> {
  const newAccount = Account.createAccount(newAccountProps);
  await repository.create(newAccount);
  await publisher.publish(new AccountCreatedEvent(newAccount.toDto()));

  return newAccount;
}
