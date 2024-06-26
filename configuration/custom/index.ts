import { localstack } from "configuration/custom/localstack";
import { esbuild } from "./es-build";
import { serverlessOffline } from "./serverless-offline";

export const custom = {
  "serverless-offline": serverlessOffline,
  esbuild,
  localstack
};
