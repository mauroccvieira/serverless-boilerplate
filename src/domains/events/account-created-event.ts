import { AccountProperties } from "@domains/entities/account";
import { EventInterface } from "@domains/events/event";

export class AccountCreatedEvent implements EventInterface, AccountProperties {
  static _schemaName = "AccountCreatedEvent";

  time: Date;
  schemaName = AccountCreatedEvent._schemaName;
  id: string;
  firstName: string;
  surname: string;

  createdAt: Date;
  updatedAt: Date;

  constructor(entity: AccountProperties) {
    this.schemaName = AccountCreatedEvent._schemaName;
    this.id = entity.id;
    this.firstName = entity.firstName;
    this.surname = entity.surname;
    this.createdAt = entity.createdAt;
    this.updatedAt = entity.updatedAt;
    this.time = new Date();
  }

  toJSON() {
    return {
      schemaName: this.schemaName,
      id: this.id,
      firstName: this.firstName,
      surname: this.surname,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
}
