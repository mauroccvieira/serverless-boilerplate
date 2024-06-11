import { Account, NewAccountProperties } from "@domains/entities/account";
import { AccountCreatedEvent } from "@domains/events/account-created-event";
import type { EventPublisher } from "@domains/events/event-repository";
import type { AccountRepository } from "@domains/repositories/createAccountRepository";

export async function createCustomerAccountUseCase(
  request: NewAccountProperties,
  deps: {
    accountRepository: AccountRepository;
    publisher: EventPublisher;
  }
): Promise<Account> {
  const newAccount = Account.newAccount(request);
  await deps.accountRepository.save(newAccount);
  await deps.publisher.publish(new AccountCreatedEvent(newAccount));
  return newAccount;
}
