/*
 *  date:2013-7-30
 * 
 * */

var isloginflag = "no"; //是否已经登录的标志
var contact = "";
var groupname = "";
var gridxy = "";
var nickcode = 0;
var permission = 0; //权限 管理说说
var cityid = 1; //城市ID，默认杭州
var email = "";
var headimage = "";

//判断是否登录

function islogin() {
	$.ajax({
		url: '/auth/login!loginStatus.do',
		dataType: 'json',
		data: {
			t: +new Date()
		},
		timeout: 10000,
		success: function(data) {
			if(data.status) {
				if(data.result.code) {
					isLoginResponse(data.result);
				} else {
					//当跳转到登录地址时，记入原地址
					var sLocaltion = document.location.href;
					if(sLocaltion.indexOf("/auth/login") == -1 && !$("#FirstIndex")[0]) {
						//alert("尊享安心、便捷的服务，请先登录！");
						window.location.href = "/auth/login.do#?" + sLocaltion;
					}

				}
			}
		},
		error: function(xhr, textStatus, errorThrown) {
			// if( textStatus == 'timeout' ){
			// alert('页面超时');
			// }else{
			//alert('其他出错');
			//}      
		}
	});
}

//登录成功执行的函数
function isLoginResponse(res) {
	isloginflag = "ok";

	//服务区块ABC或者网格999_999
	gridxy = res.gridxy;
	var gd = gridxy.split("_");
	if(gd.length > 3) {
		var groupid = gd[3];
		var mealtype = gd[6];
		groupname = gd[7];
		contact = res.contact; //名字
		window.mealname = "中餐";

		//置中晚餐
		if(mealtype == "1") {
			mealname = "晚餐";
		}
	} else {
		contact = res.contact; //用户名
	}

	//地址
	window.position = res.position;

	//电话
	window.phone = res.phone;

	//性别
	var sex = res.sex;

	//用户ID号
	nickcode = res.code;

	if(nickcode == 10000) { permission = 1; } //管理

	//头像地址
	headimage = res.headimage;

	//城市ID
	cityid = res.cityid;

	//昵称
	var nick = res.nick;

	//email
	email = res.email;

	//我的说说数量
	if($("#myMicroblog_count")[0]) {
		getMyMicroblogCount(nickcode, 2);
		getMyMicroblogCount(nickcode, 4);
	}

	//列表、超市页地址显示
	$("#showAddress").html(window.position);
	$("#sAddress").html(window.position);

	//充值账户
	if($("#account_balance")[0] && $("#account-name")[0]) {
		$("#account-name").html(contact + "(ID:" + nickcode + ")");
	}

	//gotoTodayOrder();
}

//几个地方调用  
function loginOut() {
	$.ajax({
		url: '/auth/login!logOut.do',
		data: { t: +new Date() },
		dataType: 'json',
		timeout: 10000,
		success: function(data) {
			//console.log(data);
			if(data.status) {
				window.location.href = "/index.html";
				return;
			}
		},
		error: function(xhr, textStatus, errorThrow) {
			// if( textStatus === 'timeout' ){
			// //超时处理
			// alert('超时');
			// }else{
			alert("会员退出判断错误");
			//}
		}
	});
}

//支付宝支付成功跳转页面
/*function gotoTodayOrder(){
	var _href = window.location.href;
	if (contact.length > 0 && _href.indexOf("member/order.html")!=-1){
		if(_href.indexOf("dwbwuliu")!=-1){
			window.location.href = "/ucenter/order!wuliu.do";
		}else{
			window.location.href = "/ucenter/order!hotel.do";
		}
	}
}*/

//置导航条高亮
//navHighlight();