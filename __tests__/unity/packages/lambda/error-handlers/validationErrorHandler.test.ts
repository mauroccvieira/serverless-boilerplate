import { ValidationError } from "@errors/validation-error";
import { validationErrorHandler } from "@packages/lambda/error-handlers/validationErrorHandler";

describe("internalErrorHandler", () => {
  it("should return a 400 response", () => {
    expect(validationErrorHandler(new ValidationError("Test", "[]"))).toEqual({
      statusCode: 400,
      body: '{"error":"ValidationError","message":"Test","validations":[]}'
    });
  });
});
