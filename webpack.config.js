/**
 * Created by Hua Yan on 16-7-13.
 */
var webpack = require('webpack')

module.exports = {
    //插件项
    plugins: [],

    //页面入口文件配置
    entry: "./index.js",

    //入口文件输出配置
    output: {
        path:'./bin',
        filename: "index.js"
    },

    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.scss$/, loader: '!style!css!sass'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
            { test: /\.vue$/, loader: 'vue-loader'},
            { test: /\.js$/, exclude: /node_modules/,  loader: 'babel'},
        ]
    },

    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};

/*
 **
 ** plugins 是插件项，这里我们使用了一个 CommonsChunkPlugin的插件，它用于提取多个入口文件的公共脚本部分，然后生成一个 common.js 来方便多页面之间进行复用。

 ** entry 是页面入口文件配置，

 ** output 是对应输出项配置 （即入口文件最终要生成什么名字的文件、存放到哪里）

 ** module.loaders 是最关键的一块配置。它告知 webpack 每一种文件都需要使用什么加载器来处理。 所有加载器需要使用npm来加载

 ** 最后是 resolve 配置，配置查找模块的路径和扩展名和别名（方便书写）
 **
 */