import { Presenter } from "@packages/middlewares/types";
import { APIGatewayProxyResult, Callback } from "aws-lambda";

export function httpApiCallback<RESPONSE>(
  presenter: Presenter<
    Awaited<RESPONSE> | RESPONSE | void,
    APIGatewayProxyResult
  >,
  cb: Callback<APIGatewayProxyResult>
) {
  return (error?: Error | string | null, result?: RESPONSE): void => {
    cb(error, result ? presenter(result) : undefined);
  };
}
