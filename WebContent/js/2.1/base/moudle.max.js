// JavaScript Document
;
$(function() {
	var rw = window;
	var topTime = null;
	$('body').on({
		click: function(ev) {
			//ev.stopPropagation();
			//头部
			$CitySelect.hide();
			$Triangle.hide();
			bShow = false;
			//搜索框隐藏
			$('.searchResult').hide();
			$('.select').find('ul').hide();
		}
	});

	//头部的个人业务
	$('.top-userList li a').on({
		mouseenter: function(ev) {
			ev.stopPropagation();
			clearTimeout(topTime);
			$(this).addClass('active') //.siblings('li').removeClass('active');
		},
		mouseleave: function(ev) {
			ev.stopPropagation();
			$(this).removeClass('active');
			topTime = setTimeout(function() {
				$('.top-userList').hide().siblings('h3').removeClass('hover').find('.triangle').removeClass('triangleClose');
			}, 30);
		}
	});

	$('.top-userSelect h3').on({
		mouseenter: function(ev) {
			ev.stopPropagation();
			clearTimeout(topTime);
			$('.top-userList').show().siblings('h3').addClass('hover').find('.triangle').addClass('triangleClose');
		},
		mouseleave: function() {
			topTime = setTimeout(function() {
				$('.top-userList').hide().siblings('h3').removeClass('hover').find('.triangle').removeClass('triangleClose');
			}, 30)
		}
	});

	//选择城市
	var $Head = $('#header');
	var $CitySelect = $Head.find('.citySelectList');
	var $AcityList = $CitySelect.find('li');
	var $Triangle = $Head.find('.triangle');
	var bShow = false; //判断城市列表是否显示
	var bInput = true; //解决IE6,7,8下onpropertychange事件和keydown事件会一起促发

	$Head.find('.citySelect').on({
		click: function(ev) {
			ev.stopPropagation();
			if(bShow) {
				$CitySelect.hide();
				$Triangle.hide();
			} else {
				$CitySelect.show();
				$Triangle.show();
			}
			bShow = !bShow;
		}
	});

	//鼠标划过
	$AcityList.on({
		mouseover: function(ev) {
			ev.stopPropagation();
			$(this).siblings('li').find('a').removeClass('active');
			$(this).find('a').addClass('active');
		}
	});

	//搜索结果列表的事件
	$('.searchResult').on({
		mouseover: function(ev) {
			ev.stopPropagation();
			var target = ev.target;
			if(target.tagName.toLowerCase() === 'li') {
				$(target).addClass('hover');
			}
		},
		mouseout: function(ev) {
			var target = ev.target;
			if(target.tagName.toLowerCase() === 'li') {
				$(target).removeClass('hover');
			}
		},
		click: function(ev) {
			var target = ev.target;
			if(target.tagName.toLowerCase() === 'li') {
				$(target).parent().hide().siblings('.searchInput').val($(target).find('a').html())
			}
		}
	});

	//搜索
	var searchInputs = $('.searchInput');
	//输入框获得焦点和失去焦点事件
	base.FormTextCursor({
		obj: searchInputs, //触发的$对象  
		tip: function(obj) { return obj.attr('tip') }, //提示文字
		focusColor: '#000', //获取光标文本框中字体的颜色
		blurColor: '#999', //失去光标文本框中字体的颜色
		focusFn: function() {}, //获取光标的回调函数
		blurFn: function() {} //失去光标的回调函数)
	});

	//键盘输入搜索 input 事件	
	base.oninput(searchInputs, function(obj, ev) {
		if(bInput) {
			searchFoods({
				parent: $(obj).siblings('.searchResult'),
				keyWarp: $(obj),
				keyWord: $(obj).val()
			});
		}
	});

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
					handelSearch(oTxt);
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

	//点击按钮搜索
	$('.searchButton,.searchBtn').on({ //searchBtn
		click: function(ev) {
			ev.stopPropagation();
			var oTxt = $(this).siblings('.searchInput');
			handelSearch(oTxt);
		}
	});

	//搜索跳转
	function handelSearch(oTxt) {
		var type = oTxt.attr('stype');
		var oResult = oTxt.siblings('.searchResult');
		var aLists = oResult.find('li');
		if(!aLists.find('.hover').length) { //没有选中
			if(type == '餐厅') {
				rw.location.href = "/search!gtSearchResult.do?keyWord=" + encodeURIComponent(oTxt.val());
			} else if(type == '超市') {
				rw.location.href = "/supplier/market!search.do?keyword=" + encodeURIComponent(oTxt.val());
			} else {
				rw.location.href = "/search/map.do?keyWord=" + escape(oTxt.val());
			}
		} else {
			rw.location.href = oTxt.attr('href');
		}
	}

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
		var url = '/search!gtSuggest.do';
		switch(sType) {
			case '餐厅':
				url = '/search!gtSuggest.do';
				break;

			case '超市':
				url = '/search!marketTips.do';
				break;

			case '地址':
				url = '/search!gtAddrSuggest.do';
				break;
		}
		//请求
		$.ajax({
			url: url,
			data: {
				keyWord: d.keyWord,
				cityId: cur_city
			},
			dataType: 'json',
			success: function(data) {
				var type = d.keyWarp.attr('stype');
				if(data.status || type == '地址') {
					var aResult = data.result;
					//没有数据
					if(aResult.length < 1) {
						d.parent.hide();
						return;
					}
					var sLists = '';
					if(type == '餐厅') {
						for(var i = 0, l = aResult.length; i < l; i++) {
							var oResult = aResult[i];
							if(oResult.entityType == 1) { //餐厅
								sLists += '<li><a href="/order/menu/' + oResult.entityId + '.html">' + oResult.entityName + '</a></li>';
							} else if(oResult.entityType == 3) { //连锁商家
								sLists += '<li><a href="/brand/' + oResult.entityId + '">' + oResult.entityName + '</a></li>';
							} else { //	餐品
								sLists += '<li><a href=\"/search!gtSearchResult.do?keyWord=' + encodeURIComponent(oResult.entityName) + '\">' + oResult.entityName + '</a></li>';
							}
						}
					} else if(type == '超市') { //超市
						for(var i = 0, l = aResult.length; i < l; i++) {
							var oResult = aResult[i];
							sLists += '<li><a href=/supplier/market!search.do?keyword=' + encodeURIComponent(oResult) + '>' + oResult + '</a></li>';
						}
					} else { //	地址
						for(var i = 0, l = aResult.length; i < l; i++) {
							var oResult = aResult[i];
							sLists += '<li><a href="/search/map.do?keyWord=' + escape(oResult.name) + '">' + oResult.name + '</a></li>';
						}
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
						}
					});
				}

				d.success(data);
			}
		});
	};

	//点击选择图片  IE 下不能使用click() 去触发
	$('.file-btn2').on({
		click: function(ev) {
			ev.stopPropagation();
			$(this).siblings('input[type="file"]').click();
		}
	});

	//输入框获取光标触发选择图片事件
	$('#input2').on({
		click: function(ev) {
			ev.stopPropagation();
		},
		focus: function() {
			$(this).siblings('input[type="file"]').click();
		}
	});

	//阻止file 触发点击事件时候冒泡

	//值改变
	$('#file-btn').on({
		change: function() {
			$(this).siblings('.fileTxt').val($(this).val());
		},
		click: function(ev) { ev.stopPropagation(); }
	});

	//点击上传
	$('.uploadFileBtn').on({
		click: function(ev) {
			ev.stopPropagation();
			var sVlaue = $('#file-btn').val();
			if(!sVlaue) {
				base.alert({
					height: '36px',
					css: { 'line-height': '36px' },
					content: "请选择您要上传的图片"
				});
				return;
			}
			var Suffix = sVlaue.substr(sVlaue.lastIndexOf('.') + 1);
			var arrImgType = 'png|jpg|jpeg|gif';
			if(Suffix == 'png' || Suffix == 'jpg' || Suffix == 'jpeg' || Suffix == 'gif') {

				$('#form1').submit();
			} else {
				base.alert({
					height: '36px',
					css: { 'line-height': '36px' },
					content: "图片格式错误，只支持jpg|gif|png格式"
				});
			}
		}
	});

	//关闭
	$('.closeUpload').on({
		click: function(ev) {
			ev.stopPropagation();
			$(this).parents('.uploadPic').hide();
		}
	});

	//下拉框模拟
	$('.select h3').on({
		click: function(ev) {
			ev.stopPropagation();
			var rparent = $(this).parents('.select');
			var $List = rparent.find('ul');
			var aLists = $List.find('li');
			var _this = $(this);
			var sTxt = _this.find('.selecTxt').html();
			aLists.removeClass('active');
			if($List.css('display') == 'none') {
				for(var i = aLists.length; i--;) {
					if(aLists[i].innerHTML == sTxt) {
						aLists[i].className = 'active';
					}
				}
				$List.show();
			} else {
				$List.hide();
			}
		}
	});
	$('.select li').on({
		click: function(ev) {
			var $parent = $(this).parents('.select');
			$parent.find("ul").attr("value", $(this).attr('value'));
			$parent.find('.selecTxt').html($(this).html()).attr('value', $(this).attr('value'));
			$(this).parent().hide();
		},
		mouseover: function() {
			$(this).addClass('active');
		},
		mouseout: function() {
			$(this).removeClass('active');
		}
	})

	/*
	 +	用户中心左侧的JS
	*/

	$('.user-userMoudle-list .user-userMoudle-title,.user-userMoudle-list .triangle').on({
		click: function(ev) {
			var $parent = $(this).parent();
			var oNext = $parent.find('.user-userMoudle-sonList');
			var $tip = $parent.find('.triangle');
			if(oNext.css('display') != 'none') {
				oNext.hide();
				$tip.addClass('close');
			} else {
				$tip.removeClass('close');
				oNext.show();
			}
		}
	});
});