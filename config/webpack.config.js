const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const environment = require("./environment");

module.exports = {
  //const isProduction = env === "production";

  entry: {
    main: path.resolve(environment.paths.source, "js", "main.js"),
    // Add more entry points if needed
  },
  output: {
    filename: "js/[name].js",
    path: environment.paths.output, // Use environment-specific output path
  },
  //mode: isProduction ? "production" : "development",
  //devtool: isProduction ? "source-map" : "eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new HtmlWebpackPlugin({
      title: "Webpack boilerplate",
      template: path.resolve(environment.paths.source, "template.html"),
      filename: "index.html",
      inject: true,
      hash: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(environment.paths.source, "about.html"),
      //inject: true,
      //chunks: ["index"],
      filename: "about.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(environment.paths.source, "images"),
          to: path.resolve(environment.paths.output, "images"),
          toType: "dir",
          globOptions: {
            ignore: ["*.DS_Store", "Thumbs.db"],
          },
        },
      ],
    }),
  ],
};
