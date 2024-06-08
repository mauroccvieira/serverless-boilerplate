/** @type {import('ts-jest').JestConfigWithTsJest} */
import { pathsToModuleNameMapper } from "ts-jest";
import tsconfig from "tsconfig.json";

module.exports = {
  displayName: "unit",
  testMatch: ["**/__tests__/**/unit/**/*.[jt]s?(x)"],
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
    prefix: "<rootDir>/"
  })
};
