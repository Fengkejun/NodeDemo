// 导入http模块
const http = require('http')
// 导入fs模块
const fs = require('fs')
// 导入path模块
const path = require('path')

// 创建web服务器实例
const server = http.createServer();
// 监听request请求事件
server.on('request',(req,res)=>{
    // 获取请求url
    const url = req.url

    // 处理根路径或目录路径
    let filePath='';
    if (url === '/' ) {
        filePath = path.join(__dirname, '../../clock/index.html');
    } else {
        filePath = path.join(__dirname, '../../clock', url);
    }
    fs.readFile(filePath,'utf-8',(err,dataStr)=>{
        if(err)return res.end('404 Not Found')
        res.end(dataStr)
    })
})
// 启动服务器
server.listen(80,()=>{console.log('server running at http://127.0.0.1') })
