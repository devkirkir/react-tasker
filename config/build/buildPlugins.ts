import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

import { WebpackPluginInstance } from "webpack";
import { BuildPaths } from "./types/config";

export function buildPlugins(paths: BuildPaths): WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: paths.html,
      title: "Tasker",
    }),
    new MiniCssExtractPlugin({
      filename: "./css/[name].[contenthash].css",
      chunkFilename: "./css/[name].[contenthash].css",
    }),
    new BundleAnalyzerPlugin({ openAnalyzer: false }),
  ];
}
