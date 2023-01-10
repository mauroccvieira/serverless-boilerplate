import type { AWS } from "@serverless/typescript";

const serverlessConfiguration: AWS = {
  service: "serverless-boilerplate",
  frameworkVersion: "3",
  plugins: ["serverless-esbuild", "serverless-offline"],
  provider: {
    name: "aws",
    runtime: "nodejs18.x",
  },
  // import the function via paths
  functions: {
    createAccount: {
      handler: "src/adapter/primary/create-account-adapter.handler",
      events: [
        {
          httpApi: {
            path: "/account",
            method: "post",
          },
        },
      ],
    },
  },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: true,
      sourcemap: true,
      exclude: ["aws-sdk"],
      packager: "pnpm",
      target: "node18",
      platform: "node",
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
