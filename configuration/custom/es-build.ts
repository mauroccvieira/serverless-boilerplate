export const esbuild = {
  bundle: true,
  minify: true,
  sourcemap: true,
  exclude: ["aws-sdk/*"],
  packager: "yarn",
  target: "node20",
  define: { "require.resolve": undefined },
  platform: "node",
  concurrency: 10
};
