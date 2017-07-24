define("path/mapSearch", ['path/layerCall'], function(require, exports, module) {
	var layerCall = require("path/layerCall");

	$("#ban-searchBtn").on("click", function() {
		if($.trim($(".searchAddress").val()) == "" || $.trim($(".searchAddress").val()) == $(".searchAddress").attr("placeholder")) {
			shake($(".searchAddress"), "shake", 3);
			return;
		}
		//2014-12-08注释  将考虑判断输入地址是否有变化改为不考虑
		//		if(user.lng>0 && user.lat>0){//有地址
		//			 var oldAddr = user.address;
		//			 var newAddr = $(".searchAddress").val();
		//			 if(/*user.isLogin==0 &&*/ oldAddr!=newAddr){
		//				 layerCall.locationLayer();
		//			 }
		//			 else{
		//				 window.location.href = "/dianwoba/grid/sl.jsp";
		//			 }
		//    	}
		//		else{
		//			 layerCall.locationLayer();
		//		}
		if(user.addressId > 0) { //有地址
			var oldAddr = user.address;
			var newAddr = $(".searchAddress").val();
			if(oldAddr != newAddr) {
				layerCall.locationLayer();
			} else {
				window.location.href = "/dianwoba/grid/sl.jsp";
			}
		} else {
			layerCall.locationLayer();
		}

		function shake(ele, cls, times) {
			var i = 0,
				t = false,
				o = ele.attr("class") + " ",
				c = "",
				times = times || 2;
			if(t) return;
			t = setInterval(function() {
				i++;
				c = i % 2 ? o + cls : o;
				ele.attr("class", c);
				if(i == 2 * times) {
					clearInterval(t);
					ele.removeClass(cls);
				}
			}, 200);
		}

	})

	$('.searchAddress').keydown(function(e) {
		if(e.keyCode == 13) {
			$("#ban-searchBtn").trigger("click");
		}
	});
})