export type DtoProperties = string | number | boolean | Dto;

export interface Dto {
  [x: string]: DtoProperties;
}
