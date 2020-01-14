module.exports = {
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  transformIgnorePatterns: ["<rootDir>/node_modules"],
  testRegex: ".+\\.spec\\.js$",
  testPathIgnorePatterns: ["node_modules", "dist"],
  moduleFileExtensions: ["js"],
  testURL: "http://localhost",
  setupFilesAfterEnv: ["<rootDir>/src/__tests__/test.config.js"],
  reporters: [
    "default",
    [
      "jest-html-reporter",
      {
        outputPath: "reports/html/unit-tests.html",
        theme: "lightTheme"
      }
    ],
    [
      "jest-junit",
      {
        outputName: "reports/junit/unit-tests.xml"
      }
    ]
  ],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.js"],
  coverageReporters: ["text", "html"],
  coverageDirectory: "reports/coverage"
}
