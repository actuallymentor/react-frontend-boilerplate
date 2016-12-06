let BrowserSyncPlugin = require('browser-sync-webpack-plugin')
let autoprefixer = require ( 'autoprefixer' )
let webpack = require( 'webpack' )

module.exports = {
  entry: __dirname + '/src/main.js',
  output: {
    filename: __dirname + '/public/js/app.js'
  },
  module: {
    loaders: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    },
    {
      test: /\.scss$/,
      loaders: ["style", "css", "sass", "postcss"]
    }
    ]
  },
  devtool: 'cheap-module-source-map',
  postcss: [
  autoprefixer( { browsers: ['last 2 versions'] } )
  ],
  plugins: [
  new BrowserSyncPlugin( {
    host: 'localhost',
    port: 3000,
    server: { baseDir: ['public'] },
    notify: {
      styles:  [
      "display: none",
      "padding: 15px",
      "font-family: sans-serif",
      "position: fixed",
      "font-size: 0.9em",
      "z-index: 9999",
      "bottom: 0px",
      "right: 0px",
      "border-bottom-left-radius: 5px",
      "background-color: #1B2032",
      "margin: 0",
      "color: white",
      "text-align: center"
      ]
    }
  } ),
  new webpack.DefinePlugin( {
    'process.env': {
      NODE_ENV: JSON.stringify( 'production' )
    }
  } ),
  new webpack.optimize.UglifyJsPlugin( {
    compress: {
      warnings: false
    }
  })
  ]
}