const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "[name][contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean:true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: " Sunny innit weather app",
      filename: "index.html",
      template: "src/template.html",
    }),
    new StylelintPlugin({
      files: 'src/*.css', // Specify which files to lint
    }),
  ],
};
