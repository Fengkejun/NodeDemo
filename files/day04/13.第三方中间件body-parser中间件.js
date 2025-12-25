const express = require('express')
const app = express()
// 导入解析表单数据的中间件
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.post('/user',(req,res)=>{
    console.log(req.body)
    res.send('OK')
})

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})