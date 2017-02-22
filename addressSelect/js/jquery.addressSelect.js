/**
 * jquery地址选择器插件
 * author xiangming
 * 2017-02-22
 * github url https://github.com/xiangming25/jquery_plugins/tree/develop/addressSelect
 * blog url http://www.cnblogs.com/xiangming25/
 */
;
(function($) {
	'use strict';

	$.fn.addressSelect = function(opt) {
		var $this = $(this),
			$province = $this.find('#province'),
			$city = $this.find('#city'),
			$district = $this.find('#district'),
			defaultProvinceStr = '<option value="">--请选择省--</option>',
			provinceStr = defaultProvinceStr,
			defaultCityStr = '<option value="">--请选择市--</option>',
			cityStr = defaultCityStr,
			defaultDistrictStr = '<option value="">--请选择区--</option>',
			districtStr = defaultDistrictStr,
			addressJson = null;

		init();

		function init(){
			$province.html(defaultProvinceStr);
			$city.html(defaultCityStr);
			$district.html(defaultDistrictStr);

			getAddressJson();

			// 省份选择发生改变后重新渲染市
			$province.on('change',renderCity);

			// 当选择的区发生改变后重新渲染区
			$city.on('change',renderDistrict);
		}

		/**
		 * 获取地址json数据
		 * @return {[type]} [description]
		 */
		function getAddressJson() {
			$.getJSON('address.json', function(data) {
				addressJson = data;
				renderProvince();
			});
		}

		/**
		 * 渲染省份
		 * @return {[type]} [description]
		 */
		function renderProvince(){
			addressJson.forEach(function(addressItem,index){
				provinceStr += '<option value="'+addressItem.id+'">'+addressItem.name+'</option>';
			});
			$province.html(provinceStr);
		}


		/**
		 * 重新渲染市
		 * @return {[type]} [description]
		 */
		function renderCity(){
			var provinceId = $province.val(),
				cityStr = defaultCityStr,
				districtStr = defaultDistrictStr,
				cityArr = [];
			addressJson.forEach(function(addressItem,index){
				if(addressItem.id === provinceId){
					cityArr = addressItem.sub;
					return;
				}
			});
			cityArr.forEach(function(cityItem,index){
				cityStr += '<option value="'+cityItem.id+'">'+cityItem.name+'</option>';
			});
			$city.html(cityStr);
			$district.html(districtStr);
		}

		/**
		 * 重新渲染区
		 * @return {[type]} [description]
		 */
		function renderDistrict(){
			var provinceId = $province.val(),
				cityId = $city.val(),
				districtStr = defaultDistrictStr,
				cityArr = [],
				districtArr = [];

			addressJson.forEach(function(addressItem,index){
				if(addressItem.id === provinceId){
					cityArr = addressItem.sub;
					return;
				}
			});

			cityArr.forEach(function(cityItem){
				if(cityItem.id === cityId){
					districtArr = cityItem.sub;
					return;
				}
			});

			districtArr.forEach(function(districtItem){
				districtStr += '<option value="'+districtItem.id+'">'+districtItem.name+'</option>';
			});

			$district.html(districtStr);
		}
		return this;

	}
})(jQuery);