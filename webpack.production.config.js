const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

const PATHS = {
  app: path.join(__dirname, 'src'),
  js: path.join(__dirname, 'src', 'js'),
  sass: path.join(__dirname, 'src', 'styles', 'scss'),
  build: path.join(__dirname, 'build')
}

module.exports = {
  context: PATHS.app,
  devtool: 'cheap-module-source-map',
  entry: path.join(PATHS.js, './client.js'),
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loaders: [ 'style', 'css', 'sass' ]
      },
      {
        test: /manifest.json$/,
        loader: 'file?name=manifest.json!web-app-manifest-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/i,
        include: [
          path.resolve(__dirname, 'src/styles/fonts')
        ],
        loaders: [
          'file-loader?name=[path][name].[ext]',
          'image-webpack'
        ]
      },
      {
        test: /\.(png|svg)$/i,
        include: [
          path.resolve(__dirname, 'src/images')
        ],
        loaders: [
          'file-loader?name=[path][name].[ext]',
          'image-webpack'
        ]
      }
    ],
    sassLoader: {
      includePaths: [ PATHS.sass ]
    },
    imageWebpackLoader: {
      mozjpeg: {
        quality: 65
      },
      pngquant: {
        quality: '65-90',
        speed: 4
      },
      svgo: {
        plugins: [
          {
            removeViewBox: false
          },
          {
            removeEmptyAttrs: false
          }
        ]
      }
    }
  },
  output: {
    path: PATHS.build,
    filename: 'client.min.js'
  },
  eslint: {
    configFile: './.eslintrc'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(
      {
        mangle: false,
        sourcemap: false,
        compress: {
          warnings: false
        },
        output: {
          comments: false
        }
      }
    ),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new CopyWebpackPlugin([
      {
        from: '../src/index.html',
        to: 'index.html'
      }
    ]),
    new SWPrecacheWebpackPlugin({
      cacheId: 'webapp-car',
      filename: 'car-service-worker.js',
      maximumFileSizeToCacheInBytes: 4194304,
      runtimeCaching: [
        {
          handler: 'cacheFirst',
          urlPattern: /[.]mp3$/
        }
      ]
    })
  ]
}
