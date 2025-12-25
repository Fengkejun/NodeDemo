//express 的中间件本质上就是一个function函数
//next函数是多个中间件连续调用的关键，调用next()，会继续执行下一个中间件函数
//当函数执行完毕，没有调用next()，则不会执行下一个中间件函数
const express = require('express');
const app = express();
// 创建最简单的中间件函数
// const mw = function(req,res,next){ 
//     console.log('这是最简单的中间件函数');
//     // 把流转关系传递给下一个中间件函数或者路由处理函数
//     next();
// }
// // 通过app.use注册全局生效的中间件
// app.use(mw);
app.use((req,res,next)=>{
    console.log('这是最简单的中间件函数');
    next();
})

app.get('/',(req,res)=>{
    console.log('调用了 / 这个路由');
    res.send('home page');
})
app.get('/user',(req,res)=>{
    console.log('调用了 /user 这个路由');
    res.send('user page');
})  
app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1')
})
