export function isMiddyValidatorError(error: unknown | undefined): error is {
  name: string;
  message: string;
  cause: { package: string; data: unknown[] };
} {
  return (
    typeof error === "object" &&
    error !== null &&
    "cause" in error &&
    "name" in error &&
    error.name === "BadRequestError" &&
    "statusCode" in error &&
    "message" in error &&
    error.statusCode === 400 &&
    error.message === "Event object failed validation"
  );
}
