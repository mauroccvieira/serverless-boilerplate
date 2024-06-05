/** @type {import('ts-jest').JestConfigWithTsJest} */
import { pathsToModuleNameMapper } from "ts-jest";
import tsconfig from "tsconfig.json";

module.exports = {
  displayName: "e2e",
  testMatch: ["**/__tests__/**/e2e/**/*.[jt]s?(x)"],
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverageFrom: ["src/**/*.ts", "!/node_modules/"],
  moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
    prefix: "<rootDir>/"
  })
};
