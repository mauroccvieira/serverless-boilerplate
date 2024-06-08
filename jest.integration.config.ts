/** @type {import('ts-jest').JestConfigWithTsJest} */
import { pathsToModuleNameMapper } from "ts-jest";
import tsconfig from "tsconfig.json";

module.exports = {
  displayName: "integration",
  testMatch: ["**/__tests__/**/integration/**/*.[jt]s?(x)"],
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
    prefix: "<rootDir>/"
  })
};
