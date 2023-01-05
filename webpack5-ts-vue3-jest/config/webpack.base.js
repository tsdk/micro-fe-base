const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");

const devMode = process.env.NODE_ENV !== "production";
const cssPrefix = ".my";

module.exports = {
  entry: "./src/index.ts",
  cache: {
    type: "filesystem", // 编译结果缓存
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.(t|j)s$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          devMode
            ? "postcss-loader"
            : {
                loader: "postcss-loader",
                options: {
                  postcssOptions: {
                    plugins: {
                      "postcss-prefix-selector": {
                        prefix: cssPrefix,
                        transform(
                          prefix,
                          selector,
                          prefixedSelector,
                          filePath,
                          rule
                        ) {
                          if (selector.match(/^(html|body)/)) {
                            return selector.replace(
                              /^([^\s]*)/,
                              `$1 ${prefix}`
                            );
                          }

                          if (filePath.match(/node_modules/)) {
                            return selector; // Do not prefix styles imported from node_modules
                          }

                          const annotation = rule.prev();
                          if (
                            annotation?.type === "comment" &&
                            annotation.text.trim() === "no-prefix"
                          ) {
                            return selector; // Do not prefix style rules that are preceded by: /* no-prefix */
                          }

                          return prefixedSelector;
                        },
                      },
                      autoprefixer: {
                        cascade: false,
                      },
                    },
                  },
                },
              },
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        type: "asset",
        generator: {
          filename: "images/[name]-[hash][ext]",
        },
      },
      {
        test: /\.(eot|svg|ttf|woff2?|)$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name]-[hash][ext]",
        },
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
    extensions: [".ts", "..."],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: "webpack5+ts+vue3",
      template: "./index.html",
    }),
  ],
};
