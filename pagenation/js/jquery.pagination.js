;(function($,window,document){

	$.fn.myPagination = function(opt){
		var _self = this,
			_href = window.location.href,
			_link = _href.indexOf('?') > -1 ? _href.substring(0,_href.indexOf('?')) : _href,
			$self = $(_self);

		// 默认配置
		var defaults = {
			page : 1,
			count : 10,
			total : 10,
			showPrevBtn : true,
			showNextBtn : true,
			linkTo : '',
			linkParams : {}
		};
		_self.options = $.extend({},defaults,opt);

		// 跳转的链接的参数
		var newLinkParams = {
			page : _self.options.page,
			count : _self.options.count
		};

		var newLinkParams = $.extend({},newLinkParams,_self.options.linkParams);

		var url = linkParams(newLinkParams);

		var pageStr = '<ul class="pagination">';
		// 上一页
		if(_self.options.showPrevBtn && _self.options.page > 1){
			var paramStr = $.extend({},newLinkParams);
			paramStr.page--;
			paramStr = linkParams(paramStr);
			pageStr += '<li><a href="'+_link+paramStr+'">上一页</a></li>';
		}

		// 总页数小于8页时
		// 1,2,3,4,5,6,7
		if(_self.options.total < 8){
			for(var i = 1;i<=_self.options.total;i++){
				var paramStr = $.extend({},newLinkParams);
				paramStr.page = i;
				paramStr = linkParams(paramStr);
				if(i == _self.options.page){
					pageStr += '<li><a class="active" href="'+_link+paramStr+'">'+i+'</a></li>';
				}else{
					pageStr += '<li><a href="'+_link+paramStr+'">'+i+'</a></li>';
				}
			}
		}


		// 下一页
		if(_self.options.showNextBtn && _self.options.page < _self.options.total){
			var paramStr = $.extend({},newLinkParams);
			paramStr.page++;
			paramStr = linkParams(paramStr);
			pageStr += '<li><a href="'+_link+paramStr+'">下一页</a></li>';
		}

		pageStr += '</ul>';

		console.log('pageStr:====',pageStr);

		/**
		 * 生成url链接函数
		 * @param  {[type]} params [description]
		 * @return {[type]}        [description]
		 */
		function linkParams(params){
			var newLinkParams = '';
			$.each(params,function(key,value){
				newLinkParams += '?'+key+'='+value+'&';
			});
			return newLinkParams.substring(0,newLinkParams.length - 1);
		}

		$self.html(pageStr);
		return this;

	}

})(jQuery,window,document);