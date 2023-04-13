import { schemaValidator } from "@packages/schema-validator";
import { randomUUID } from "crypto";

export abstract class Entity<T> {
  private readonly _id: string;
  private readonly _createdAt: string;
  private _updatedAt: string;
  protected props: T;

  constructor(props: T, id?: string, createdAt?: string, updatedAt?: string) {
    // set default values on creation
    this._id = id ? id : randomUUID();
    this._createdAt = createdAt ? createdAt : this.getISOString();
    this._updatedAt = updatedAt ? updatedAt : this.getISOString();
    this.props = {
      ...props,
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }

  public get id(): string {
    return this._id;
  }

  public get createdAt(): string {
    return this._createdAt;
  }

  public get updatedAt(): string {
    return this._updatedAt;
  }

  public setUpdatedDate() {
    this._updatedAt = this.getISOString();
  }

  protected validate(schema: Record<string, unknown>): void {
    schemaValidator(schema, this.props);
  }

  private getISOString(): string {
    return new Date().toISOString();
  }
}
