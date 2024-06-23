export const schema = {
  type: "object",
  required: ["body"],
  properties: {
    body: {
      type: "object",
      required: ["firstName", "surname"],
      properties: {
        firstName: { type: "string" },
        surname: { type: "string" }
      }
    }
  }
};
