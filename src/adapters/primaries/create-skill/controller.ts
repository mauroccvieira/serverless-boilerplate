import type { CreateSkillUsecase } from "@domains/skills/usecases/create-skill.usecase";
import { Controller } from "@packages/decorators/controller/controller.decorator";
import type { APIGatewayProxyResult } from "aws-lambda";

import { CreationNotAllowedException } from "../../../domains/skills/exceptions/creation-not-allowed.exception";
import { ResponseGateway } from "../../../packages/response-builder";
import type { HttpHandler } from "../handler.interface";

@Controller({
  exception: [
    {
      exception: CreationNotAllowedException,
      response: (error: CreationNotAllowedException) =>
        ResponseGateway.BAD_REQUEST({
          name: error.name,
          message: error.message
        })
    }
  ]
})
export class CreateSkillHandler implements HttpHandler {
  constructor(private readonly usecase: CreateSkillUsecase) {}

  async handler(): Promise<APIGatewayProxyResult> {
    await this.usecase.execute();
    return ResponseGateway.OK();
  }
}
