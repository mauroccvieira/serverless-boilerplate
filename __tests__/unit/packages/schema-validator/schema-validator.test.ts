import { schemaValidator } from "@packages/schema-validator";

const body = {
  firstName: "Lee",
  surname: "Gilmore"
};

const schema = {
  type: "object",
  required: ["firstName", "surname"],
  maxProperties: 2,
  minProperties: 2,
  properties: {
    firstName: {
      type: "string",
      pattern: "^[a-zA-Z]+$"
    },
    surname: {
      type: "string",
      pattern: "^[a-zA-Z]+$"
    }
  }
};

describe("schema-validator", () => {
  it("should validate a schema correctly", () => {
    expect(() => schemaValidator(schema, body)).not.toThrow();
  });

  it("should throw an error if the schema is invalid", () => {
    const badBody = {
      ...body,
      firstName: null
    };
    expect(() => schemaValidator(schema, badBody)).toThrow();
  });
});
