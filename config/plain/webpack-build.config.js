const path = require('path');
const webpack = require('webpack');
const pkg = require('../../package');
const isDist = process.env.NODE_ENV === 'dist';

const now = new Date();
const banner = `
 ${pkg.name} v${pkg.version} plain
 ${pkg.repository.url}

 Copyright (c) 2019 ${pkg.author}
 Released under the ${pkg.license} license

 Date: ${now.toISOString()}
`;


module.exports = {
  entry: path.join(__dirname, "../../src/plain/index.js"),
  output: {
    path: path.join(__dirname, `../../${isDist ? 'dist' : 'build'}/plain`),
    filename: isDist ? 'index.js' : `${pkg.name}.min.js`
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new webpack.BannerPlugin(banner),
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devtool: 'source-map'
};
