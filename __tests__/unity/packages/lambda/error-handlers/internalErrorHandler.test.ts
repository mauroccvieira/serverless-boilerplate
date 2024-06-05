import { internalErrorHandler } from "@packages/aws/lambda/error-handlers/internal-error-handler";

describe("internalErrorHandler", () => {
  it("should return a 500 response", () => {
    expect(internalErrorHandler()).toEqual({
      statusCode: 500,
      body: "Something went wrong!"
    });
  });
});
