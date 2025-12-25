const express = require('express')
const app = express()

//应用级别的中间件
app.use(function(req,res,next){
  console.log('应用级别中间件app.use()')
  next()
})
app.get('/',function(req,res,next){
  console.log('get /')
  res.end('hello world')
})

//路由级别的中间件
// router.get('/list',function(req,res,next){
//   console.log('路由级别中间件router.use()')
//   next()
// })
//

//express内置的中间件
// express.static() //快速托管静态资源
// express.json() //解析json格式数据
// express.urlencoded() //解析表单数据
// app.use(express.static('./files'))
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
//
app.get('/user',(req,res)=>{
    throw new Error('服务器内部发生了错误')
    res.send('home page')
})

//错误级别中间件必须包含四个参数 err,req,res,next 
//定义错误级别的中间件捕获整个项目的异常错误，从而防止程序崩溃
//必须把错误级别的中间件放在路由的后面
app.use((err,req,res,next)=>{
    console.log('err错误级别中间件')
    res.end('Error'+err.message)
})

app.listen(80,()=>{
  console.log('express server running at http://127.0.0.1')
})
