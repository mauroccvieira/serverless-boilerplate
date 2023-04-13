import type { CreateAccountProps } from "@domains/dto/create-account-props";
import type { NewAccountProps } from "@domains/dto/new-account-props";
import type { UnmarshalledAccount } from "@domains/dto/unmarshalled-account";
import { Entity } from "@domains/entities/entitiy";
import { ACCOUNT_SCHEMA } from "@domains/schemas/account-schema";

export class Account extends Entity<CreateAccountProps> {
  private constructor({
    id,
    createdAt,
    updatedAt,
    ...props
  }: CreateAccountProps) {
    super(props, id, createdAt, updatedAt);
  }

  public static createAccount(props: NewAccountProps): Account {
    const customerAccountProps: CreateAccountProps = {
      firstName: props.firstName,
      surname: props.surname,
      createdAt: new Date().toISOString()
    };

    const instance: Account = new Account(customerAccountProps);
    instance.validate(ACCOUNT_SCHEMA);

    return instance;
  }

  public toDto(): UnmarshalledAccount {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      firstName: this.props.firstName,
      surname: this.props.surname
    };
  }

  public static toDomain(raw: UnmarshalledAccount): Account {
    return new Account(raw);
  }
}
