import type { APIGatewayProxyResult } from "aws-lambda";

export type LambdaResponse = APIGatewayProxyResult;

/**
 * Represents a builder for constructing Lambda responses.
 */
export class LambdaResponseBuilder {
  /**
   * The headers of the response.
   */
  headers?:
    | {
        [header: string]: boolean | number | string;
      }
    | undefined;

  /**
   * The multi-value headers of the response.
   */
  multiValueHeaders?:
    | {
        [header: string]: Array<boolean | number | string>;
      }
    | undefined;

  /**
   * The body of the response.
   */
  body: string | undefined;

  /**
   * Indicates whether the response body is base64 encoded.
   */
  isBase64Encoded?: boolean | undefined;

  constructor(private statusCode: number) {}

  /**
   * Sets the body of the response.
   * @param body The body of the response.
   * @returns The LambdaResponseBuilder instance.
   */
  withBody(body?: object): LambdaResponseBuilder {
    if (body) this.body = JSON.stringify(body);
    return this;
  }

  /**
   * Sets the headers of the response.
   * @param headers The headers of the response.
   * @returns The LambdaResponseBuilder instance.
   */
  withHeaders(headers: {
    [header: string]: boolean | number | string;
  }): LambdaResponseBuilder {
    this.headers = headers;
    return this;
  }

  /**
   * Sets the multi-value headers of the response.
   * @param multiValueHeaders The multi-value headers of the response.
   * @returns The LambdaResponseBuilder instance.
   */
  withMultiValueHeaders(multiValueHeaders: {
    [header: string]: Array<boolean | number | string>;
  }): LambdaResponseBuilder {
    this.multiValueHeaders = multiValueHeaders;
    return this;
  }

  /**
   * Sets whether the response body is base64 encoded.
   * @param isBase64Encoded Indicates whether the response body is base64 encoded.
   * @returns The LambdaResponseBuilder instance.
   */
  withIsBase64Encoded(isBase64Encoded: boolean): LambdaResponseBuilder {
    this.isBase64Encoded = isBase64Encoded;
    return this;
  }

  withStatusCode(statusCode: number): LambdaResponseBuilder {
    this.statusCode = statusCode;
    return this;
  }

  /**
   * Builds the LambdaResponse object.
   * @returns The built LambdaResponse object.
   */
  build(): LambdaResponse {
    return {
      statusCode: this.statusCode,
      headers: this.headers,
      multiValueHeaders: this.multiValueHeaders,
      body: this.body ?? "{}",
      isBase64Encoded: this.isBase64Encoded
    };
  }

  /**
   * Resets the LambdaResponseBuilder instance.
   */
  reset(): LambdaResponseBuilder {
    this.headers = undefined;
    this.multiValueHeaders = undefined;
    this.body = "{}";
    this.isBase64Encoded = undefined;
    return this;
  }
}
