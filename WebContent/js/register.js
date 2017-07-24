$(document).ready(function(){

			$("#username").blur(function() {
				alert("dasdasd");
				// 调用jquery下的ajax函数
				$.ajax({
					// 发送请求的方式 get post
					type: "post",
					// 目标资源位置
					url: "testusername.action",
					// 默认值: true。默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为
					// false。
					async: true,
					// 需要发送到服务器的数据
					// 请求成功后的回调函数。 data 为服务器返回的数据
					data: {
						username: $("#username").val()
					},
					success: function(message) {
						// 将数据转换成json对象
						var json = jQuery.parseJSON(message);
						// 从json对象中获取对应的参数
						var messages = json[0].message;
						// 在 usernamespan 标签中添加 font 标签
						$("#usernamemessage").show();
						$("#usernamemessage").html(messages);
					},
					error: function(data) {
						alert('出错了');
					}
				});

			});

			
		});