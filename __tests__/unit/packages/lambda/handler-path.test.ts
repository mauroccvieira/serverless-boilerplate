import { handlerPath } from "@packages/aws/lambda/handler-path";

describe("Testing handler path", () => {
  it("Is defined", () => {
    expect(handlerPath).toBeDefined();
  });

  it("Expect to throw if cw is undefined", () => {
    expect(() => handlerPath("some-path")).toThrow(
      new Error("Invalid Environmnent")
    );
  });

  it("Get current file path relative to current working directory", () => {
    const path = handlerPath(__dirname);
    expect(path).toBe("__tests__/unit/packages/lambda");
  });
});
