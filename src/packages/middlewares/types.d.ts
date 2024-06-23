import { MiddyfiedHandler } from "@middy/core";

export type Presenter<DATA, RESPONSE> = (data: DATA) => RESPONSE;
export type Middleware = MiddyfiedHandler;
export type OnErrorFunction = Parameters<MiddyfiedHandler["onError"]>[0];
