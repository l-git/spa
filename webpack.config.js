
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode:'development',
    entry: './src/index.js',
    output: {
        filename: '[name].[hash].js',
        chunkFilename: '[name].[hash].chunk.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
              },
              // this will apply to both plain `.js` files
              // AND `<script>` blocks in `.vue` files
              {
                test: /\.js$/,
                loader: 'babel-loader'
              },
              // this will apply to both plain `.css` files
              // AND `<style>` blocks in `.vue` files
              {
                test: /\.css$/,
                use: [
                  'vue-style-loader',
                  'css-loader'
                ]
              },
              {
                test : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader : 'file-loader'
              }
        ]
      },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'./index.template.html'
        }),
        new VueLoaderPlugin()
      ],
      resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js', 
          '@':path.resolve('./src')
        }
      }

  };