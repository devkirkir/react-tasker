import { Configuration } from "webpack";

import { BuildOptions } from "./types/config";

import { buildLoaders } from "./buildLoaders";
import { buildResolves } from "./buildResolves";
import { buildPlugins } from "./buildPlugins";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { paths, mode, isDev } = options;

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: options.paths.output,
      clean: true,
      publicPath: "/",
    },
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolves(options),
    plugins: buildPlugins(paths, isDev),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
