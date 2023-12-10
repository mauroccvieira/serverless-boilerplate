import { CreateSkillUsecase } from "@domains/skills/usecases/create-skill.usecase";

import { CreateSkillHandler } from "./controller";

const usecase = new CreateSkillUsecase();

const controller = new CreateSkillHandler(usecase);

export const main = controller.handler.bind(controller);
