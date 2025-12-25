//1.导入express
const express = require('express')
// 2.创建web服务器
const app = express()
// 3.启动web服务器
app.listen(80,function(){
  console.log('express server running at http://127.0.0.1')
})