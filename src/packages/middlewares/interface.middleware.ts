import middy from "@middy/core";
import { Middleware } from "@packages/middlewares/types";

export const createMiddleware = (): Middleware => {
  return middy();
};
