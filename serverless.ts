import { functions } from "@adapters/primary";
import type { AWS } from "@serverless/typescript";
import { custom, resources } from "configuration";

const serverlessConfiguration: AWS = {
  service: "serverless-boilerplate",
  frameworkVersion: "3",
  plugins: [
    "serverless-localstack",
    "serverless-esbuild",
    "serverless-offline"
  ],
  provider: {
    name: "aws",
    runtime: "nodejs20.x"
  },
  functions: { ...functions },
  package: { individually: true },
  custom,
  resources
};

module.exports = serverlessConfiguration;
