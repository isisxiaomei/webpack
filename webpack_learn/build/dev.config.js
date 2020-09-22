const baseConfig = require('./base.config.js')
const { merge } = require('webpack-merge')


module.exports = merge(baseConfig, {
    // 配置的本地服务器
    devServer: {
        // 监听的文件目录，默认是根文件夹
        contentBase: './dist',
        // 页面实时刷新
        inline: true,
    },
})