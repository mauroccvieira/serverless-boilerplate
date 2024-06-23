import { APIGatewayProxyResult } from "aws-lambda";

export class ResponseBuilder {
  private _statusCode = HttpStatusCode.OK;
  private _headers: { [header: string]: string } = {};
  private _body = "";

  withStatusCode(statusCode: number): ResponseBuilder {
    this._statusCode = statusCode;
    return this;
  }

  withHeaders(headers: { [header: string]: string }): ResponseBuilder {
    this._headers = headers;
    return this;
  }

  withBody(body: string): ResponseBuilder {
    this._body = body;
    return this;
  }

  withJsonBody(body: unknown): ResponseBuilder {
    this._body = JSON.stringify(body);
    return this;
  }

  build(): APIGatewayProxyResult {
    return {
      statusCode: this._statusCode,
      headers: this._headers,
      body: this._body
    };
  }

  static internalServerError(): APIGatewayProxyResult {
    return new ResponseBuilder()
      .withStatusCode(HttpStatusCode.INTERNAL_SERVER_ERROR)
      .withJsonBody({
        message: "Internal server error"
      })
      .build();
  }
}

export enum HttpStatusCode {
  OK = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500
}
