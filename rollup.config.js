import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'app.js',
  dest: './public/js/bundle.js',
  sourceMap: true,
  plugins: [
    commonjs({})
  ]
}
