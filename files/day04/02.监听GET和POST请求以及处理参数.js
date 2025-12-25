/***
 * 参数1:客户端的请求URL地址
 * 参数2:回调函数,函数参数,request,response
 *                         request 请求对象(包含了客户端请求相关的属性和方法)
 *                         response 响应对象(包含了服务端响应相关的属性和方法)  
 * res.send() 方法用于向客户端发送响应数据
 * res.send() 方法可以接收任意类型的数据作为参数
 * req.query 获取客户端通过URL发送的查询参数
 * req.params 获取动态的URL参数
 * 注意:如果客户端请求的URL地址和服务器端的路由地址不匹配,则不会触发对应的回调函数
 */
const express = require('express')
const app = express()
app.get('/user', (req, res) => {
    res.send({name:'张三',age:18})
})
app.post('/user', (req, res) => {
    res.send('post请求成功')
})

app.get('/', (req, res) => {
    console.log(req.query)

    res.send('get请求成功')
})
app.get('/user/:id', (req, res) => {
    console.log(req.params)
    res.send(req.params)
})
app.listen(80, () => {
    console.log('http://127.0.0.1')
})