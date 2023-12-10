import { handlerPath } from "@packages/lambda/handler-path";
import type { AWS } from "@serverless/typescript";

export const createSkill: NonNullable<AWS["functions"]>[string] = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "GET",
        path: "/skills"
      }
    }
  ]
};
