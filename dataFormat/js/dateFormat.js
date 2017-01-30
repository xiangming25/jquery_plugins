/**
 * jquery时间格式化
 * author xiangming
 * 2017-01-30
 * github url https://github.com/xiangming25/jquery_plugins/tree/master/pagenation
 * blog url http://www.cnblogs.com/xiangming25/
 */
;(function($,window,document){
    'use strict';
    $.extend({
        dateFormat : function(dateParam,opt){
            var format = 'yyyy-MM-dd HH:mm:ss';
            format = opt || format;
            var newDate = new Date(dateParam);
            var year = newDate.getYear().toString().substring(1),
                yearFull = newDate.getFullYear(),
                month = (newDate.getMonth() + 1) >= 10 ? (newDate.getMonth() + 1) : '0'+(newDate.getMonth() + 1),
                day = newDate.getDate() >= 10 ? newDate.getDate() : '0'+newDate.getDate(),
                hour = newDate.getHours() >= 10 ? newDate.getHours() : '0'+newDate.getHours(),
                // 12小时制
                hour12 = (parseInt(newDate.getHours())-12) >= 0 ? (parseInt(newDate.getHours()) - 12) : newDate.getHours(),
                hour12 = hour12 >= 10 ? hour12 : '0'+hour12,
                minute = newDate.getMinutes() >= 10 ? newDate.getMinutes() : '0'+newDate.getMinutes(),
                second = newDate.getSeconds() >= 10 ? newDate.getSeconds() : '0'+newDate.getSeconds();

            format = (/yy/ig.test(format) && !/yyyy/ig.test(format)) ? format.replace(/yy/ig,year) : format.replace(/yyyy/ig,yearFull);
            format = format.replace(/MM/g,month);
            format = format.replace(/dd/ig,day);
            format = format.replace(/HH/g,hour);
            format = format.replace(/hh/g,hour12);
            format = format.replace(/mm/g,minute);
            format = format.replace(/ss/ig,second);

            return format;
        }
    })
})(jQuery,window,document);
