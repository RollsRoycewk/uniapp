
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://wangkai.zone:3579',
        ws: true,
        changeOrigin: true,
		pathRewrite: {
		    '^/api': '', 
		},
      },
    }
  }
}