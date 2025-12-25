const express = require('express')
const app = express()
// const qs =require('querystring')
// //定义中间件
// app.use((req,res,next)=>{
//     //1.定义一个字符串专门用来存储客户端发送过来的请求体数据
//     let str = ''
//     //2.监听req的data事件
//     req.on('data',chunk=>{
//         str += chunk
//     })

//     //3.监听req的end事件
//     req.on('end',()=>{
//             // console.log(str)
//         //把字符串转换成对象
//         //4.使用querystring模块解析请求体数据
//             // console.log(qs.parse(str))
//         req.body = qs.parse(str)
//         next()
//     })
    
// })




//将自定义的中间件封装为模块 15.custom-body-parser.js
//1.导入自己封装的中间件模块
const customBodyParser = require('./15.custom-body-parser.js')
//2.将自定义中间件注册为全局可用的中间件
app.use(customBodyParser)

app.post('/user',(req,res)=>{
    console.log(req.body)
    res.send(req.body)
})

app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1')
})