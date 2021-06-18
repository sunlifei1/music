module.exports = {
	publicPath: './',
  outputDir: "dist", // 输出文件目录
  lintOnSave: false, // eslint 是否在保存时检查
  assetsDir: 'static', // 配置js、css静态资源二级目录的位置  
	devServer: {
		open: true,              //自动开启首页
		host: 'localhost',
		port: '8080',
		https: false,
		hotOnly: false,
		proxy: {
			//配置跨域
			'/api': {
				target: 'http://localhost:5000/api/',
				ws: true,
				changeOrigin: true,
				pahtRewrite: {
					'^/api': ''
				}
			}
		}
	}


}
