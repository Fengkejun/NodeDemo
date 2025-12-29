// 1.导入数据库模块
const mysql = require('mysql');
// 2.创建数据库连接关系
const db = mysql.createPool({
    host:'127.0.0.1', //数据库的ip地址
    user:'root', //数据库的登录账号
    password:'admin123', //登录数据库的密码
    database:'my_db_01' // 指定要操作哪个数据库
});
 
// ---------------检测mysql连接是否成功 --------------- --
// db.query('select 1',(err, result)=>{
//     if(err) return console.log(err.message);//错误信息
//     console.log(result);//成功信息
// }) 

// ---------------查询users 表中所有的数据--------------- --
// db.query('select * from users',(err,result)=>{
//     if(err) return console.log(err.message);//错误信息  
//     console.log(result);//成功信息
// })
// ---------------插入数据--------------- --
//1.定义要插入到users表中的数据对象
// const user = { username:'super_man',password :'123456'}
// //2.定义待执行的sql语句，其中 ? 表示占位符
// const sqlStr = 'insert into users (username,password) value (?,?)'
// db.query(sqlStr,[user.username,user.password],(err,result)=>{
//     if(err) return console.log(err.message);
//     console.log(result);
//     // 判断影响的行数，如果大于0，则表示插入数据成功
//     // 注意:如果执行的是insert into 语句，则result是一个对象
//     if(result.affectedRows === 1){
//         console.log('插入数据成功');
//     }
// })
// ---------------插入数据的便捷方式--------------- --
// // 1.定义待插入的数据对象
// const user = { username:'piDer',password :'123456'}
// // 2.定义待执行的sql语句，其中set ? 表示可以插入任意数据 
// const sqlStr = 'insert into users set ?'
// // 3.执行sql语句
// db.query(sqlStr,user,(err,result)=>{ 
//     if(err) return console.log(err.message);    
//     if(result.affectedRows === 1){
//         console.log('插入数据成功');
//     }
// })

// ---------------更新数据--------------- --
// const user = { id:12, username:'SpedMan',password :'0123456'}
// const sqlStr = 'update users set username= ?,password=? where id=?'
// // 执行sql语句
// db.query(sqlStr,[user.username,user.password,user.id],(err,result)=>{
//     if(err) return console.log(err.message);
//     if(result.affectedRows===1){
//         console.log('更新数据成功');
//     }
// })
// ---------------更新数据的便捷方式--------------- --
// const user = {id:12,username:'SpedMan',password :'00000000'} 
// const sqlStr = 'update users set ? where id=?'
// db.query(sqlStr,[user,user.id],(err,result)=>{ 
//     if(err) return console.log(err.message);    
//     if(result.affectedRows === 1){
//         console.log('更新数据成功');
//     }
// })

// ---------------删除数据--------------- --
// const sqlStr = 'delete from users where id=?'
// db.query(sqlStr,12,(err,result)=>{
//     if(err) return console.log(err.message);
//     // 注意: 执行delete语句，如果执行成功，则result是一个对象
//     if(result.affectedRows ===1 ){
//         console.log('删除数据成功')
//     }    
// })
// ---------------注意使用delete语句会真的把数据从表中删除掉,为了保险起见推荐使用标记删除--------------- --

// 标记删除
// const sqlStr = 'update users set status = ? where id=?'
// db.query(sqlStr,[1,14],(err,result)=>{
//     if(err) return console.log(err.message);
//     if(result.affectedRows ===1){
//         console.log('标记删除成功')
//     }
// }) 


