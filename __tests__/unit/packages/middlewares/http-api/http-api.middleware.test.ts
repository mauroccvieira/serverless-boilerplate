import { HttpApiHandlerFactoryProperties } from "@packages/middlewares/http-api/types";
import { APIGatewayProxyEvent } from "aws-lambda";

import httpApiMiddleware from "../../../../../src/packages/middlewares/http-api/http-api.middleware";

describe("httpApiHandlerFactory", () => {
  const sut = httpApiMiddleware;

  // TODO: change for a better mocked context
  let context: any = {};

  let event: APIGatewayProxyEvent;

  beforeEach(() => {
    context = {};
    event = {
      httpMethod: "GET"
    } as APIGatewayProxyEvent;
    jest.resetAllMocks();
  });

  it("should return a function", () => {
    // Arrange
    const properties: HttpApiHandlerFactoryProperties<unknown> = {
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
    const properties: HttpApiHandlerFactoryProperties<any> = {
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
});
