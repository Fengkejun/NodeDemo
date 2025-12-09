const fs = require('fs');
const path = require('path');
// __dirname: 当前文件所在目录的绝对路径
// __filename: 当前文件的绝对路径
// path.resolve(): 将路径或路径片段的序列解析为绝对路径
// path.basename(): 返回路径的最后一部分
// path.extname(): 返回路径的扩展名
const pathStr = path.resolve(__dirname,'../txtFiles', '11.txt')
fs.readFile(pathStr, 'utf8', function(err, dataStr){
    if(err){
        return console.log('读取文件失败！'+err.message);
    }
    console.log('读取文件成功！'+dataStr);
    console.log(path.basename(pathStr,'.txt'));
    console.log(path.extname(pathStr));
})
