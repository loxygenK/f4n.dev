import path from "path"
import HtmlWebpackPlugin from "html-webpack-plugin";

import webpack from "webpack";

const configuration: webpack.Configuration = {
  // TODO: Change this using environemnt variable
  mode: "development",
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundled_[contenthash].js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: ['babel-loader'],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "template.html"),
      scriptLoading: "defer"
    })
  ]
}

export default configuration;

