import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: [
    { file: "dist/index.js", format: "cjs", sourcemap: true },
    { file: "dist/index.es.js", format: "esm", sourcemap: true },
  ],
  plugins: [resolve(), typescript({ tsconfig: "./tsconfig.json" })],
  external: ["react"],
};
