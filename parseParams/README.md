＃　jquery url 参数解析

## 使用方法
```
// 如果parseParam不加参数, 返回的就是当前页面的url对应参数的解析
var paramObj = $.parseParam();


// 如果parseParam加参数, 返回的就是url对应参数的解析的对象
var paramObj = $.parseParam('http://www.baidu.com?date=2017-01-01&color=red');
==
{
	date:"2017-01-01",
	color:"red"
}

```