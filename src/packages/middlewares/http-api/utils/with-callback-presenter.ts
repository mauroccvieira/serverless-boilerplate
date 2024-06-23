import { Presenter } from "@packages/middlewares/types";
import { APIGatewayProxyResult, Callback } from "aws-lambda";

/**
 * Wraps a callback function in another function that will present the response, if any, before calling the callback.
 */
export function withPresenter<RESPONSE>(
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
