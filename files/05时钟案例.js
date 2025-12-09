const fs =require('fs');
const path = require('path');

const regStyle = /<style>[\s\S]*<\/style>/  //定义样式的正则
const regScript =/<script>[\s\S]*<\/script>/ // 定义脚本的正则
// 读取文件
fs.readFile(path.join(__dirname,'../txtFiles','index.html'), 'utf8', function(err, dataStr){
    if(err){
        return console.log('读取文件失败！'+err.message);
    }
    // console.log('读取文件成功！'+dataStr);
    // 读取成功后提取css,js,html文件
    resolveCss(dataStr)
    resolveScript(dataStr)
    resolveHtml(dataStr)
})
// 定义提取css的方法
function resolveCss(htmlStr){
    // 使用正则提取需要的css样式
    const r1 = regStyle.exec(htmlStr); // exec()方法返回一个数组，数组中存放匹配到的结果
    // console.log(r1)
   const newCSS = r1[0].replace('<style>','').replace('</style>','')
//    console.log(newCSS)
// 将提取的css写入到clock目录中的index.html文件中
    fs.writeFile(path.join(__dirname,'../clock','index.css'),newCSS,function(err){
        if(err){
            return console.log('写入css失败！'+err.message);
        }
        console.log('写入css成功！');
    })
}
// 定义提取js的方法
function resolveScript(htmlStr){
    // 使用正则提取需要的js
    const r2 = regScript.exec(htmlStr);
    // console.log(r2)
   const newJS = r2[0].replace('<script>',' ').replace('</script>',' ')
//    console.log(newJS)
// 将提取的js写入到clock目录中的index.html文件中
fs.writeFile(path.join(__dirname,'../clock','index.js'),newJS,function(err){
    if(err){
        return console.log('写入js失败！'+err.message);
    }
    console.log('写入js成功！');
})
}
// 提取html的方法
function resolveHtml(htmlStr){
    //将字符串调用replace方法，将内嵌的css样式和js脚本，替换为外联的Link 和script标签
   const newHtml = htmlStr.replace(regStyle,'<link rel="stylesheet" href="./index.css">').replace(regScript,'<script src="./index.js"></script>')
//    console.log(newHtml)
// 将替换后的内容，写入到clock目录中的index.html文件中
fs.writeFile(path.join(__dirname,'../clock/index.html'),newHtml,function(err){ 
    if(err){
        return console.log('写入html失败！'+err.message);
    }
    console.log('写入html成功！');
})
}
// 打开index 文件
fs.open(path.join(__dirname,'../clock/index.html'),'r',function(err,fd){
    if(err){
        return console.log('打开html失败！'+err.message);
    }
    console.log('打开html成功！',fd);
})