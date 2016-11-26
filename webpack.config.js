var path = require('path');
var webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var node_modules_dir = path.join(ROOT_PATH, 'node_modules');

var config = {
	entry: path.resolve(__dirname, './app/app.jsx'),
	output: {
		path:'lib',
		publicPath:"http://127.0.0.1:8080/lib/",
		filename: 'bundle.js',
	},
	module: {
		loaders: [{
			test: /\.jsx$/,
			loader: 'babel',
			include: APP_PATH,
			query: {
				presets: ['es2015', 'react'] //添加两个presents 使用这两种presets处理js或者jsx文件
			}
		}]
	},
	devServer:{
		historyApiFallback:true,
		hot:true,
		inline:true,
		progress:true,
	},
	plugins:[
		new webpack.DefinePlugin({
			'process.env.NODE.ENV':"development"
		}),
		new webpack.HotModuleReplacementPlugin()
	]
};

module.exports = config;
