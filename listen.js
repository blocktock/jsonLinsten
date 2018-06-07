/**
 * 监听json对象属性变化,调用指定函数
 *
 * @author：gy
 * @time : 2018-6-7 18:05:11
 */
(function ($) {
    $.listenJsonObject = function (jsonData) {
        Object.defineProperty(jsonData, "key", {
            set: function (value) {
				var isFunction = false;
				try{
				  isFunction = typeof(eval(value)) === "function";
				  eval(value + "('"+jsonData+"');");
				}catch(e){
					var data = {"error": 500, "err_msg": "调用"+value+"()函数失败!"};
                    console.log(data);
				}
            }
        });
    };
})(jQuery);