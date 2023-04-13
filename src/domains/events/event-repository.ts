import type { Event } from "./event";

export interface EventPublisher {
  publish(event: Event): Promise<void>;
}
