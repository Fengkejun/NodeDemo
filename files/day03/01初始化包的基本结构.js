const  ts = require('./my-tools')
const dateFormat = ts.dateFormat(new Date())
console.log(dateFormat)
const htmlStr =  '<h1 title="abc">这是H1标签<span>123&nbsp;</span></h1>'
const result = ts.htmlEscape(htmlStr)
const htmlStr2 = ts.htmlUnEscape(result)
console.log(result)
console.log(htmlStr2)