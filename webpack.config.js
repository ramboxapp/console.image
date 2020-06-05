const { resolve, join } = require('path')

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		path: join(__dirname, 'dist'),
		filename: 'console.image.min.js'
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	},
	resolve: {
		extensions: ['.js']
	}
}
