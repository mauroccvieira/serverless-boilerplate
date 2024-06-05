import { handlerPath } from "@packages/aws/lambda/handler-path";

export const createAccountHandler = {
  handler: `${handlerPath(__dirname)}/handler.main`
};
