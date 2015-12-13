var path = require('path')

module.exports = {
	entry: "./src/app/app.js",
	module: {
		loaders:[
      { test: /\.css$/, include: path.resolve(__dirname, 'src/app'), loader: 'style-loader!css-loader' },
      { test: /\.js[x]?$/, include: path.resolve(__dirname, 'src/app'), exclude: /node_modules/, loader: 'babel-loader' },
    ]
	},
	output:{
		filename: './build/app.js',
		sourceMapFilename: "[file].map?hash=[hash]"
	},
	devtool: 'source-map',
	resolve: {
    	extensions: ['', '.js']
  	}
}
