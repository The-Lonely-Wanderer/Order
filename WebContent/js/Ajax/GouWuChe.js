$("document").ready(
	function() {
		$("#shopp").click(
			function() {
//				var z_id = $("#zong").val();
				//拿页面b标签或者span标签的方法
				var z_id = $(".jtc-sum b").eq(0).text();
//						alert(z_id);
					$.ajax({
						// 发送请求的方式 get post
						type : "post",
						// 目标资源位置
						url : "jiaoqian.action",
						
						// 需要发送到服务器的数据
						data : {
							z_id : z_id
							},
						async : true,
				success : function(t_order) {
					var json = jQuery.parseJSON(t_order);
					var dingdanid = json[0].dingdanid;
					var zongjiaqian = json[0].zongjiaqian;
					$("#dingdanhao").html(dingdanid);
					$("#zongjq").html(zongjiaqian);
					
				}
						});
				});
			}
		);
