const webpack = require('webpack');
module.exports = {
    publicPath: process.env.NODE_ENV === 'development' ? '/' : `${process.env.VUE_APP_ASSETS_PUBLIC_PATH}`,           // 这里用的是相对路径
    // publicPath:'./',
    outputDir: "dist",     // 打包目录
    devServer: {
        open: false,            //浏览器自动打开页面
        host: "0.0.0.0",        //如果是真机测试，就使用这个IP
        port: 8080,             // 端口号
        https: false,           // 是否是https请求
        hotOnly: false,         //热更新（webpack已实现了，这里false即可）
        proxy: {                // 跨域请求转发
            '/api': {
                target: "https://vps.beta.ule.com",
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        }
    },
    // 以下是pwa配置  配置网站图标的
    pwa: {
        iconPaths: {
            favicon32: 'favicon.ico',
            favicon16: 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico'
        }
    },
    productionSourceMap: false, // 打包后是否有.map文件 (影响打包后文件的大小)
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",

                jQuery: "jquery",
                "windows.jQuery": "jquery"
            })
        ]
    },
    pages: {
        page1: {
            // page 的入口
            entry: 'src/pages/404/main.js',
            // 模板来源
            template: 'src/pages/404/index.html',
            // 在 dist/index.html 的输出
            filename: '404.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: '404',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            // chunks: ['chunk-vendors', 'chunk-common', 'page1']
        },
        page2:{
            // page 的入口
            entry: 'src/pages/page2/main.js',
            // 模板来源
            template: 'src/pages/page2/index.html',
            // 在 dist/index.html 的输出
            filename: 'page2.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'page2-title',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            // chunks: ['chunk-vendors', 'chunk-common', 'page2']
        },
        wyf:{
            entry: 'src/pages/wyf/main.js',
            template: 'src/pages/wyf/index.html',
            filename: 'wyf.html',
            title: '微邮付功能激活',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            // chunks: ['chunk-vendors', 'chunk-common', 'wyf']
        },
        index: 'src/pages/404/main.js'
    },
}

