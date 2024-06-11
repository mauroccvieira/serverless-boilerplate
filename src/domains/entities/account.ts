import { Entity } from "@domains/entities/entity";
import { randomUUID } from "crypto";

export class Account implements Entity<string> {
  public id: string;
  public firstName: string;
  public surname: string;
  public createdAt: Date;
  public updatedAt: Date;

  constructor(properties: AccountProperties) {
    this.id = properties.id;
    this.firstName = properties.firstName;
    this.surname = properties.surname;
    this.createdAt = properties.createdAt;
    this.updatedAt = properties.updatedAt;
  }

  public static newAccount(props: NewAccountProperties): Account {
    const customerAccountProps: AccountProperties = {
      firstName: props.firstName,
      surname: props.surname,
      createdAt: new Date(),
      updatedAt: new Date(),
      id: randomUUID()
    };

    return new Account(customerAccountProps);
  }
}

export interface AccountProperties {
  id: string;
  firstName: string;
  surname: string;
  createdAt: Date;
  updatedAt: Date;
}

export type NewAccountProperties = Pick<
  AccountProperties,
  "firstName" | "surname"
>;
