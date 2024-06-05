import { ValidationError } from "@errors/validation-error";
import { errorHandler } from "@packages/aws/lambda/error-handlers/error-handler";
describe("errorHandler", () => {
  it("Should handle internal errors", () => {
    expect(errorHandler(new Error())).toEqual({
      statusCode: 500,
      body: "Something went wrong!"
    });
  });

  it("Should handle validation errors", () => {
    expect(errorHandler(new ValidationError("Test", "[]"))).toEqual({
      statusCode: 400,
      body: '{"error":"ValidationError","message":"Test","validations":[]}'
    });
  });
});
