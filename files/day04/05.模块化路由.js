// 将路由抽离为单独的模块
// 1.创建路由模块
const express = require('express')
const app = express()
//1.导入路由
const router = require('./06.Router')

//2.注册路由模块
//app.use 路由模块 ('/api) 路由统一的前缀
app.use('/api',router)

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})