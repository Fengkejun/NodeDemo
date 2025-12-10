const fs =require('fs');
fs.readFile('../../txtFiles/成绩.txt', 'utf8', function(err, dataStr){
    if(err){
        return console.log('读取文件失败！'+err.message);
    }
    console.log('读取文件成功！'+dataStr);
    //1.把成绩的数据按照空格进行分割
    const arrOld = dataStr.split(' ')

    const arrNew = [];
    arrOld.forEach(item => {
        arrNew.push(item.replace('=',':'));
    });
    const newStr = arrNew.join('\r\n');
    console.log(newStr);
    // 2.把转换后的内容，写入到新文件中
    fs.writeFile('../../txtFiles/成绩-ok.txt', newStr, function(err){
        if(err){
            return console.log('写入文件失败！' + err.message);
        }
        console.log('写入文件成功！');
    })
   
}) 
fs.readFile('../../txtFiles/成绩-ok.txt', 'utf8',function(err,dataStr){
        if(err){
            return console.log('读取文件失败！' + err.message);
        }
        console.log('读取文件成功！' + dataStr); 
    })