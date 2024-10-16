const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('../webpack.config.js');

module.exports = {
    mode: 'development',
    ...commonConfig,
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        ...commonConfig.module.rules,
      ],
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'public', 'index.html'),
          filename: 'index.html',
        }),
    ],
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'dist'),
      },
      compress: true,
      port: 3000,
    },
  };
