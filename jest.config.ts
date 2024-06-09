/** @type {import('ts-jest').JestConfigWithTsJest} */
import { pathsToModuleNameMapper } from "ts-jest";
import tsconfig from "tsconfig.json";

module.exports = {
  silent: false,
  projects: [
    "<rootDir>/jest.unit.config.ts",
    "<rootDir>/jest.integration.config.ts",
    "<rootDir>/jest.e2e.config.ts"
  ],
  testEnvironment: "node",
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!<rootDir>/node_modules/"],
  coverageReporters: ["json-summary", ["text", { skipFull: false }]],
  preset: "ts-jest",
  moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
    prefix: "<rootDir>/"
  })
};
