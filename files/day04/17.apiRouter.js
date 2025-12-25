const express = require('express')
const apiRouter = express.Router()
//定义接口
//1.编写GET请求接口
apiRouter.get('/get',(req, res)=>{
    //通过req.query获取客户端通过查询字符串发送到服务器的数据
    const query = req.query
    //通过res.send()方法,向客户端响应处理的结果
    res.send({
        status:0,
        message:'GET请求成功',
        data:query //需要响应给客户端的数据
    }) 
})

//2.编写POST请求接口
apiRouter.post('/post',(req, res)=>{
    //通过req.body获取客户端通过请求体发送到服务端的数据
    const body = req.body
    //通过res.send()方法,向客户端响应处理结果
    res.send({
        status:0,
        message:'POST请求成功',
        data:body
    })
})
//3.编写DELETE请求接口
apiRouter.delete('/delete',(req, res)=>{
    //通过res.send()方法,向客户端响应处理结果
    res.send({
        status:0,
        message:'DELETE请求成功',
    })
})

module.exports = apiRouter