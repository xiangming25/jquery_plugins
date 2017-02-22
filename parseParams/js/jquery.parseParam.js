/**
 * jquery url参数解析插件
 * author xiangming
 * github url https://github.com/xiangming25/jquery_plugins/tree/master/parseParams
 * blog url http://www.cnblogs.com/xiangming25/
 * date: 2017-02-22
 * @type {[type]}
 */
;(function($){
	'use strict';

	$.extend({
		/**
		 * 解析url参数插件k
		 * @param  {[type]} url [description]
		 * @return {[type]}     [description]
		 */
		parseParam : function(url){
			var defaultUrl = window.location.search.split('?')[1];
			url = url ? url.split('?')[1] : defaultUrl;

			var paramNameArr = url.split('&'),
				paramObj = {};

			paramNameArr.forEach(function(item,index){
				var itemArr = item.split('=');
				paramObj[itemArr[0]] = itemArr[1];
			});

			return paramObj;
		}
	})
})(jQuery);