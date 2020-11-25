const Timestamp = new Date().getTime()
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let plugins = [
  new MiniCssExtractPlugin({
    // 修改打包后css文件名
    filename: `css/[name].${process.env.NODE_ENV}.${Timestamp}.css`,
    chunkFilename: `css/[name].${process.env.NODE_ENV}.${Timestamp}.css`
  })
]

module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  publicPath: './',
  // 输出文件目录
  outputDir: 'dist',
  // webpack-dev-server 相关配置
  devServer: {
    port: 8090,
    proxy: {
      '/api': {
        target: 'http://192.168.1.169:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': 'api'
        }
      }
    }
  },
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // 要公用的scss的路径
          resources: ['./src/assets/css/utils.scss']
        })
        .end()
    })
  },
  configureWebpack: {
    // webpack 配置
    output: {
      // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
      filename: `js/[name].${process.env.NODE_ENV}.${Timestamp}.js`,
      chunkFilename: `js/[name].${process.env.NODE_ENV}.${Timestamp}.js`
    },
    plugins: plugins
  }
}
