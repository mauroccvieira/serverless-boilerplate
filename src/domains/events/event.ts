import type { Dto } from "@domains/dto/Dto";

export abstract class Event {
  abstract name: string;
  abstract time: Date;
  dto: Dto;

  constructor(dto: Dto) {
    this.dto = dto;
  }
}
