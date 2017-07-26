//购物车点击关注按钮事件

$("document")
		.ready(
				function() {
					$("#gouwuche")
							.click(
									function() {
										// alert("进入ajax");

										// 调用jquery下的ajax函数
										$
												.ajax({
													// 发送请求的方式 get post
													type : "post",
													// 目标资源位置
													url : "GouWuChe.action",
													async : true,
													// 为服务器返回的数据
													success : function(
															gradelist) {
														var json = jQuery
																.parseJSON(gradelist);
														var list = json[0].gradelist;
														var money = json[0].money;
														var lerth = json[0].i;
														// alert(lerth+"钱钱钱")
														var str = "";
														for ( var i in list) {
															str += "<span class='p-img'><a href='#' target='_blank'><img src='images/foodimage/"
																	+ list[i].photo
																	+ "' alt='"
																	+ list[i].foodinfo
																	+ "' height='50' width='50' /> </a> </span>"
																	+ "<div class='p-name'>"
																	+ "<a href='#'>"
																	+ list[i].foodinfo
																	+ "</a></div><div class='p-price'><strong>￥"
																	+ list[i].price
																	+ "</strong>×1</div>"
																	+ "<span  style='display:block;cursor:pointer;width:28px ;height:19px;border: 1px inset red;background-color: #D8891E;float:right;' id='"
																	+ list[i].id
																	+ "' onclick=delet('"
																	+ list[i].id
																	+ "');>删除</span>"
															// + "<a
															// href='#none'
															// class='p-del
															// J-del'>删除</a>"
														}
														$("#gou").html(str);
														$("#zong").html(money);
														$("#length")
																.html(lerth);
														$("#daohang").html(
																lerth);

														// "<div
														// style='width:900px;height:500px;'>"
														// + str
														// + "<div
														// align='center'><div
														// style='color:red;width:380px;'><p
														// class='shang'
														// style='display:block;cursor:pointer;width:72px;height:23px;border:1px
														// solid
														// red;background-color:#E18D17;'
														// >上一页</p><p
														// class='xia'
														// style='display:block;cursor:pointer;width:72px;height:23px;border:1px
														// solid
														// red;background-color:#E18D17;'
														// >下一页</p></div></div></div>");
													}
												});
									});
				}

		);

// 点击购买事件

function delet(id) {
	$
			.ajax({
				type : "post",
				url : "goudelet.action?id=" + id,
				async : true,
				success : function(alist) {
					var json = jQuery.parseJSON(alist);
					var message = json[0].message;
					var list = json[0].gradelist;
					var m = json[0].moneyz
					var lerth = json[0].i1;
					var str = "";
					// var money = "";
					for ( var i in list) {
						str += "<span class='p-img'><a href='#' target='_blank'><img src='images/foodimage/"
								+ list[i].photo
								+ "' alt='"
								+ list[i].foodinfo
								+ "' height='50' width='50' /> </a> </span>"
								+ "<div class='p-name'>"
								+ "<a href='#'>"
								+ list[i].foodinfo
								+ "</a></div><div class='p-price'><strong>￥"
								+ list[i].price
								+ "</strong>×1</div>"
								+ "<span  style='display:block;cursor:pointer;width:28px ;height:19px;border: 1px inset red;background-color: #D8891E;float:right;' id='"
								+ list[i].id
								+ "' onclick=delet('"
								+ list[i].id
								+ "');>删除</span>";

						// money +=money;
						// + "<a href='#none' class='p-del J-del'>删除</a>"
					}
					// alert(message);
					$("#gou").html(str);
					$("#zong").html(m);
					// alert(lerth)
					$("#length").html(lerth);
					$("#daohang").html(lerth);
				}
			});
}
