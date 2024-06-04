export const esbuild = {
  bundle: true,
  minify: true,
  sourcemap: true,
  exclude: ["aws-sdk"],
  packager: "yarn",
  target: "node18",
  platform: "node",
  concurrency: 10
};
