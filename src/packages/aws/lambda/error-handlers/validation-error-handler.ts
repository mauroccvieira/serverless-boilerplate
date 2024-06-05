import type { ValidationError } from "@errors/validation-error";
import type { APIGatewayProxyResult } from "aws-lambda";

export function validationErrorHandler(
  error: ValidationError
): APIGatewayProxyResult {
  return {
    statusCode: 400,
    body: JSON.stringify({
      error: error.name,
      message: error.message,
      validations: JSON.parse(error.cause)
    })
  };
}
