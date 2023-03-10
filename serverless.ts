import { functions } from "@adapters/primary";
import type { AWS } from "@serverless/typescript";

const serverlessConfiguration: AWS = {
  service: "serverless-boilerplate",
  frameworkVersion: "3",
  plugins: ["serverless-esbuild", "serverless-offline"],
  provider: {
    name: "aws",
    runtime: "nodejs18.x"
  },
  functions: { ...functions },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: true,
      sourcemap: true,
      exclude: ["aws-sdk"],
      packager: "yarn",
      target: "node18",
      platform: "node",
      concurrency: 10
    }
  }
};

module.exports = serverlessConfiguration;
