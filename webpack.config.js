'use strict';

const { DefinePlugin } = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyPlugin = require('uglifyjs-webpack-plugin');

const webPackConfig = module.exports = {};

webPackConfig.entry = `${__dirname}/src/main.js`;
webPackConfig.output = {
  filename : 'bundle.[hash].js',
  path : `${__dirname}/build`,
};

webPackConfig.plugins = [
  new HTMLPlugin({ title: 'loops' }),
  new ExtractTextPlugin({
    filename: 'bundle[hash].css',
    disable: process.env.NODE_ENV !== 'production',
  }),
  new DefinePlugin({
    __NODE_ENV__ : JSON.stringify('production'),
  }),

];

webPackConfig.module = {
  rules: [
    {
      test: /\.(woff|woff2|ttf|eot).*/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'font/[name].[hash].[ext]',
          },
        },
      ],
    },
    {
      test: /\.(pdf|jpg|gif|png|svg)$/,
      exclude: /\.icon\.svg$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'image/[name].[hash].[ext]',
        },
      }],
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    {
      test:  /\.scss$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [`${__dirname}/src/style`],
            },
          },
        ],
      }),
    },
  ],
};

if(process.env.NODE_ENV !== 'production') { 

  webPackConfig.devtool = 'eval-source-map';

  webPackConfig.devServer = {
    historyApiFallback: true,
  };
}

if(process.env.NODE_ENV === 'production') {
  webPackConfig.plugins.push(
    new UglifyPlugin({
      uglifyOptions: {
        compress: {
          dead_code: true,
        },
      },
    })
  );
}