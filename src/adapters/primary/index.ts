import type { AWS } from "@serverless/typescript";

import { createAccount } from "./create-account";

export const functions: AWS["functions"] = { createAccount };
