const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
            // {
            //     test: /\.js$/,
            //     exclude: /(node_modules|bower_components)/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['es2015']
            //         }
            //     }
            // }
        ]
    },
    plugins: [
        new webpack.BannerPlugin("最终版权归isisxu所有"),
        new htmlWebpackPlugin({
            template: 'index.html'
        }),
        new VueLoaderPlugin(),
    ],
    resolve: {
        // alias：别名
        alias: {
            // 指定vue采用vue.esm.js版本
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
}