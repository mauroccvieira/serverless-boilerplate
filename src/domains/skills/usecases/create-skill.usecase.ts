import type { UsecaseInterface } from "@domains/commons/interfaces/usecase.interface";
import { CreationNotAllowedException } from "@domains/skills/exceptions/creation-not-allowed.exception";

export class CreateSkillUsecase implements UsecaseInterface<void, void> {
  async execute(): Promise<void> {
    throw new CreationNotAllowedException();
  }
}
