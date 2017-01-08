module.exports = [
	{
		test: /js[\/\\].*\.jsx?$/,
		exclude: /(node_modules|bower_components|public\/)/,
		loader: "babel"
	}
];
