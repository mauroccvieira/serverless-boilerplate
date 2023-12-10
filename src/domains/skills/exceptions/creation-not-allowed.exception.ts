import { BusinessException } from "../../commons/exceptions/business.exception";

export class CreationNotAllowedException extends BusinessException {
  override name = "CreationNotAllowedExceptions";
  constructor() {
    super(
      "Skill creation is not allowed right now. Try again at a later version"
    );
    Object.setPrototypeOf(this, CreationNotAllowedException.prototype);
  }
}
