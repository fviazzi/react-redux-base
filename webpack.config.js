// External modules
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Internal modules
const browserSync = require("./.webpack/browsersync.js");
const miniCss     = require("./.webpack/mini-css.js");
const config     = require("./.webpack/config.json");

module.exports = {

  watch: true,

  devtool: 'cheap-module-source-map',

  entry : {
    scripts: [ './src/index.jsx', './src/style.scss' ],
  },

  output: {
    path    : path.resolve( __dirname, 'build' ),
    filename: 'main.js'
  },

  module: {

    rules: [
        {

        test: /\.jsx?$/,

        include: [
          path.resolve(__dirname, "src")
        ],

        exclude: [
          path.resolve(__dirname, "node_modules")
        ],

        loader: "babel-loader",

        options: {
          presets: ['@babel/preset-env', '@babel/react']
        },

        type: "javascript/auto"
      },
      {

        test: /\.(sa|sc|c)ss$/,

        use: [

          MiniCssExtractPlugin.loader,

          {
            loader: 'css-loader',
            options: { url: true, sourceMap: true }
          },

          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ]
      },
    ]
  },

  externals: {

    config : JSON.stringify({
      basepath: config.base,
    }),

  },

  plugins: [
    browserSync,
    miniCss
  ]
};