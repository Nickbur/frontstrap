const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// https://webpack.js.org/guides/entry-advanced/#multiple-file-types-per-entry
module.exports = {
	// assets for work
	entry: {
		project: [
			'./src/scripts.js', 
			'./src/styles.scss'
		],
	},
	// final assets
	output: {
		path: path.resolve(__dirname, 'assets'),
		filename: 'scripts.js',
	},
	plugins: [
        new MiniCssExtractPlugin({
            filename: '../assets/styles.css',
            chunkFilename: '../assets/[id].css',
        }),
	],
	module: {
		rules: [{
				test: /\.(s*)css$/,
				use: [
					// https://github.com/webpack-contrib/mini-css-extract-plugin#publicPath
					{
						loader: MiniCssExtractPlugin.loader,
						options: {}
					},
					// The css-loader interprets @import and url() like import/require() and will resolve them.
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
						}
					},
					// Loads a Sass/SCSS file and compiles it to CSS.
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			}
		]
	}
};
