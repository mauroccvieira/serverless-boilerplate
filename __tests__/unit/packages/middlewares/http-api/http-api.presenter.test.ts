import { httpApiPresenter } from "../../../../../src/packages/middlewares/http-api/http-api.presenter";

describe("httpApiPresenter", () => {
  const sut = httpApiPresenter;

  it("should return a response with status code 200", () => {
    // Arrange
    const response = {};
    // Act
    const actual = sut(response);
    // Assert
    expect(actual.statusCode).toBe(200);
  });

  it("should return a response with the response as the body", () => {
    // Arrange
    const response = { key: "value" };
    // Act
    const actual = sut(response);
    // Assert
    expect(actual.body).toBe(JSON.stringify(response));
  });

  it("should return a response with an empty object as the body when no response is provided", () => {
    // Arrange
    // Act
    const actual = sut(undefined);
    // Assert
    expect(actual.body).toBe(JSON.stringify({}));
  });

  it("should return a response with an empty object as the body when the response is null", () => {
    // Arrange
    // Act
    const actual = sut(null);
    // Assert
    expect(actual.body).toBe(JSON.stringify({}));
  });

  it("should return a response with an empty object as the body when the response is undefined", () => {
    // Arrange
    // Act
    const actual = sut(undefined);
    // Assert
    expect(actual.body).toBe(JSON.stringify({}));
  });

  it("should return a response with an empty object as the body when the response is an empty object", () => {
    // Arrange
    const response = {};
    // Act
    const actual = sut(response);
    // Assert
    expect(actual.body).toBe(JSON.stringify({}));
  });
});
