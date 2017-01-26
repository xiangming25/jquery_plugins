;(function($,window,document){

	$.fn.myPagination = function(opt){
		var _self = this,
			_href = window.location.href,
			_link = _href.indexOf('?') > -1 ? _href.substring(0,_href.indexOf('?')) : _href,
			$self = $(_self),
			currentPage = 1,
			currentParams = window.location.search;

		currentParams = currentParams.split('&');

		// 设置当前页面
		for(var i = 0;i<currentParams.length;i++){
			var params = currentParams[i].split('=');
			if(params[0].indexOf('page') > -1){
				currentPage = params[1];
			}
		}

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
		_self.options = $.extend({},defaults,opt,{page:currentPage});

		// 跳转的链接的参数
		var newLinkParams = {
			page : _self.options.page,
			count : _self.options.count
		};

		var newLinkParams = $.extend({},newLinkParams,_self.options.linkParams);

		var url = linkParams(newLinkParams);

		var pageStr = '<div class="pagination"><ul>';
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
		}else{
			// 1,2,3,4,5,6,...,10
			if(_self.options.page < 5){
				for(var i = 1;i<=6;i++){
					var paramStr = $.extend({},newLinkParams);
					paramStr.page = i;
					paramStr = linkParams(paramStr);
					if(i == _self.options.page){
						pageStr += '<li><a class="active" href="'+_link+paramStr+'">'+i+'</a></li>';
					}else{
						pageStr += '<li><a href="'+_link+paramStr+'">'+i+'</a></li>';
					}
				}
				pageStr += '<li><a href="javascript:void(0);">...</a></li>';
				var paramStr = $.extend({},newLinkParams);
					paramStr.page = _self.options.total;
					paramStr = linkParams(paramStr);
				pageStr += '<li><a href="'+_link+paramStr+'">'+_self.options.total+'</a></li>';
			}else if(_self.options.page >= 5 && _self.options.page < _self.options.total - 3){
				// 1,...,4,5,6,7,8,...,10
				var paramStr = $.extend({},newLinkParams);
					paramStr.page = 1;
					paramStr = linkParams(paramStr);
				pageStr += '<li><a href="'+_link+paramStr+'">1</a></li>';
				pageStr += '<li><a href="javascript:void(0);">...</a></li>';
				for(var i = (parseInt(_self.options.page) -2) ; i<= (parseInt(_self.options.page)+2);i++){
					paramStr = $.extend({},newLinkParams);
					paramStr.page = i;
					paramStr = linkParams(paramStr);
					if(i == _self.options.page){
						pageStr += '<li><a class="active" href="'+_link+paramStr+'">'+i+'</a></li>';
					}else{
						pageStr += '<li><a href="'+_link+paramStr+'">'+i+'</a></li>';
					}
				}
				pageStr += '<li><a href="javascript:void(0);">...</a></li>';
				paramStr = $.extend({},newLinkParams)
				paramStr.page = _self.options.total;
				paramStr = linkParams(paramStr);
				pageStr += '<li><a href="'+_link+paramStr+'">'+_self.options.total+'</a></li>';
			}else{
				// 1,...,6,7,8,9,10
				var paramStr = $.extend({},newLinkParams);
					paramStr.page = 1;
					paramStr = linkParams(paramStr);
				pageStr += '<li><a href="'+_link+paramStr+'">1</a></li>';
				pageStr += '<li><a href="javascript:void(0);">...</a></li>';
				for(var i = parseInt(_self.options.total)-5;i<=_self.options.total;i++){
					paramStr = $.extend({},newLinkParams);
					paramStr.page = i;
					paramStr = linkParams(paramStr);
					if(i == _self.options.page){
						pageStr += '<li><a class="active" href="'+_link+paramStr+'">'+i+'</a></li>';
					}else{
						pageStr += '<li><a href="'+_link+paramStr+'">'+i+'</a></li>';
					}
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

		pageStr += '</ul></div>';

		/**
		 * 生成url链接函数
		 * @param  {[type]} params [description]
		 * @return {[type]}        [description]
		 */
		function linkParams(params){
			var newLinkParams = '?';
			$.each(params,function(key,value){
				newLinkParams += key+'='+value+'&';
			});
			return newLinkParams.substring(0,newLinkParams.length - 1);
		}

		$self.html(pageStr);
		return this;

	}

})(jQuery,window,document);
