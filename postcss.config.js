module.exports = {
	plugins: [
		require('autoprefixer'),
		require('cssnano')({ 
			preset: 'default', 
		}),
		// require('oldie')({ /* options */ })
		// require('postcss-preset-env'),
		// require('postcss-flexbugs-fixes'),
		// 
	]
}
