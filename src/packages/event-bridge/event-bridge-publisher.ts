import {
  EventBridgeClient,
  PutEventsCommand
} from "@aws-sdk/client-eventbridge";
import type { Event } from "@domains/events/event";
import type { EventPublisher } from "@domains/events/event-repository";

const CLIENT = new EventBridgeClient({});

export class EventBridgePublisher implements EventPublisher {
  async publish(event: Event): Promise<void> {
    const command = new PutEventsCommand({
      Entries: [
        {
          Detail: JSON.stringify(event.dto),
          DetailType: event.name,
          Source: process.env.AWS_LAMBDA_FUNCTION_NAME,
          Time: event.time
        }
      ]
    });
    await CLIENT.send(command);
  }
}
