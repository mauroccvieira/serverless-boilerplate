import type { AWS } from "@serverless/typescript";

import { accountTable } from "./account-table";

export const resources = {
  Resources: { accountTable }
} satisfies AWS["resources"];
