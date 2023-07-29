const path = require("path");

module.exports = {
  paths: {
    /* Path to source files directory */
    source: path.resolve(__dirname, "../src/"),

    /* Path to built files directory */
    output: path.resolve(__dirname, "../dist/"),
  },
  // Other environment-specific variables
  server: {
    proxy: "http://localhost:8080",
  },
};
