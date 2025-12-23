const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: (pathData) => {
            // Favicon файлы в корень, остальные в images/
            const filename = pathData.filename;
            if (filename.includes('favicon') || filename.includes('apple-touch-icon')) {
              return '[name][ext]';
            }
            return 'images/[name][ext]';
          }
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
};

