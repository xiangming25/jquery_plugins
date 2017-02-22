# jquery省, 市, 区级联地址选择插件

## 注意: 插件使用了jquery的ajax方法,所以,必须运行于服务器中.

## 使用方法
```
1. 一个div下面有三个select, 分别对应的id为: province, city, district
<div class="address-select" id="addressSelect">
	<select name="" id="province"></select>
	<select name="" id="city"></select>
	<select name="" id="district"></select>
</div>

2. script中调用插件

>> $('#addressSelect').addressSelect();
```
