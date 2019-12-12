const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: {
    script: './js/main.js'
  },
  output: {
    path: __dirname,
    filename: "../src/assets/js/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.m?js/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {}]]
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}