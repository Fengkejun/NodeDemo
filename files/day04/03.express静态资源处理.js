const express = require('express');
const app = express();
//在这里调用express.static()方法，快速的对外提供静态资源
app.use(express.static('../../clock'))
//托管多个静态资源目录使用app.use(express.static('多个静态资源目录名称'))方法 
// app.use(express.static("../../clock"))
// app.use(express.static("../day03/my-tools/index.js"))
// 挂载路径前缀
// app.use("/fils",express.static('../../clock'))
app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1')
})
// 使用nodemon 可以监听文件变化，自动重启服务