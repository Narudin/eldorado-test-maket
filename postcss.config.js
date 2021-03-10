module.exports = {
	plugins: [
		require('autoprefixer')({flexbox:"no-2009"}),
		require('cssnano')({ 
			preset: 'default', 
		}),
		require('oldie')({ /* options */ })
		// require('postcss-preset-env'),
		// require('postcss-flexbugs-fixes'),
		// 
	]
}
