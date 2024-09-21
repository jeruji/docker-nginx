const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => {
    return {
        entry: "./src/index.tsx",
      output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
        publicPath: "/",
        clean:true
      },
      devServer: {
        port: 8090,
        historyApiFallback: true,
      },
      resolve: {
        extensions: [".tsx", ".ts", ".js"],
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: "ts-loader",
          },
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader",
          },
          {
            test: /\.(s(a|c)ss)$/,
            use: ["style-loader", "css-loader", "sass-loader"],
          },
          {
            test: /\.(gif|png|jpe?g|svg|xlsx)$/i,
            type: "asset/resource",
            parser: {
              dataUrlCondition: {
                maxSize: 8192,
              },
            },
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: path.join(__dirname, "/src/index.html"),
        }),
      ],
    }
}