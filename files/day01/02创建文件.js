const fs =require('fs');
// 写入文件
fs.writeFile('../../txtFiles/demo.txt','hello world',function(err,){ 
    if(err){
       return console.log('文件写入失败',err);
    }
        console.log('文件写入成功');
    
})
// 读取文件
fs.readFile('../../txtFiles/demo.txt',function(err,data){ 
    if(err){
       return console.log('文件读取失败',err.message);
    }

    console.log('文件读取成功',data.toString());
    
})