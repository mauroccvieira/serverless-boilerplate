import { ValidationError } from "@errors/validation-error";
import Ajv from "ajv";
import addFormats from "ajv-formats";

export function schemaValidator(
  schema: Record<string, unknown>,
  body: unknown
) {
  const ajv = new Ajv({
    allErrors: true
  });

  addFormats(ajv);
  ajv.addSchema(schema);

  const valid = ajv.validate(schema, body);

  if (!valid) {
    const validations = JSON.stringify(ajv.errors);
    throw new ValidationError("Schema validation failed", validations);
  }
}
