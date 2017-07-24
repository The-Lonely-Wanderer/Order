define("path/indexSelect", ['path/selectAdd'], function(require, exports, module) {
	var selectAdd = require("path/selectAdd");

	$(".addressSelect input").on("click", function(e) {
		e.stopPropagation();
	})
	$(document).on("click", function() {
		//$(".searchResult").hide();
		$(".selectList").hide();
	});

	function indexSelect() {
		$(".dropDown_iconBox").on("click", function(e) {
			var $list = $(this).next(".selectList");
			if($list.is(":hidden")) {
				$list.show().parent().siblings().find(".selectList").hide();
				if($(this).attr("select") == "addrsSelect") {
					selectAdd.getUserAddrs(cur_city);
				}
			} else {
				$list.hide();
			}
			e.stopPropagation();
			$(document).on("click", ".selectList .link", function() {
				var $text = $(this).text(),
					$input = $(this).parents(".selectBox").find("input")
				$input.val($text);
				$(this).addClass('selectCityName').parents("li").siblings("li").find('.link').removeClass('selectCityName');
			})
		});
	};
	indexSelect()
})