/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  // coverageThreshold: {
  //   global: {
  //     branches: 80,
  //     functions: 80,
  //     lines: 80,
  //     statements: 80,
  //   },
  // },
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!src/main.tsx",
    "!.storybook/main.ts",
    "!.storybook/preview.tsx",
    "!**/*.stories.tsx",
    "!src/vite-env.d.ts",
    "!src/interfaces/**",
    "!src/mockers/**",
    "!src/assets/**",
    "!src/constants/**",
    "!src/mocks/**",
    "!src/services/**",
    "!src/themes/**",
    "!src/helpers/**",
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|sass)$": "<rootDir>/__mocks__/styleMock.js",
    "^@/assets(.*)$": "<rootDir>src/assets/$1",
    "^@/components(.*)$": "<rootDir>src/components/$1",
    "^@/constants(.*)$": "<rootDir>src/constants/$1",
    "^@/helpers(.*)$": "<rootDir>src/helpers/$1",
    "^@/hooks(.*)$": "<rootDir>src/hooks/$1",
    "^@/interfaces(.*)$": "<rootDir>src/interfaces/$1",
    "^@/layouts(.*)$": "<rootDir>src/layouts/$1",
    "^@/mocks(.*)$": "<rootDir>src/mocks/$1",
    "^@/pages(.*)$": "<rootDir>src/pages/$1",
    "^@/services(.*)$": "<rootDir>src/services/$1",
    "^@/themes(.*)$": "<rootDir>src/themes/$1",
  },
  verbose: true,
  collectCoverage: true,
};

export default config;
