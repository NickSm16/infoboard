const withSass = require('@zeit/next-sass') // TODO usestyle
module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      exclude: /node_modules/,
      loader: 'file-loader',
      options: {
        limit: 1024,
        name: '[name].[ext]',
        publicPath: 'dist/assets/',
        outputPath: 'dist/assets/'
      }
    })
    return config
  }
}