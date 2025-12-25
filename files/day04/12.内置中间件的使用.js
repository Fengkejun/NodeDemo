const express = require('express')
const app = express()
app.use(express.json(),express.urlencoded({ extended: false}))
app.post('/user',(req,res)=>{
    console.log(req.body)//如果不配置表单解析数据的中间件则req.boy返回undefined
    res.send('post请求成功')
})
app.post('/book',(req,res)=>{
    console.log(req.body)
    res.send('book请求成功')
})

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})