define("path/selectAdd", [], function(require, exports, module) {
	function selectAdd() {
		$(".addressSelect .dropDown_iconBox,.addressSelect .positionIconB").on("click", function(e) {
			if(user.isLogin == 0) {
				window.location.href = "/auth/login.do#?" + window.location.href;
			} else {
				var $list = $(this).parent().next(".selectListAddress"),
					$link = $list.find("a");
				if($list.is(":hidden")) {
					$list.show();
					getUserAddrs(cur_city);
				} else {
					$list.hide();
				};
				e.stopPropagation();
				$(document).on("click", function() {
					$list.hide();
				});
				$link.on("click", function() {
					var _text = $(this).text();
					$(".addressText").text(_text);
				})
			}
		})

	};
	selectAdd();

	function getUserAddrs(cityid) {
		$.get(
			"/ucenter/profile!findAddressList.do", { cityid: cityid, t: +new Date() },
			function(data) {
				getDBUserAddrsResponse(data);
			},
			"json"
		)
	}

	exports.getUserAddrs = getUserAddrs;

	//填充用户地址
	function getDBUserAddrsResponse(data) {
		if(data.status) {
			var json = data;
			var addrList = json.result;
			var userInfo = "";

			for(var i = 0, len = addrList.length; i < len; i++) {
				var o = addrList[i];
				userInfo += "<li aId='" + o.id + "' aqukuai='" + o.qukuai + "' aLng='" + o.lng + "' aLat='" + o.lat + "' addrs='" + o.addrs + "'><a class='link' ' href='javascript:;'>" + o.addrs + "</a></li>";
			}
			userInfo += '<li class="lastSet clearfix">';
			if($(".selectListAddress").data("type") == "list") {
				userInfo += '<a href="/?clearAddress=1" title="" class="addAddressBtn">+使用新地址</a>';
			}
			// userInfo +='<a title="" href="/ucenter/profile!address.do">管理地址</a> <span class="set_icon"></span></li>';
			$(".selectListAddress").html(userInfo);

			//点击事件
			$('.selectListAddress li[aId]').bind({
				'click': function(ev) {
					$(".searchInput").val($(this).attr('addrs'));
					setAddr($(this).attr('aId'), $(this).attr('aqukuai'), $(this).attr('aLng'), $(this).attr('aLat'), $(this).attr('addrs'));
					ev.stopPropagation();
				}
			});
		}
	};

	/*==================================
		切换地址：设置默认地址
	==================================*/
	function setAddr(addrid, area, lng, lat, addr) {
		$.get(
			"/ucenter/profile!editDefaultAddrs.do", {
				addrId: addrid,
				qukuai: area,
				t: +new Date()
			},
			function(data) {
				if(data.status == 1) {
					var url = window.location.href;
					var toUrl = "/dianwoba/grid/sl.jsp";
					var domain = getDomain(data.result.cityId);
					if(url.indexOf("/dianwoba/grid/liansuo.jsp") > 0) {
						toUrl = "/dianwoba/grid/liansuo.jsp" + url.substring(url.indexOf("?"), url.length);
					}
					if(url.indexOf("/dianwoba/grid/sl.jsp") > 0) {
						toUrl = "/dianwoba/grid/sl.jsp";
					}
					/*if(url.indexOf(domain) != -1){//当前域名
						window.location.reload();
					}
					else{
						window.location.href = domain+toUrl;
					}*/
					window.location.href = domain + toUrl;
				}
			}
		)
	}

	//根据城市ID获取域名
	function getDomain(cityId) {
		var domain = "http://www.dianwoba.com";
		if(Number(cityId) == 3) {
			domain = "http://shanghai.dianwoba.com";
		}
		return domain;
	}

})