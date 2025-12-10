const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    const url = req.url;
    let Content = '<h1>404 Not Found</h1>'
    if(url === '/'|| url === '/index.html'){
        Content = '<h1>首页</h1>'
    }else if(url === '/about.html'){
        Content = '<h1>关于</h1>'
    }
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(Content);
})
server.listen(80,()=>{
    console.log('server running at http://127.0.0.1');
})