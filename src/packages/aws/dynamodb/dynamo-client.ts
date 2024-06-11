import { DynamoDBClient, DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";

const defaultConfiguration: DynamoDBClientConfig = {};

if (process.env.IS_OFFLINE) {
  defaultConfiguration.endpoint = "http://localhost:4566";
  defaultConfiguration.region = "us-east-1";
  defaultConfiguration.credentials = {
    accessKeyId: "fake",
    secretAccessKey: "fake"
  };
}

const DYNAMODB_CLIENT = new DynamoDBClient(defaultConfiguration);
const ddb = DynamoDBDocument.from(DYNAMODB_CLIENT, {
  marshallOptions: {
    removeUndefinedValues: true,
    convertClassInstanceToMap: true
  }
});

export { ddb };
