const express = require('express')
app  = express()
// 托管静态页面
app.use(express.static('./pages'))
app.use(express.urlencoded({extended:false}))
// 1.导入session中间件
const session = require('express-session')
// 2.配置Session中间件
app.use(session({
    secret:'itheima NodeJS', //配置加密字符串，它会在每次生成session id时使用
    resave:false, //是否在每次请求时都重新保存session
    saveUninitialized:true //是否在存储内容之前创建session
}))                       

//向express-session存数据

app.post('/api/login',(req,res)=>{
    //判断用户提交的登录信息是否正确
    if(req.body.username !=='admin' || req.body.password !=='000000'){
        return res.send({status:1,message:'登录失败'})
    }
    // 只有登录成功后，才往session对象中存储数据
    req.session.userinfo = req.body //存用户信息
    req.session.islogin = true  //登录状态
    res.send({status:0,message:'登录成功'})
})
app.get('/api/username',(req,res)=>{
    // 判断用户的登录状态
    if(!req.session.islogin){
        return res.send({
            status:1,
            message:'fail',
        })
    }
    res.send({
        status:0,
        message:'success',
        username:req.session.userinfo.username
    })
})
//退出登录的接口
app.post('/api/logout',(req,res)=>{
    req.session.destroy() //销毁session对象
    res.send({
         status:0,
        message:'退出登录成功'
    })
} )
app.listen(80,()=>{
     console.log('http://127.0.0.1')
})
