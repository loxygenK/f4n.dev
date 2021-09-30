import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

import path from "path"

import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import sass from "sass";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration
}

const isProduction = (process.env.NODE_ENV === "production");

const configuration: Configuration = {
  mode: isProduction ? "production" : "development",
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundled_[contenthash].js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      '~': path.resolve(__dirname, "src/")
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: ['babel-loader'],
      },
      {
        test: /.scss/,
        use: [
          "style-loader",
          {
            loader: "css-loader?modules",
            options: {
              sourceMap: !isProduction,
              importLoaders: 2,
              modules: {
                exportLocalsConvention: "dashes"
              }
            }
          },
          {
            loader: "sass-loader",
            options: {
              implementation: sass,
              sourceMap: !isProduction,
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "template.html"),
      scriptLoading: "defer"
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "asset"),
          to: path.resolve(__dirname, "dist/asset")
        },
      ]
    }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 4000,
    historyApiFallback: true
  },
}

export default configuration;


