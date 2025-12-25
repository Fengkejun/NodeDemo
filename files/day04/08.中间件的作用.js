//express 的中间件本质上就是一个function函数
//next函数是多个中间件连续调用的关键，调用next()，会继续执行下一个中间件函数
//当函数执行完毕，没有调用next()，则不会执行下一个中间件函数
const express = require('express');
const app = express();

app.use((req,res,next)=>{
    //获取到请求到达服务器的时间
    const time = Date.now();
    //将时间存储到req对象上,从而把时间共享给所有的路由
    req.startTime = time;
    next();
})

app.get('/',(req,res)=>{
    res.send('home page'+ req.startTime);
})
app.get('/user',(req,res)=>{
    res.send('user page'+ req.startTime);
})  
app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1')
})
