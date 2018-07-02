module.exports = {
  entry: './src/ts/index.ts',
  output: {
    path: `${__dirname}/public`,
    filename: 'js/script.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [{
      test: /\.(t|j)s$/,
      loader: 'ts-loader'
    }]
  }
};
