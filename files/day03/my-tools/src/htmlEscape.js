//定义转义HTML 字符串的函数
function htmlEscape(htmlStr) { 
    return htmlStr.replace(/<|>|"|&/g,(match)=>{
      switch (match){
        case '<':
          return '&lt;'
        case '>':
          return '&gt;'
        case '"':
          return '&quot;'
        case '&':
          return '&amp;'
      }
    }
    )
}
//定义还原Html字符串的函数
function htmlUnEscape(htmlStr) { 
    return htmlStr.replace(/&lt;|&gt;|&quot;/g,(match)=>{
      switch (match){
      case '&lt;':
          return '<'
        case '&gt;':
          return '>'
        case '&quot;':
          return '"'
          case '&amp;':
            return '&'
    }})
}
module.exports = {
    htmlEscape,
    htmlUnEscape
}