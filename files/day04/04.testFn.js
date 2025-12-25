const fhFn = {
    name:'zs',
    age:18,
    fn:function(){
        console.log(this.name)
    }
}
fhFn.fn()
//导出模块
module.exports = {
    fhFn
}