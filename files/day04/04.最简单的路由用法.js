// Express 路由
const express = require('express');
//创建Web服务器,命名为app
const app = express();
const testFn = require('./04.testFn');
// 挂载路由
app.get('/', (req, res) => {
  res.send(testFn.fhFn.fn());
});
app.post('/', (req, res) => {
    res.send('post request')
})
//启动Web服务器
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})