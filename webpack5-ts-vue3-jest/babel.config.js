module.exports = {
  presets: [
    "@babel/preset-env",
    [
      "@babel/preset-typescript",
      {
        allExtensions: true, //支持所有文件扩展名
      },
    ],
  ],
  plugins: [
    ["@babel/plugin-transform-modules-commonjs"], // jest不支持es模块,用babel处理
  ],
};
