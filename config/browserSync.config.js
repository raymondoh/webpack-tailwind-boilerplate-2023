const environment = require("./environment");
module.exports = {
  host: "localhost",
  port: 3001, // Modify the port as needed
  open: true,
  reload: false,
  ...environment.server,
  //proxy: "http://ALWAYS CHANGE THIS IN THE ENVIRONMENT.JS FILE", // Modify the proxy URL to match your webpack dev server URL
};
