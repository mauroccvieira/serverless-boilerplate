import { ResponseBuilder } from "@packages/aws/lambda/response-builder";
import httpApiMiddleware from "@packages/middlewares/http-api/http-api.middleware";
import { HttpApiHandlerFactoryProperties } from "@packages/middlewares/http-api/types";
import { APIGatewayProxyEvent, Context } from "aws-lambda";

describe("httpApiHandlerFactory", () => {
  const sut = httpApiMiddleware;
  let properties: HttpApiHandlerFactoryProperties<{ foo: string }>;

  let context: Context;

  let event: APIGatewayProxyEvent;

  beforeEach(() => {
    jest.resetAllMocks();
    context = {} as any;
    event = {
      httpMethod: "GET"
    } as APIGatewayProxyEvent;
    properties = {
      handler: jest.fn(async () => ({ foo: "bar" })),
      presenter: jest.fn(() =>
        new ResponseBuilder().withStatusCode(200).build()
      )
    };
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
    const cb = jest.fn();
    // Act
    const handler = sut(properties);
    const handlerPromise = handler(event, context, cb);
    // Assert
    await expect(handlerPromise).resolves.toMatchObject(
      expect.objectContaining({ statusCode: 200 })
    );
    expect(properties.handler).toHaveBeenCalledWith(
      event,
      context,
      expect.any(Function)
    );
  });
});
