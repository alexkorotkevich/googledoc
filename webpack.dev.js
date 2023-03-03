const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    static: [
      {
        publicPath: "/",
        directory: path.join(__dirname, "pages/home"),
      },
      {
        publicPath: "/docs/*",
        directory: path.join(__dirname, "pages/doc"),
      },
    ],
    proxy: {
      "/collab-backend": {
        target: "http://localhost:8800",
      },
    },
  },
});
