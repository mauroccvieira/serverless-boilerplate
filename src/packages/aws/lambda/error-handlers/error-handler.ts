import { ValidationError } from "@errors/validation-error";
import { internalErrorHandler } from "@packages/aws/lambda/error-handlers/internal-error-handler";
import { validationErrorHandler } from "@packages/aws/lambda/error-handlers/validation-error-handler";
import type { APIGatewayProxyResult } from "aws-lambda";

export function errorHandler(error: unknown): APIGatewayProxyResult {
  if (error instanceof ValidationError) return validationErrorHandler(error);

  return internalErrorHandler();
}
