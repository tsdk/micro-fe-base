module.exports = {
  verbose: true,
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$", // 匹配测试文件
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "vue", "json", "node"],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "/node_modules/",
    "/vendor/",
    "/docs/",
    "/dist/",
    "/config/",
    "/public/",
    "/coverage/",
  ],
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(vue)$": "vue3-jest",
    "^.+\\.(css|styl|less|sass|scss|svg|png|jpg|jpeg|ttf|woff|woff2)$":
      "jest-transform-stub",
  },
  setupFiles: [],
  transformIgnorePatterns: ["/node_modules/"],
  collectCoverage: true, // 开启收集Coverage（测试覆盖范围）
  coverageDirectory: "<rootDir>/coverage/", // 指定生成的coverage目录
  coveragePathIgnorePatterns: ["<rootDir>/coverage/", "/node_modules/"], //该路径下的测试，忽略测试覆盖率
  collectCoverageFrom: [
    "**/*.{ts,tsx,js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/docs/**",
    "!**/dist/**",
    "!**/public/**",
    "!**/config/**",
    "!**/coverage/**",
    "!**/__tests__/**",
    "!**/*.spec.{ts,tsx,js,jsx}",
    "!**/*.test.{ts,tsx,js,jsx}",
  ],
};
