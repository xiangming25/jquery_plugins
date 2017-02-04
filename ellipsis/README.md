# jquery 多余部分省略号显示

```
var str = '1231哈哈哈哈侃侃我是卖报的小行家';
var newStr = $.ellipsis(str);			// 1231哈哈哈哈侃侃我是...
console.log("newStr:   ",newStr);

newStr = $.ellipsis(str,15); 			// 1231哈哈哈哈侃侃我是卖报的小行...
console.log("newStr:   ",newStr);

```