// prettier-ignore
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const { resolve } = require('path');

const publicDir = path.resolve(__dirname, 'public');
const srcDir = path.resolve(__dirname, 'src');

module.exports = (env, argv) => {
	const { mode } = argv;

	return {
		entry: {
			app: path.resolve(__dirname, 'src', 'index.ts'),
		},

		// resolve 공부하기
		resolve: {
			extensions: ['*', '.ts', '.tsx', '.js', 'jsx'],
			alias: {
				'@': srcDir(),
			},
		},

		output: {
			path: resolve(__dirname, './dist'),
			publicPath: '/',
			filename: '[name].js',
		},

		plugins: [
			new HtmlWebpackPlugin({
				template: path.join(publicDir, 'index.html'), // template file name
				filename: 'index.html', // output file name
			}),
			new MiniCssExtractPlugin(),
			new CleanWebpackPlugin({
				cleanAfterEveryBuildPatterns: ['dist'],
			}),
		],

		module: {
			rules: [
				{
					test: /\.hbs$/,
					loader: 'handlebars-loader',
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader'],
				},
				{
					test: /\.(png|jpg|gif)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]',
							},
						},
					],
				},
				{
					test: /\.(ts)$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
			],
		},

		devServer: {
			static: {
				directory: publicDir,
			},

			compress: true,
			port: 9000,
			hot: true,
			historyApiFallback: true,
		},
	};
};
