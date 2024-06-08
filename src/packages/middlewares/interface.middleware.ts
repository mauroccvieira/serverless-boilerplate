import middy, { MiddyfiedHandler } from "@middy/core";
import { Handler } from "aws-lambda";

export type WrappedHandler = MiddyfiedHandler;

export const wrapHandler = (handler: Handler): WrappedHandler => {
  return middy(handler);
};
