const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const smp = new SpeedMeasurePlugin();
const environment = require("./environment");

module.exports = {
  entry: {
    main: path.resolve(environment.paths.source, "js", "main.js"),
  },
  output: {
    filename: "js/[name].js",
    path: environment.paths.output,
  },
  module: {
    rules: [
      // Handling images with file-loader
      // {
      //   test: /\.(png|jpe?g|gif)$/i, // Removed svg from here
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "[name].[ext]",
      //         outputPath: "images/",
      //         publicPath: "images/",
      //       },
      //     },
      //   ],
      // },

      // Handling fonts  with asset/inline
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/, // Removed svg from here
        type: "asset/inline",
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      // {
      //   test: /\.html$/,
      //   use: "html-loader",
      // },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      // Add this rule for handling CSS files
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
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
      title: "Webpack boilerplate",
      template: path.resolve(environment.paths.source, "page-template.html"),
      filename: "page-template.html",
      inject: true,
      hash: true,
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(environment.paths.source, "about.html"),
      favicon: path.resolve(
        environment.paths.source,
        "images/icons/favicon.ico",
      ),
      //inject: true,
      //chunks: ["index"],
      filename: "about.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(environment.paths.source, "services.html"),
      favicon: path.resolve(
        environment.paths.source,
        "images/icons/favicon.ico",
      ),
      //inject: true,
      //chunks: ["index"],
      filename: "services.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(environment.paths.source, "service-1.html"),
      favicon: path.resolve(
        environment.paths.source,
        "images/icons/favicon.ico",
      ),
      //inject: true,
      //chunks: ["index"],
      filename: "service-1.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(environment.paths.source, "404.html"),
      favicon: path.resolve(
        environment.paths.source,
        "images/icons/favicon.ico",
      ),
      //inject: true,
      //chunks: ["index"],
      filename: "404.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(environment.paths.source, "images"), // Source folder
          to: path.resolve(environment.paths.output, "images"), // Destination folder
        },
        // You can add more patterns here if needed
      ],
    }),
    // new ImageMinimizerPlugin({
    //   minimizer: {
    //     implementation: ImageMinimizerPlugin.imageminGenerate,
    //     options: {
    //       plugins: [
    //         "imagemin-gifsicle",
    //         "imagemin-mozjpeg",
    //         "imagemin-pngquant",
    //         // "imagemin-svgo" is removed
    //       ],
    //     },
    //   },
    // }),
  ],
};
