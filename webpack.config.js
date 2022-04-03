const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = process.env.PORT || 3000;

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: `bundle.js`,
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
        //option => 로더 옵션
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "public/index.html" })],
  devServer: {
    host: "localhost", //개발 서버 url
    port: port,
    open: true, //open은 서버가 실행될 때 브라우저를 자동으로 열어줄지 결정한다.
  },
};
