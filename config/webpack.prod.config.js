const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
//const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

//const environment = require("./environment");

module.exports = merge(commonConfig, {
  mode: "production",
  // Production-specific configuration
  optimization: {
    minimizer: [new TerserPlugin({ parallel: true })],
  },
  // Additional production plugins and loaders
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    // Other production-specific plugins
    new CssMinimizerPlugin(),
  ],
});
