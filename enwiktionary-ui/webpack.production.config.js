"use strict";
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var contextPath = '/dictionary';

// local scss modules
loaders.push({
	test: /scss[\/\\].*\.scss$/,
	exclude: /(node_modules|bower_components|public\/)/,
	loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
});

// global css files
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
		'./src/js/views/components/app/index.jsx' // your app's entry point
	],
	output: {
		publicPath: contextPath,
		//path: path.join(__dirname, 'public'),
		path: '..'+path.sep+'enwiktionary'+path.sep+'enwiktionary-web'+path.sep+'src'
					+path.sep+'main'+path.sep+'webapp'+path.sep+'public',
		filename: '[chunkhash].js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders
	},
	plugins: [
		new WebpackCleanupPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			},
			API_BASE_URL: JSON.stringify(contextPath+'/app/rest/dictionary'),
			LOGIN_API_BASE_URL: JSON.stringify(contextPath+'/app/rest/login'),
			CONTEXTPATH : JSON.stringify(contextPath)
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				screw_ie8: true,
				drop_console: true,
				drop_debugger: true
			}
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new ExtractTextPlugin('[contenthash].css', {
			allChunks: true
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new webpack.optimize.DedupePlugin()
	]
};
