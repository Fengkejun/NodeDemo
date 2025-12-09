const fs = require('fs')
// 读取文件内容
fs.readFile('../txtFiles/11.txt', 'utf8', function
    (err, dataStr) {
    if (err) {
        return console.log("读取文件失败!" + err.message)
    } else {
        console.log("读取文件成功!" , dataStr)
    }
    })

// // 写入文件
// fs.writeFile('demo.txt', 'hello world', function(err) {
//     if(err){
//         return console.log("写入文件失败!" + err.message)
//     }
//     console.log("写入文件成功!")
// })