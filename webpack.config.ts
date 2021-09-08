import path from "path"
import HtmlWebpackPlugin from "html-webpack-plugin";

import { Configuration } from "webpack";

const configuration: Configuration = {
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
        use: ['babel-loader']
      }
    ]
  }
}

export default configuration;

