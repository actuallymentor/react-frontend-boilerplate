let BrowserSyncPlugin = require('browser-sync-webpack-plugin')
let autoprefixer = require ( 'autoprefixer' )
let webpack = require( 'webpack' )
const bs = require( 'browser-sync' )
const ip = require( 'ip' )

// ///////////////////////////////
// Plugins
// ///////////////////////////////
let thebs
const servername = 'bsserver'
const bsconfig = {
  host: ip.address(),
  open: true,
  port: 3000,
  server: { 
    baseDir: [ 'public' ],
    serveStaticOptions: {
      extensions: ['html']
    }
  },
  https: true,
  // proxy: 'https://web.dev:3000',
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
}
const bsyncplugconfig = {
  name: servername,
  callback: f => { thebs = bs.get( servername ) }
}

// Get environment variables
require('dotenv').config( `${__dirname}/.env` )
// Remap process env
const stringify_env = f => {
  let environment = {}
  Object.keys( process.env ).map( ( key, index ) => { return environment[ key ] = JSON.stringify( process.env[ key ] ) } )
  return environment
}

const plugins = process.env.NODE_ENV == 'production' ? [
    new webpack.DefinePlugin( { 'process.env': { NODE_ENV: JSON.stringify( 'production' ) } } ),
    new webpack.DefinePlugin( stringify_env( ) ) ]
  :
  [ new BrowserSyncPlugin( bsconfig, bsyncplugconfig ),
    new webpack.DefinePlugin( stringify_env( ) ) ]

const maps = env => {
  if( env == 'production' ) {
    return 'cheap-module-source-map'
  } else {
    return 'eval'
  }
}

console.log( 'Environment is ' + process.env.NODE_ENV )
console.log( 'Source maps are using ' + maps( process.env.NODE_ENV ) )


module.exports = {
  entry: `${__dirname}/src/main.js`,
  output: {
    filename: 'app.js',
    path: `${__dirname}/public/js/`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: f => { return [ autoprefixer( { browsers: ['last 2 versions'] } ) ] }
            }
          },
          "sass-loader" ]
      }
    ]
  },
  devtool: process.env.NODE_ENV == 'production' ?  'cheap-module-source-map' : 'eval',
  plugins: plugins
}