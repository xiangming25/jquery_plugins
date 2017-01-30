# 时间格式化插件使用说明



## 使用例子说明
```
var date1 = $.dateFormat(new Date(),'yyyy-MM-dd HH:mm:ss');
$('#date1').html(date1);
// 2017-01-30 19:25:26

var date1_1 = $.dateFormat(new Date(),'MM/dd/yyyy HH:mm:ss');
$('#date1_1').html(date1_1);
// 01/30/2017 19:25:26

var date2 = $.dateFormat(new Date(),'yyyy-MM-dd hh:mm:ss');
$('#date2').html(date2);
// 2017-01-30 07:25:26

var date3 = $.dateFormat(new Date(),'yyyy-MM-dd');
$('#date3').html(date3);
// 2017-01-30

var date3_1 = $.dateFormat(new Date(),'MM/dd/yyyy');
$('#date3_1').html(date3_1);
// 01/30/2017

var date4 = $.dateFormat(new Date(),'yyyy');
$('#date4').html(date4);
// 2017

var date5 = $.dateFormat(new Date(),'MM');
$('#date5').html(date5);
// 01

var date6 = $.dateFormat(new Date(),'dd');
$('#date6').html(date6);
// 30

var date7 = $.dateFormat(new Date(),'HH');
$('#date7').html(date7);
// 19

var date8 = $.dateFormat(new Date(),'mm');
$('#date8').html(date8);
// 25

var date9 = $.dateFormat(new Date(),'ss');
$('#date9').html(date9);
// 26

```

## 具体效果请直接运行index.html
