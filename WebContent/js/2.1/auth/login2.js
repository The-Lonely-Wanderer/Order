// JavaScript Document
//注册
/*=============================================================================
#     FileName: reg_bmap.js
#         Desc: 
#       Author: zhoulang
#        Email: lovezhoulang@163.com
#     HomePage: http:www.dianwoba.com
#      Version: 0.0.1
#   LastChange: 2013-08-02 18:38:54
#      History:
#        Utend: 注册页面
=============================================================================*/
$(function() {
	var rootW = window;
	var urlRedirect = "";

	//会员用户登录
	function register() {
		rootW.location.href = "register.html";
	}

	//输入框获取和失去光标事件
	base.FormTextCursor({
		obj: $('#email'), //触发的$对象  
		tip: '手机号/邮箱', //提示文字
		focusColor: '#000', //获取光标文本框中字体的颜色
		blurColor: '#999', //失去光标文本框中字体的颜色
		focusFn: function() {}, //获取光标的回调函数
		blurFn: function() {} //失去光标的回调函数
	});

	$('#forget_pw').on({
		click: function(ev) {
			ev.stopPropagation();
			if($(this).hasClass('active')) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');
			}
		}
	});

	//个人登录函数
	function personLogin(ev) {
		ev.preventDefault();
		var email = $('#email').val();
		var pwd = $('#pwd').val();
		var isAutoLogin = 0;

		//记住密码
		if($("#forget_pw")[0].checked) {
			isAutoLogin = 1;
			$.cookie('dwb_Pemail', email, { expires: 30, path: '/' });
			$.cookie('dwb_Ppwd', "", { expires: 30, path: '/' })
		}

		var patrn = /^(\w){6,20}$/;
		if(!patrn.exec(pwd)) { // 不正确的输入格式
			alert("密码输入错误，请重新输入！");
			$('#personLoginBtn').removeAttr('disabled');
			if($('#email').val() != "") {
				$('#pwd').focus();
			} else {
				$('#email').focus().val("");
			}
			return;
		}
		$.ajax({
			url: '/auth/login!asynLogin.do',
			data: {
				userName: email,
				passWord: pwd,
				isAutoLogin: isAutoLogin,
				t: +new Date()
			},
			type: 'POST',
			dataType: 'json',
			success: function(res) {
				$('#personLoginBtn').removeAttr('disabled');
				checkItemResponse(res);
			},
			error: function() {
				$('#personLoginBtn').removeAttr('disabled');
				alert("系统登录错误");
			}
		});
	}

	//回车登录
	$('#pwd').keydown(function(ev) {
		if(ev.keyCode == 13) {
			personLogin(ev);
		}
	});
	//个人登录
	$('#personLoginBtn').click(function(ev) {
		_gaq.push(['_setCustomVar', 1, 'Login', 'yes', 2]);
		_gaq.push(['_trackPageview']);
		$(this).attr('disabled', 'true');
		personLogin(ev);
	});

	//个人登录请求回调函数
	function checkItemResponse(data) {
		if(data.status) {
			var r = data.result;
			//成功
			if(r.loginStatus == '1') {
				//$.cookie('dwb_cityid',r.cityId,{expires:7,path:'/'});
				var domain = getDomain(r.cityId);
				$.cookie('uemail', $('#email').val(), { expires: 30, path: '/' });
				var a = document.location.href;
				//若是从原先的地址跳转过来
				if(a.indexOf("#?") != -1) {
					var b = a.indexOf("#?");
					urlRedirect = a.substring(b + 2, a.length + 1);
					rootW.location.href = urlRedirect;
				} else {
					rootW.location.href = domain;
				}
			} else {
				//密码或邮箱出错
				alert('密码输入错误，请重新输入！');
			}
		}
	}

	//鼠标焦点定位
	$('#email').focus();

	//从cookie中获取数据自动填写到输入框
	function auto_login() {
		var usr = $.cookie('dwb_Pemail');
		var psd = $.cookie('dwb_Ppwd');
		if(usr && psd) {
			$('#email').val(usr);
			$('#pwd').val(psd);
			$('#forget_pw').attr('checked', 'checked');
		}
	}
	auto_login();
});