const express = require('express')
const app = express()
//第一个中间件函数
app.use((req,res,next)=>{ 
    console.log('调用了第1个中间件函数');
    next();
})
//第二个中间件函数
app.use((req,res,next)=>{
    console.log('调用了第2个中间件函数');
    next();
})
//定义一个路由
app.get('/user',(req,res)=>{
    res.send('home page')
})

app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1')
})