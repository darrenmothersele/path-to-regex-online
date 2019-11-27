import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from 'rollup-plugin-commonjs';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'index.js',
  output: {
    file: 'bundle.js',
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    nodeResolve(),
    commonjs(),
  ]
}
