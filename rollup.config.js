import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'src/app.js',
  dest: 'src/public/js/bundle.js',
  sourceMap: true,
  plugins: [
    commonjs({})
  ]
}
