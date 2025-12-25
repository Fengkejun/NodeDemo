const express = require('express')
const app = express()
// 下载并导入cors模块
const cors = require('cors')
//配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }))
const router = require('./17.apiRouter')
//为了防止冲突,必须在配置cors中间件之前配置JSONP的接口
app.get('/api/jsonp', (req, res) => { 
    // 1.获取客户端传递过来的回调函数的名称
    const funcName = req.query.callback
    // 2.得到通过JSONP形式发送给客户端的数据
    const data = { name: 'zs', age : 12 }
    // 3. 根据前两部得到的数据,拼接出一个函数调用的字符串
    const scriptStr = `${funcName}(${JSON.stringify(data)})`
    // 4. 把拼接好的字符串,使用response对象响应给客户端
    res.send(scriptStr)
})

// 使用CORS中间件解决跨域问题
app.use(cors())

app.use('/api',router)

app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1')
})