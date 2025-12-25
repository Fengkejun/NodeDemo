const express = require('express')
const app = express()
const mw1 = ((req,res,next)=>{
    console.log('局部生效的中间件1');
    next()
})
const mw2 = ((req,res,next)=>{
    console.log('局部生效的中间件2');
    next()
})

app.get('/',mw1,(req,res)=>{ 
    res.send('home page')
})
app.get('/user',[mw1,mw2],(req,res)=>{ 
    res.send('user page')
})
app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1');
})
