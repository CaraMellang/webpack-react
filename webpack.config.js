const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = process.env.PORT || 3000;
const mode = process.env.NODE_ENV || "production";

module.exports = {
  mode: "development", //production 모드하면 에러생김
  entry: "./src/index.tsx",
  output: {
    filename: `bundle.[hash].js`,
    path: path.resolve(__dirname, "build"),
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
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
  performance: {
    hints: false, //production 에서 에러발생시 끄기가능
  },
};
