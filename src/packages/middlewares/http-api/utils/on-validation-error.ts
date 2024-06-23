import { ResponseBuilder } from "@packages/aws/lambda/response-builder";
import { OnErrorFunction } from "@packages/middlewares/types";

import { isMiddyValidatorError } from "../../utils/is-middy-validator-error";

export function onValidationError(): OnErrorFunction {
  return (req) => {
    const receivedError = req.error;
    console.info("Error received in middleware", JSON.stringify(receivedError));
    if (isMiddyValidatorError(receivedError)) {
      console.debug("Error is a validator error", receivedError);
      req.response = new ResponseBuilder()
        .withStatusCode(400)
        .withJsonBody({
          name: "ValidationError",
          message: receivedError.message,
          cause: receivedError.cause.data
        })
        .build();

      req.error = null;
    }
  };
}
