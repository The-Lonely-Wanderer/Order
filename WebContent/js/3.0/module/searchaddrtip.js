define("path/searchaddrtip", ['/js/3.0/vendor/base.max', 'path/selectAdd'], function(require, exports, module) {
	var basemax = require("/js/3.0/vendor/base.max");
	var base = basemax.base;
	var selectAdd = require("path/selectAdd");

	//搜索
	var searchInputs = $('.searchInput');

	if((Number(user.isLogin) && Number(user.isHasAddress)) == 1) { //登陆并且有地址，输入框获得焦点时清空登陆框并显示历史地址
		var oldval = searchInputs.val();
		searchInputs.on({
			focus: function(ev) {
				if(searchInputs.val() == oldval) {
					searchInputs.val("");
					$('.searchResult').show()
					selectAdd.getUserAddrs(cur_city);
				}
				//$(".dropDown_icon[select='addrsSelect']").trigger("click");
			},
			blur: function(ev) {
				if($.trim(searchInputs.val()) == "") {
					searchInputs.val(oldval);
				}
				//$('.searchResult').hide()
			}
		})

	}

	//地图
	var searchInputs2 = $('.searchInput2');
	if((Number(user.isLogin) && Number(user.isHasAddress)) == 1) {
		searchInputs2.on({
			keyup: function(ev) {
				if($.trim(searchInputs2.val()) == "") {
					$('.searchResult').show();
					selectAdd.getUserAddrs(cur_city);
				} else {
					$('.searchResult').hide();
				}
			}
		})
	}

	var bInput = true; //解决IE6,7,8下onpropertychange事件和keydown事件会一起促发
	//键盘输入搜索 input 事件	
	/*base.oninput(searchInputs,function( obj ,ev ){	
		if(bInput){
			alert(222)
			searchFoods({
				parent:$(obj).siblings('.searchResult'),
				keyWarp:$(obj),
				keyWord:$(obj).val()		
			});
		}
	});*/
	searchInputs.on("keyup", function() {
		if(bInput) {
			searchFoods({
				parent: $(this).siblings('.searchResult'),
				keyWarp: $(this),
				keyWord: $(this).val()
			});
		}
	})

	var keyiNow = -1;
	searchInputs.on({
		keydown: function(ev) {
			ev.stopPropagation();
			var keyCode = ev.keyCode;
			var oTxt = $(this);
			var type = oTxt.attr('stype');
			var oResult = oTxt.siblings('.searchResult');
			var aLists = oResult.find('li');

			//键盘操作
			switch(keyCode) {
				case 13:
					$('.searchResult').hide();
					bInput = false;
					break;

				case 38: //↑
					keyiNow--;
					if(keyiNow < 0) {
						keyiNow = aLists.length - 1;
					}
					aLists.removeClass('hover').eq(keyiNow).addClass('hover');
					var oA = aLists.eq(keyiNow).find('a')
					$(this).val(oA.html()).attr('to', oA.attr('href'));
					bInput = false;
					break;

				case 40: //↓
					bInput = false;
					keyiNow++;
					if(keyiNow == aLists.length) {
						keyiNow = 0;
					}
					var oA = aLists.eq(keyiNow).find('a')
					aLists.removeClass('hover').eq(keyiNow).addClass('hover');
					$(this).val(aLists.eq(keyiNow).find('a').html());
					$(this).val(oA.html()).attr('to', oA.attr('href'));
					break;
				default:
					bInput = true;
			}
		}
	});

	//处理搜索结果
	function searchFoods(json) {

		var d = {
			parent: null, //父级
			keyWarp: null, //input
			keyWord: '',
			success: function(data) {}
		};

		//覆盖
		base.copyObj(d, json);
		if(!($.trim(d.keyWord))) {
			$('.searchResult').hide();
			return;
		}
		var sType = d.keyWarp.attr('stype');
		var url = '/h5/common!gtAddrSuggestV2.do';
		switch(sType) {
			case '地址':
				url = '/h5/common!gtAddrSuggestV2.do';
				break;
		}
		//请求
		$.ajax({
			url: url,
			data: {
				keyWord: d.keyWord
				//cityId  : cur_city
			},
			dataType: 'json',
			success: function(data) {
				var type = d.keyWarp.attr('stype');
				if(data && data.message == "ok") {
					var aResult = data.results;
					//没有数据
					if(aResult.length < 1) {
						d.parent.hide();
						return;
					}
					var sLists = '';
					for(var i = 0, l = aResult.length > 5 ? 5 : aResult.length; i < l; i++) {
						var oResult = aResult[i];
						sLists += '<li><a href="javascript:void(0)">' + oResult.name + '</a></li>';
					}

					//填充
					d.parent.html(sLists).show();
					$('.searchResult li').on({
						mouseover: function(ev) {
							ev.stopPropagation();
							$(this).addClass('hover');
						},
						mouseout: function(ev) {
							ev.stopPropagation();
							$(this).removeClass('hover');
						},
						click: function(ev) {
							d.keyWarp.val($(this).find('a').html());
							$('.searchResult').hide();
						}
					});
				}

				d.success(data);
			}
		});
	};
})