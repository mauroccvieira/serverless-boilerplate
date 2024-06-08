import {
  HttpStatusCode,
  ResponseBuilder
} from "../../../../src/packages/aws/lambda/response-builder";

describe("ResponseBuilder", () => {
  let responseBuilder: ResponseBuilder;

  beforeEach(() => {
    responseBuilder = new ResponseBuilder();
  });

  it("should build a response with default values", () => {
    // Arrange && Act
    const response = responseBuilder.build();

    // Assert
    expect(response.statusCode).toBe(HttpStatusCode.OK);
    expect(response.headers).toEqual({});
    expect(response.body).toBe("");
  });

  it("should set the status code", () => {
    // Arrange
    const statusCode = HttpStatusCode.BAD_REQUEST;

    // Act
    const response = responseBuilder.withStatusCode(statusCode).build();

    // Assert
    expect(response.statusCode).toBe(statusCode);
  });

  it("should set the headers", () => {
    // Arrange
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const headers = { "Content-Type": "application/json" };

    // Act
    const response = responseBuilder.withHeaders(headers).build();

    // Assert
    expect(response.headers).toEqual(headers);
  });

  it("should set the body", () => {
    // Arrange
    const body = "Hello, world!";

    // Act
    const response = responseBuilder.withBody(body).build();

    // Assert
    expect(response.body).toBe(body);
  });

  it("should set the body as a JSON string", () => {
    // Arrange
    const body = { message: "Hello, world!" };

    // Act
    const response = responseBuilder.withJsonBody(body).build();

    // Assert
    expect(response.body).toBe(JSON.stringify(body));
  });
});
