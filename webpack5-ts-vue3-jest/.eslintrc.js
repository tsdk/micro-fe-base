module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 12, // es2021
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint", "prettier"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-types": "off",
    // semi: 0,
    // quotes: 0, //引号类型 `` "" ''
    // 'quote-props': 0, //对象字面量中的属性名是否强制双引号
    "prettier/prettier": [0, { singleQuote: true, semi: true }],
  },
};
