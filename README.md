## vue-cli3配置多页面开发模板

### 区分开发生产环境
```
新建  （.env文件中自己定义的变量必须要以VUE_APP_）
.env.beta  
    NODE_ENV='development'
    VUE_APP_CURRENTMODE='dev'
    VUE_APP_BASE_URL="https://vps.beta.ule.com"      
.env.build   
    NODE_ENV='production'
    VUE_APP_CURRENTMODE='build'
    VUE_APP_BASE_URL="https://vps.ule.com"
    VUE_APP_ASSETS_PUBLIC_PATH = "//i1.ulecdn.com/yzg/2019/pc/dist"
.env.beta
    NODE_ENV='production'
    VUE_APP_CURRENTMODE='beta'
    VUE_APP_BASE_URL="https://vps.beta.ule.com"
    VUE_APP_ASSETS_PUBLIC_PATH = "//i1.beta.ulecdn.com/yzg/2019/pc/dist"
```
### 自定义配置 
```
添加 vue.config.js
```

### 修改网站图标
```
pwa: {
        iconPaths: {
            favicon32: 'favicon.ico',
            favicon16: 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico'
        }
    },
```

### 配置跨域
```
devServer: {
    open: false,            //浏览器自动打开页面
    host: "0.0.0.0",        //如果是真机测试，就使用这个IP或者是 localhost
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
```

### axios二次封装（uitl/api）
