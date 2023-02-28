const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    doc: path.resolve(__dirname, "/src/doc.js"),
    home: path.resolve(__dirname, "./src/home.js"),
  },
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "[name].js",
  },
  module: {
    rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }],
  },
  devServer: {
    // watchFiles: path.join(__dirname, ""),
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
};
