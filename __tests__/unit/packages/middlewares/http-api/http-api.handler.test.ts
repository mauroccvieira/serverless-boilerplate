import { ResponseBuilder } from "@packages/aws/lambda/response-builder";
import { httpApiHandler } from "@packages/middlewares/http-api";
import { httpApiPresenter } from "@packages/middlewares/http-api/http-api.presenter";
import { HttpApiHandlerFactoryProperties } from "@packages/middlewares/http-api/types";
import { APIGatewayProxyEvent, Context } from "aws-lambda";

jest.mock("@packages/middlewares/http-api/http-api.presenter", () => ({
  httpApiPresenter: jest.fn()
}));

describe("httpApiHandler", () => {
  const sut = httpApiHandler;

  // TODO: change for a better mocked context
  let context: Context;
  // TODO: change for a better mocked event
  let event: APIGatewayProxyEvent;

  beforeEach(() => {
    context = {} as Context;
    event = {} as unknown as APIGatewayProxyEvent;
    jest.resetAllMocks();
  });

  it("should return a function", () => {
    // Arrange
    const properties = {
      handler: jest.fn(),
      presenter: jest.fn()
    };
    // Act
    const actual = sut(properties);
    // Assert
    expect(actual).toBeInstanceOf(Function);
  });

  it("should call the handler with the event, context", async () => {
    // Arrange
    const properties: HttpApiHandlerFactoryProperties<{ foo: string }> = {
      handler: jest.fn(),
      presenter: jest.fn()
    };

    const cb = jest.fn();
    // Act
    const handler = sut(properties);
    await handler(event, context, cb);
    // Assert
    expect(properties.handler).toHaveBeenCalledWith(
      event,
      context,
      expect.any(Function)
    );
  });

  it("should call the presenter with the handler response", async () => {
    // Arrange
    const response = "response";
    const properties: HttpApiHandlerFactoryProperties<string> = {
      handler: async () => response,
      presenter: jest.fn()
    };

    const cb = jest.fn();
    // Act
    const handler = sut(properties);
    await handler(event, context, cb);
    // Assert
    expect(properties.presenter).toHaveBeenCalledWith(response);
  });

  it("should call the callback with the presenter response", async () => {
    // Arrange
    const response = "response";
    const expectedResponse = new ResponseBuilder()
      .withJsonBody(response)
      .build();
    const properties: HttpApiHandlerFactoryProperties<string> = {
      handler: (_, __, cb) => cb(undefined, response),
      presenter: () => expectedResponse
    };

    const cb = jest.fn();
    // Act
    const handler = sut(properties);
    await handler(event, context, cb);
    // Assert
    expect(cb).toHaveBeenCalledWith(undefined, expectedResponse);
  });

  it("should call the callback with the error", async () => {
    // Arrange
    const error = new Error("error");
    const properties: HttpApiHandlerFactoryProperties<undefined> = {
      handler: (_, __, cb) => cb(error, undefined),
      presenter: jest.fn()
    };

    const cb = jest.fn();
    // Act
    const handler = sut(properties);
    await handler(event, context, cb);
    // Assert
    expect(cb).toHaveBeenCalledWith(error, undefined);
  });

  it("should return a 500 response when an error is thrown", async () => {
    // Arrange
    const error = new Error("error");
    const properties: HttpApiHandlerFactoryProperties<string> = {
      handler: async () => {
        throw error;
      },
      presenter: jest.fn()
    };

    const cb = jest.fn();
    // Act
    const handler = sut(properties);
    const actual = await handler(event, context, cb);
    // Assert
    expect(actual).toEqual(
      new ResponseBuilder()
        .withStatusCode(500)
        .withJsonBody({
          message: "Internal server error"
        })
        .build()
    );
  });

  it("should call the default presenter when no presenter is provided", async () => {
    // Arrange
    const response = "response";
    const properties: HttpApiHandlerFactoryProperties<string> = {
      handler: (_, __, callback) => callback(null, response)
    };
    const cb = jest.fn();
    // Act
    const handler = sut(properties);
    await handler(event, context, cb);
    // Assert
    expect(httpApiPresenter).toHaveBeenCalledWith(response);
  });
});
