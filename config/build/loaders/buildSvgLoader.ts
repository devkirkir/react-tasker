export function buildSvgLoader() {
  return {
    test: /\.svg$/,
    issuer: /\.tsx?$/,
    use: ["@svgr/webpack"],
  };
}
