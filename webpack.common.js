module.exports = {
  entry: {
    main: "./src/app/index.js"
  },
  module: {
    rules: [
        {
            test : /\.(js)$/, 
            use:'babel-loader',
            exclude: /node_modules/ 
        },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      }
    ]
  }
};