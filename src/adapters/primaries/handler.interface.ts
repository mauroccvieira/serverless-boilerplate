import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export type HttpResponse = APIGatewayProxyResult;
export type HttpRequest = APIGatewayProxyEvent;

export interface HandlerInterface<REQ, RES> {
  handler(request: REQ): Promise<RES>;
}

export interface HttpHandler
  extends HandlerInterface<HttpRequest, HttpResponse> {
  handler(request: HttpRequest): Promise<HttpResponse>;
}
