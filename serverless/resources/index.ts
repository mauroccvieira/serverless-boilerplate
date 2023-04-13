import type { AWS } from "@serverless/typescript";

import { accountTable } from "./account-table";

export const resources: AWS["resources"] = {
  Resources: { accountTable }
};
