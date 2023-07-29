const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const browserSyncConfig = require("./browserSync.config");

const environment = require("./environment");

module.exports = merge(commonConfig, {
  mode: "development",
  // Development-specific configuration
  devtool: "eval-source-map",
  plugins: [
    // ...
    new BrowserSyncPlugin(browserSyncConfig),
  ],

  // devServer: {
  //   contentBase: environment.paths.output, // Path to your static files
  //   publicPath: "/", // Public URL of the output directory
  //   compress: true, // Enable gzip compression
  //   port: 8080, // Development server port
  //   hot: true, // Enable Hot Module Replacement
  //   open: true, // Open the browser automatically
  //   watch: true, // Enable file watching
  // },
  devServer: {
    static: "./dist",
    hot: true,
    //directory: path.join(__dirname, "public"),
    client: {
      overlay: true,
    },
    compress: true,
    port: 8080,
  },
  //Additional development plugins and loaders
});
