module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js"],
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub" // anything style related is ignored and mapped to jest-transform-stub module
  },
  testMatch: ["**/components/**/*.test.(ts|tsx)"],
  setupFiles: ["./jest.setup.ts"],
  testPathIgnorePatterns: ["./.next/", "./node_modules/"],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.jest.json"
    }
  }
};