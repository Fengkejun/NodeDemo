 ## 安装
 ``` 
 npm install my-tools

 ```

## 导入
```js
const tools = require('my-tools');

```


## 格式化时间
```js
const dateFormat = ts.dateFormat(new Date())
console.log(dateFormat)
```


## 转义 HTML 中的特殊字符
```js
const htmlStr =  '<h1 title="abc">这是H1标签<span>123&nbsp;</span></h1>'
const result = ts.htmlEscape(htmlStr)
// 结果:&lt;h1 title="abc"&gt;这是H1标签&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
console.log(result)
```

## 反转 HTML 中的特殊字符
```js

const htmlStr2 = ts.htmlUnEscape(result)
// 结果:<h1 title="abc">这是H1标签<span>123&amp;nbsp;</span></h1>
console.log(htmlStr2)

```

## 开源协议
ISC