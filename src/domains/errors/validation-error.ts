export class ValidationError extends Error {
  override name = "ValidationError";
  statusCode = 400;
  override cause: string;
  constructor(message: string, cause: string) {
    super(message);
    this.cause = cause;
    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}
