/**
 * jquery 多余部分省略号显示
 * author xiangming
 * 2017-02-04
 */
// 只对数据的从新处理
;(function($,window,document){
	'use strict';

	$.extend({
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
		}
	});
})(jQuery,window,document);


// 要对节点的处理
;(function($,window,document){
	'use strict';

	$.fn.ellipsis = function(num){

		var _this = this,
			$this = $(_this),
			str = $this.html();

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
				$this.html(newStr);
				return;
			}
		}
		$this.html(newStr);
		return this;
	}

})(jQuery,window,document);