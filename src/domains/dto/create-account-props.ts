import type { Dto } from "@domains/dto/Dto";

export interface CreateAccountProps extends Dto {
  id?: string;
  createdAt?: string;
  updatedAt?: string;

  firstName: string;
  surname: string;
}
