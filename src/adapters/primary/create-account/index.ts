import { handlerPath } from "@packages/lambda/handler-path";
import type { AWS } from "@serverless/typescript";

export const createAccount: NonNullable<AWS["functions"]>[string] = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      httpApi: {
        path: "/account",
        method: "post"
      }
    }
  ]
};
