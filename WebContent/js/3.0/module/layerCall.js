define("path/layerCall", ['layer'], function(require, exports, module) {
	var layerJs = require("layer");

	function subForm() {
		var submitBtn = $("#submitBtn");
		$.ajax({
			type: "POST",
			url: "/supplier/restaurant2!checkIn.do",
			data: $("#dform").serialize(),
			beforeSend: function() {
				$("#submitBtn2").html("订单提交中...");
			},
			success: function(msg) {
				if(msg == -100) {
					alert("充值帐户余额不足!!!");
					subFlag = 0;
					submitBtn.html("提交订单");
				} else if(msg == -99) {
					alert("支付密码错误");
					subFlag = 0;
					submitBtn.html("提交订单");
				} else {
					if(msg.status == 1) {
						submitBtn.html("提交订单");
						if(msg.data.payUrl != "") {
							openPay(msg.data.payUrl)
							$("#againPay").attr("href", msg.data.payUrl);
							layerCall.payLayer(msg.data.orderCode);
							//layerCall.payWordLayer();
						} else {
							location.href = "/supplier/restaurant2!checkSuccess.do?orderCode=" + msg.data.orderCode;
						}
					} else {
						subFlag = 0;
						submitBtn.html("提交订单");
						alert("订单提交失败");
					}
				}
			}
		});
	}

	var checkLayerIndex = 0;
	var checkLayer;

	exports.payLayer = function(orderCode) {
		var payLayer = $.layer({
			type: 1,
			title: "请在新开页面中完成支付",
			area: ["600px", "auto"],
			border: [0, 0, "#fff"],
			page: { dom: ".payLayer" },
			success: function(layero) {
				/*$(layero).on("click",function(){
				    layer.close(payLayer);
				});*/

				if(orderCode == "") {
					orderCode = $("#cs-order-code").val();
				}

				// 完成支付
				$("#completePay").off().on("click", function() {
					layer.close(payLayer);
					//checkPay(orderCode);
					orderCode = $("#cs-order-code").val();
					exports.checkPayLayer(orderCode);
				});

				// 重新检测
				$("#againDet").off().on("click", function() {
					layer.close(payLayer);
					//checkPay(orderCode);
					orderCode = $("#cs-order-code").val();
					exports.checkPayLayer(orderCode);
				});

				$("#change2pay").off().on("click", function() {
					orderCode = $("#cs-order-code").val();
					$.post("/supplier/restaurant2!change2pay.do", { orderCode: orderCode }, function(data) {
						if(data.status == 1) {
							location.href = "/ucenter/order!hotel.do";
						} else {
							alert(data.msg);
						}
					});
					return false;
				});

				$("#completePay,.xubox_close").on("click", function() {
					window.location = "/ucenter/order!hotel.do";
				});

				$(document).on("click", "h3", function() {
					var $box = $(layero).find(".problemBox");
					if($box.is(":hidden")) {
						$box.show();
						$(this).find("span").addClass("dropUp_icon");
						$("#xubox_layer1").height(420);
					} else {
						$box.hide();
						$(this).find("span").removeClass("dropUp_icon");
						$("#xubox_layer1").height("");
					}
				});

			}

		});
	} //完成支付层

	function checkPay(orderCode) {
		$.post("/supplier/restaurant2!checkPay.do", { "orderCode": orderCode }, function(msg) {
			if(msg == 1) {
				location.href = "/supplier/restaurant2!checkSuccess.do?orderCode=" + orderCode;
			} else {
				setTimeout(function() {
					//layerJs.colse(checkLayerIndex);
					if(checkLayer && checkLayerIndex) {
						checkLayer.close(checkLayerIndex);
					}
					$('.prompt').show();
					exports.payLayer(orderCode);
				}, 1000);
			}
		});
	}

	// 支付检测
	exports.checkPayLayer = function(orderCode) {
		$(".again_check_").show();
		$(".success_check_").hide();
		var checkPayLayer = $.layer({
			type: 1,
			title: false,
			area: ["600px", "auto"],
			border: [0, 0, "#fff"],
			page: { dom: ".payDetLayer" },
			success: function(layero) {
				checkLayer = layer;
			}
		});
		setTimeout(function() {
			checkLayerIndex = checkPayLayer;
			checkPay(orderCode);
		}, 200);
	}

	exports.packageLayer = function() {
		var packageLayer = $.layer({
			type: 1,
			title: false,
			area: ["600px", "auto"],
			border: [0, 0, "#fff"],
			page: { dom: ".packageLayer" },
			success: function(layero) {
				$(".okBtn,.cancelBtn", layero).on("click", function() {
					layer.close(packageLayer);
				});
			}

		});
	} //完成支付层

	exports.locationLayer = function() {
		var locationLayer = $.layer({
			type: 1,
			title: false,
			area: ["980px", "600"],
			border: [0, 0, "#fff"],
			closeBtn: false,
			page: { dom: ".locationLayer" },
			success: function(layero) {
				require.async(['./mapIndex'], function(mapIndex) {
					//map.markPoint();
					var keyword = $(".searchAddress").val();
					$(layero).find("#mapInput").val(keyword);
					mapIndex.init(keyword);
					$("#map_seach_btn").on("click", function() {
						var keyword = $("#mapInput").val();
						mapIndex.init(keyword);
					});
					$("#mapInput").on("keypress", function(e) {
						if(e.keyCode == 13) {
							$("#map_seach_btn").trigger("click")
						}
					})
				});
				showHidden();

				$("#mapTipsClosed").on("click", function() {
					$(this).parents(".mapTips").hide();
				});
				$(document).on("click", ".locationClosed", function() {
					layer.close(locationLayer);
				});

			}

		});
	} //确认地图位置层

	exports.locationErrandLayer = function(inputType) {
		var locationLayer = $.layer({
			type: 1,
			title: false,
			area: ["980px", "600"],
			border: [0, 0, "#fff"],
			page: { dom: ".locationLayer" },
			//closeBtn: [1, true],
			closeBtn: false,
			success: function(layero) {
				require.async(['./map'], function(map) {
					//map.markPoint();
					var keyword = $("." + inputType).val();
					map.initErrand(keyword, inputType);
				});
				showHidden();
				$(document).on("click", ".locationClosed", function() {
					layer.close(locationLayer);
				});
			}

		});
	} //确认跑腿页地图位置层

	exports.locationAddrLayer = function(city) {
		var locationLayer = $.layer({
			type: 1,
			title: false,
			area: ["980px", "600"],
			border: [0, 0, "#fff"],
			page: { dom: ".locationLayer" },
			closeBtn: [1, true],
			success: function(layero) {
				require.async(['./map'], function(map) {
					//map.markPoint();
					var keyword = $("#position").val();
					map.initAddr(keyword, city);
				});
				showHidden();
				$(document).on("click", ".locationClosed", function() {
					layer.close(locationLayer);
				});
			}

		});
	} //账户中心地图位置层

	function showHidden() {
		$(".backBtn").on("click", function() {
			var $addList = $(this).prev(".addList");
			var $map = $(".mapCon");
			if($addList.is(":hidden")) {
				$addList.show();
				$(this).css({ "left": "260px" }).find("span").addClass("arrowB");
				//                 $map.addClass("mapCon540");
			} else {
				$addList.hide();
				$(this).css({ "left": "0px" }).find("span").removeClass("arrowB");
				//                 $map.removeClass("mapCon540");
			}
		})
	}

	exports.sendLayer = function() {
		var sendLayer = $.layer({
			type: 1,
			title: false,
			area: ["430px", "auto"],
			border: [0, 0, "#fff"],
			page: { dom: ".sendLayer" },
			closeBtn: false,
			success: function(layero) {
				$(".btnOrg40", layero).on("click", function() {
					layer.close(sendLayer);
				});
			}

		});
	} //满100元送礼层

	exports.showPicLayer = function() {
		var showPicLayer = $.layer({
			type: 1,
			title: false,
			area: ["330px", "250px"],
			border: [0, 0, "#fff"],
			page: { dom: ".showPicLayer" },
			closeBtn: false,
			success: function(layero) {
				$(".d_closeBtn", layero).on("click", function() {
					layer.close(showPicLayer);
				});
			}

		});
	} //餐品图片

	exports.payWordLayer = function() {
		var payWordLayer = $.layer({
			type: 1,
			title: false,
			area: ["380px", "auto"],
			border: [0, 0, "#fff"],
			page: { dom: ".payWordLayer" },
			closeBtn: false,
			success: function(layero) {
				/* $(".okBtn,.cancelBtn",layero).on("click",function(){
				     layer.close(payWordLayer);
				 });*/
				$(".p_ok_", layero).off().on("click", function() {
					var payWord = $(".payword_").val();
					if($.trim(payWord) == "") {
						alert("请输入支付密码!");
						return;
					}
					$('input[name="payPass"]').val(payWord);
					layer.close(payWordLayer);

					//$("#submitBtn").click();
					$("#submitBtn").html("订单提交中...");
					subForm();
				});
				$(".p_no_", layero).off().on("click", function() {
					layer.close(payWordLayer);
				});
			}
		});
	} //输入支付密码

	exports.vipPayWordLayer = function(page) {
		var payWordLayer = $.layer({
			type: 1,
			title: false,
			area: ["380px", "auto"],
			border: [0, 0, "#fff"],
			page: { dom: ".payWordLayer" },
			closeBtn: false,
			success: function(layero) {
				var src = "./vipRecharge";
				if(page == "errand") { //跑腿页
					src = "./runErrand";
				}
				require.async([src], function(vip) {
					$(".pwdtips").hide();
					$(".payword_").val("");
					$(".p_ok_", layero).on("click", function() {
						var payWord = $(".payword_").val();
						//验证支付密码
						$.ajax({
							url: '/ucenter/account!checkZhifuPwd.do',
							type: 'get',
							data: {
								zhifupwd: payWord,
								t: +new Date()
							},
							dataType: 'json',
							success: function(data) {
								if(data.status) {
									var pwdstatus = data.result.status;
									if(pwdstatus == 0) {
										$(".pwdtips").html("支付密码错误，请重新输入").show();
										return;
									} else if(pwdstatus == 1) { //验证密码成功
										layer.close(payWordLayer);
										vip.useAccountMoney(payWord);
									} else if(pwdstatus == -1) {
										$(".pwdtips").html("支付密码未设置，请先<a href='/ucenter/account!index.do' class='apanel' target='_blank'>设置</a>");
										return;
									}
								}
							}
						});
					});

					$(".p_no_", layero).off().on("click", function() {
						layer.close(payWordLayer);
					});
				});
			}
		});
	} //VIP续费输入支付密码

	exports.WXloginLayer = function() {
		var WXloginLayer = $.layer({
			type: 1,
			title: "关注点我吧微信，自动登录",
			area: ["420px", "auto"],
			border: [0, 0, "#fff"],
			page: { dom: ".WXloginLayer" },
			success: function(layero) {
				$("#completePay,#againPay", layero).on("click", function() {
					layer.close(WXloginLayer);
				});
			}

		});
	} //微信登录

	exports.beyondLayer = function() {
		var beyondLayer = $.layer({
			type: 1,
			title: false,
			area: ["550px", "auto"],
			border: [0, 0, "#fff"],
			page: { dom: ".beyondLayer" },
			closeBtn: false,
			success: function(layero) {
				$(".btnGrey48", layero).on("click", function() {
					layer.close(beyondLayer);
				});
			}
		});
	} //超出配送范围
	exports.addressLayer = function() {
		var addressLayer = $.layer({
			type: 1,
			title: false,
			area: ["550px", "auto"],
			border: [0, 0, "#fff"],
			page: { dom: ".addressLayer" },
			closeBtn: false,
			success: function(layero) {
				$(".btnGrey48", layero).on("click", function() {
					layer.close(addressLayer);
				});
			}
		});
	} //添加地址提示
})