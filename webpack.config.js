const path = require("path");

module.exports = {
  entry: "./src/init.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "public"),
  },
  mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192
                    }
                  }
                ]
            }


        ]
    },
    devServer: {
        port: 3000,
        open: true,
        hot: true,
        historyApiFallback: {
            index: "index.html",
        },
    },
} 