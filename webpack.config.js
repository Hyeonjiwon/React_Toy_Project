const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/main.js", // 번들링 시작 파일 설정
  },
  /* 번들링된 결과물의 파일명과 경로 설정 */
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true, // 빌드 전 output 폴더의 삭제 후 다시 파일들을 넣어주는 기능
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devtool: "source-map",
  devServer: {
    static: path.resolve(__dirname, "public"),
    hot: true, // 저장할 때마다 수정사항 반영
    open: true, // 브라우저 자동 실행
    port: 3000 // process.env.PORT,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
