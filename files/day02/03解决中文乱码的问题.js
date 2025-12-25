//导入http模块 require('模块名')
const http = require('http');
// 创建服务器实例
const server = http.createServer();
// 监听请求事件
server.on('request', (req, res) => {
   const str = '您请求的地址：' + req.url + '，请求方式：' + req.method;
   //调用res.setHeader() 方法，设置Content-Type响应头,解决中文乱码问题
   res.setHeader('Content-Type','text/html; charset=utf-8')
   console.log(str);
   res.end(str);
})
server.listen(8080, () => {
    console.log('http server running at http://127.0.0.1:8080');
})

