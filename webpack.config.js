const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
	mode: "development",
	devtool: false,
	entry: path.resolve(__dirname, "src", "index.jsx"),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	resolve: {
		extensions: [".js", ".jsx"],
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, "public"),
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "public", "index.html"),
		}),
		new webpack.SourceMapDevToolPlugin({
			test: /\.s?[ac]ss(\?hash=[A-z0-9]*)?$/,
			columns: true,
		}),
		new webpack.EvalSourceMapDevToolPlugin({
			test: /\.([jt]sx?)$/,
		}),
	],
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
		],
	},
};
