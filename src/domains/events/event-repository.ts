import { EventInterface } from "@domains/events/event";

export interface EventPublisher {
  publish(event: EventInterface): Promise<void>;
}
