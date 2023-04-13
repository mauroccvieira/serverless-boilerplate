import { ValidationError } from "@errors/validation-error";
import { internalErrorHandler } from "@packages/lambda/error-handlers/internalErrorHandler";
import { validationErrorHandler } from "@packages/lambda/error-handlers/validationErrorHandler";
import type { APIGatewayProxyResult } from "aws-lambda";

export function errorHandler(error: unknown): APIGatewayProxyResult {
  if (error instanceof ValidationError) return validationErrorHandler(error);

  return internalErrorHandler();
}
