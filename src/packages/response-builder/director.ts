import { LambdaResponse, LambdaResponseBuilder } from "./builder";

export class Director {
  private static builder = new LambdaResponseBuilder(0);

  static OK(body?: object): LambdaResponse {
    return this.builder.reset().withStatusCode(200).withBody(body).build();
  }

  static CREATED(body?: object): LambdaResponse {
    return this.builder.reset().withStatusCode(201).withBody(body).build();
  }

  static NO_CONTENT(): LambdaResponse {
    return this.builder.reset().withStatusCode(204).build();
  }

  static BAD_REQUEST(body?: object): LambdaResponse {
    return this.builder.reset().withStatusCode(400).withBody(body).build();
  }

  static UNAUTHORIZED(body?: object): LambdaResponse {
    return this.builder.reset().withStatusCode(401).withBody(body).build();
  }

  static FORBIDDEN(body?: object): LambdaResponse {
    return this.builder.reset().withStatusCode(403).withBody(body).build();
  }

  static NOT_FOUND(body?: object): LambdaResponse {
    return this.builder.reset().withStatusCode(404).withBody(body).build();
  }

  static CONFLICT(body?: object): LambdaResponse {
    return this.builder.reset().withStatusCode(409).withBody(body).build();
  }

  static INTERNAL_SERVER_ERROR(body?: object): LambdaResponse {
    return this.builder.reset().withStatusCode(500).withBody(body).build();
  }

  static NOT_IMPLEMENTED(body?: object): LambdaResponse {
    return this.builder.reset().withStatusCode(501).withBody(body).build();
  }

  static BAD_GATEWAY(body?: object): LambdaResponse {
    return this.builder.reset().withStatusCode(502).withBody(body).build();
  }
}
