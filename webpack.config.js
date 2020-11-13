const path = require('path');
const ExtractCssChunksPlugin = require('extract-css-chunks-webpack-plugin');

// https://webpack.js.org/guides/entry-advanced/#multiple-file-types-per-entry
module.exports = {
	entry: {
		project: ['./src/scripts.js', './src/styles.scss'],
	},
	output: {
		path: path.resolve(__dirname, 'assets'),
		filename: 'scripts.js',
	},
	module: {
		rules: [{
				test: /\.(s*)css$/,
				use: [
					// https://www.freecodecamp.org/forum/t/separate-css-files-from-scss-webpack-build/338000
					{
						loader: ExtractCssChunksPlugin.loader,
						options: {
							hot: true,
							reloadAll: true
						}
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
	},
	plugins: [
		new ExtractCssChunksPlugin({
			filename: 'styles.css',
		})
	]
};
