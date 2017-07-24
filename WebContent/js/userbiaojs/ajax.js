
	$("#updatebutton").click(function() {
		document.getElementById("username").style.backgroundColor = "red";
		document.getElementById("password").style.backgroundColor = "red";
		document.getElementById("relname").style.backgroundColor = "red";
		document.getElementById("username").readOnly = false;
		$("#updatebutton").css("display", "none")
		$("#password").click(function() {
			$("#updatepasswordform").css("display", "block")
		});
		document.getElementById("relname").readOnly = false;
	});

	$("#oldpwd").blur(function() {
		$.ajax({
			// 发送请求的方式 get post
			type : "post",
			// 目标资源位置
			url : "testpassword.action",
			// 默认值: true。默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为
			// false。
			async : true,
			// 需要发送到服务器的数据
			// 请求成功后的回调函数。 data 为服务器返回的数据
			data : {
				tel : $("#tel").val(),

				password : $("#oldpwd").val()
			},
			success : function(message) {
				// 将数据转换成json对象
				var json = jQuery.parseJSON(message);
				// 从json对象中获取对应的参数
				var messages = json[0].message;
				// 在 usernamespan 标签中添加 font 标签
				$("#passwordspan").show();
				$("#passwordspan").html(messages);
			},
			error : function(data) {
				alert('出错了');
			}
		});

	});
	$("#addnewpassword").click(
			function() {
				if ($("#oldpwd").val().length == 0
						| $("#pwdinput").val().length == 0
						| $("#pwd2input").val().length == 0) {
					alert("参数不能为空");
				} else if ($("#pwdinput").val() != $("#pwd2input").val()) {
					alert("两次密码不一致")
				} else {
					$("#password").val(pwdinput);
				$("#updatepasswordform").css("display", "none")
				$("#updatebutton1").css("display", "block")
				$("#updatebutton1").click(function() {
				$("#updateuserform").submit(); 
				
				});
				}
			});














