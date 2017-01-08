"use strict";
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var contextPath = '/dictionary';

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8888";

// local scss modules
loaders.push({
	test: /scss[\/\\].*\.scss$/,
	exclude: /[\/\\](node_modules|bower_components|public\/)[\/\\]/,
	loaders: [
		'style?sourceMap',
		'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
		'postcss',
		'sass'
	]
});

loaders.push({
	test: /\.css$/,
	loader: ExtractTextPlugin.extract('style', 'css')
});

loaders.push({
  test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
	loader: 'url'
});


module.exports = {
	entry: [
		'react-hot-loader/patch',
		'./src/js/views/components/app/index.jsx' // your app's entry point
	],
	devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
	output: {
		publicPath: '/',
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders
	},
	devServer: {
		contentBase: "./public",
		// do not print bundle build stats
		noInfo: true,
		// enable HMR
		hot: true,
		// embed the webpack-dev-server runtime into the bundle
		inline: true,
		// serve index.html in place of 404 responses to allow HTML5 history
		historyApiFallback: true,
		port: PORT,
		host: HOST
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			API_BASE_URL: JSON.stringify('http://localhost:8080/app/rest/dictionary'),
			LOGIN_API_BASE_URL: JSON.stringify('http://localhost:8080/app/rest/login'),
			CONTEXTPATH : JSON.stringify('')
		}),
		new webpack.HotModuleReplacementPlugin(),
		new DashboardPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		//new ExtractTextPlugin('bundle.css')
		new ExtractTextPlugin('[contenthash].css', {
			allChunks: true
		})
	]
};
