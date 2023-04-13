export const ACCOUNT_SCHEMA = {
  type: "object",
  required: ["id", "firstName", "surname", "createdAt", "updatedAt"],
  maxProperties: 5,
  minProperties: 5,
  properties: {
    id: {
      type: "string"
    },
    firstName: {
      type: "string",
      pattern: "^[a-zA-Z]+$"
    },
    surname: {
      type: "string",
      pattern: "^[a-zA-Z]+$"
    },
    createdAt: {
      type: "string"
    },
    updatedAt: {
      type: "string"
    }
  }
};
