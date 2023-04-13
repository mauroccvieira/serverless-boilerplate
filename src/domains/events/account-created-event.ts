import type { CreateAccountProps } from "@domains/dto/create-account-props";

import { Event } from "./event";

export class AccountCreatedEvent extends Event {
  time: Date;
  name = "account_created";

  constructor(dto: CreateAccountProps) {
    super(dto);
    this.time = new Date(dto.createdAt || new Date().getTime());
  }
}
