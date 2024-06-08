import middy from "@middy/core";
import { WrappedHandler } from "@packages/middlewares/types";
import { Handler } from "aws-lambda";

export const wrapHandler = (handler: Handler): WrappedHandler => {
  return middy(handler);
};
