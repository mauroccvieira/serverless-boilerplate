import { httpApiCallback } from "@packages/middlewares/http-api/http-api.callback";

describe("httpApiCallback", () => {
  const sut = httpApiCallback;

  const mockedPresenter = jest.fn();
  const mockedCb = jest.fn();

  it("should return a function", () => {
    // Arrange & Act
    const actual = sut(mockedPresenter, mockedCb);
    // Assert
    expect(actual).toBeInstanceOf(Function);
  });

  it("should only call the presenter if the result is defined", () => {
    // Arrange
    const error = null;
    const result = "result";
    // Act
    const callback = sut(mockedPresenter, mockedCb);
    callback(error, result);
    // Assert
    expect(mockedPresenter).toHaveBeenCalledWith(result);
  });

  it("should not call the presenter if the result is undefined", () => {
    // Arrange
    const error = null;
    const result = undefined;
    // Act
    const callback = sut(mockedPresenter, mockedCb);
    callback(error, result);
    // Assert
    expect(mockedPresenter).not.toHaveBeenCalledWith();
  });

  it("should call the callback with the error and the result", () => {
    // Arrange
    const error = "error";
    const result = "result";
    // Act
    const callback = sut(mockedPresenter, mockedCb);
    callback(error, result);
    // Assert
    expect(mockedCb).toHaveBeenCalledWith(error, mockedPresenter(result));
  });
});
