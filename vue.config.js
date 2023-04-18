const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    publicPath: './',
    devServer:
        {
            proxy: {
                '/api': {
                    target: 'https://service-o15lm07j-1300177834.cd.apigw.tencentcs.com/release/',
                    changeOrigin: true,
                    secure: false,
                    pathRewrite: {
                        '^/api': ''
                    }
                }
            }
        },
  chainWebpack: config => {
    config.module
        .rule('glb')
        .test(/\.(glb|gltf)$/)
        .use('file-loader')
        .loader('file-loader')
        .tap(options => {
          // 修改/添加一些配置选项
          return options;
        })
        .end();
  }
})