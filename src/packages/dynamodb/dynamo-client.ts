import { DynamoDBClient, DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";

const defaultConfiguration: DynamoDBClientConfig = {};

if (process.env.IS_OFFLINE) {
  defaultConfiguration.endpoint = "http://localhost:4566";
  defaultConfiguration.region = "us-east-1";
  defaultConfiguration.credentials = {
    accessKeyId: "fake",
    secretAccessKey: "fake"
  };
}

export const DYNAMODB_CLIENT = new DynamoDBClient(defaultConfiguration);
