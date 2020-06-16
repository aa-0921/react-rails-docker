const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('dotenv').config({ path: `${__dirname}/.env` });
// module.config.resolve = { extensions: ['.js', '.scss'] };
module.exports = {
  mode: 'development',

  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  devServer: {
    port: '8000',
    hot: true,
    open: true,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
      },
      //   use: [
      //     {
      //       loader: 'postcss-loader',
      //       options: {
      //         ident: 'postcss',
      //         plugins: ['tailwindcss', 'autoprefixer'],
      //       },
      //     },
      //   ],
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        REACT_APP_API_URL_ALL_POST_DATAS: JSON.stringify(
          process.env.REACT_APP_API_URL_ALL_POST_DATAS,
        ),
        REACT_APP_API_URL: JSON.stringify(process.env.REACT_APP_API_URL),
        REACT_APP_API_URL_SNS_LOGIN: JSON.stringify(process.env.REACT_APP_API_URL_SNS_LOGIN),
      },
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
  node: { fs: 'empty' },

  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
};
