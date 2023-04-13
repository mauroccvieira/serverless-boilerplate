import { internalErrorHandler } from "@packages/lambda/error-handlers/internalErrorHandler";

describe("internalErrorHandler", () => {
  it("should return a 500 response", () => {
    expect(internalErrorHandler()).toEqual({
      statusCode: 500,
      body: "Something went wrong!"
    });
  });
});
