# jquery 多余部分省略号显示

## 使用前提   
省略号需要兼容到IE8这样的低版本浏览器。

## 使用方法
```
var str = '1231哈哈哈哈侃侃我是卖报的小行家';
var newStr = $.ellipsis(str);			// 1231哈哈哈哈侃侃我是...
console.log("newStr:   ",newStr);

newStr = $.ellipsis(str,15); 			// 1231哈哈哈哈侃侃我是卖报的小行...
console.log("newStr:   ",newStr);

```

### 注意，汉字占两个字节，英文字母占一个字节，所以处理方法先让限制的长度整体*2， 然后给每个字符都进行正则匹配，如果匹配的是汉字，-2， 匹配是英文，-1
```
ellipsis:function(str,num){
			num = num || 10;
			num *= 2;

			var newStr = '';

			var regExp = /[\u4e00-\u9fa5]/;
			for(var i = 0;i<str.length;i++){
				if(regExp.test(str[i])){
					num -= 2;
				}else{
					num -= 1;
				}
				if(num >= 0){
					newStr += str[i];
				}else{
					newStr += '...';
					return newStr;
				}
			}
			return newStr;
```
