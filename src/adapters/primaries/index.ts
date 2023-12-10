import type { AWS } from "@serverless/typescript";

import { createSkill } from "./create-skill";

export const functions: AWS["functions"] = {
  createSkill
};
