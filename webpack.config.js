const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    doc: path.resolve(__dirname, "/src/doc.js"),
    home: path.resolve(__dirname, "./src/home.js"),
  },
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "[name].js",
  },
  //   plugins: [
  //     new HtmlWebpackPlugin({
  //       template: path.join(__dirname, "src", "template.html"),
  //       filename: "index.html",
  //     }),
  //   ],
  devServer: {
    watchFiles: path.join(__dirname, ""),
    static: [
      {
        publicPath: "/",
        directory: ["public", "pages"],
      },
      {
        publicPath: "/docs/",
        directory: ["public", "pages"],
      },
    ],
    proxy: {
      "/collab-backend": {
        target: "http://localhost:8800",
      },
    },
    // open: ["index"],
  },
};
