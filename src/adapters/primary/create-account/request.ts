import { handlerPath } from "@packages/lambda/handler-path";

export const createAccountHandler = {
  handler: `${handlerPath(__dirname)}/handler.main`
};
