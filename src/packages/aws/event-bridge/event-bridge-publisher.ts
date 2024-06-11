import {
  EventBridgeClient,
  EventBridgeClientConfig,
  PutEventsCommand
} from "@aws-sdk/client-eventbridge";
import { EventInterface } from "@domains/events/event";
import type { EventPublisher } from "@domains/events/event-repository";
const defaultConfiguration: EventBridgeClientConfig = {};
if (process.env.IS_OFFLINE) {
  defaultConfiguration.endpoint = "http://localhost:4566";
  defaultConfiguration.region = "us-east-1";
  defaultConfiguration.credentials = {
    accessKeyId: "fake",
    secretAccessKey: "fake"
  };
}

const CLIENT = new EventBridgeClient(defaultConfiguration);

export class EventBridgePublisher implements EventPublisher {
  async publish(event: EventInterface): Promise<void> {
    const command = new PutEventsCommand({
      Entries: [
        {
          Detail: JSON.stringify(event),
          DetailType: event.schemaName,
          Source: process.env.AWS_LAMBDA_FUNCTION_NAME,
          Time: event.time
        }
      ]
    });
    await CLIENT.send(command);
  }
}
