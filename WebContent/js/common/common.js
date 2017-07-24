//var GLOBAL.cities = [1,2,3];

var dirty_word = /(共党|反共|共产党|讨阀|中宣部|新唐人|六四|王丹|柴玲|丁子霖|真善忍|明慧|洪志|法轮|轮功|弟子|大法|大纪元|江泽民|尖阁|国家安全局|国安局|黄菊|罗干|吴官正|贾庆林|温家宝|吴邦国|曾庆红|李长春|胡锦涛|邓小平|打炮|操你|操鸡巴|我操|日|操|草|日逼|你妈逼|淫水|自焚|卖淫|强奸|奸|自慰|慰|阴囊|囊|睾丸|睾|阴茎|阴|阳具|阴道|阴蒂|射精|做爱|性交|性|口交|口淫|淫|龟头|龟|kangri|fanri|youxing|kangrilianmeng|weiyuanhui|zhenxian|fenlie|shiwei|dongya|dongmeng|rihuo|fanrilianmeng|jihui|zhengfu|chongtu|luxian|baofa|minyun|minzhu|liusi|fangong|tuidang|http|dafz|falun|dafa|flg|focus88|flash88|www|newav|zhonghua999|xinhuawang|jinjing|shit|fuck)/;
//是否含有非法字符

//替换用户用以字符
var sys_char = /,|~|-|#|%|\^|\*|\||delete|select|update|or/g;

function replaceSyschar(str) {
	return $.trim(str).replace(sys_char, "_");
}

function haveInvalidStr(str) {
	if(null == str || "" == $.trim(str))
		return false;
	return dirty_word.test(str);
}

//判断字符字节数
function strLength(s) {
	return s.replace(/[^\x00-\xff]/gi, 'hi').length;
}

//判断是否为中文
function isChinese(s) {
	return /^[\u4e00-\u9fa5]*$/.test(s);
}

//检查Email地址 正确返回true
function checkEmail(email) {
	var pattern = /^([a-zA-Z0-9_]+[\.a-zA-Z0-9_-]*){1,}@([a-zA-Z0-9-]+\.){1,}[A-Za-z0-9]{2,4}$/;
	return pattern.test(email);
}

//注册时门牌号验证
function checkRoadnum(roadnum) {
	//cch 20090602 add
	if(null == roadnum || "" == $.trim(roadnum))
		return true;
	//cch 20090602 add end
	else {
		var patrn = /^(\S)+(路|街|巷|弄){1,}([0-9-]+){1,}(号)$/;
		return patrn.test(roadnum);
	}

}

//登录后添加修改地址输入路名验证
function checkRoad(road) {
	if(null == road || "" == $.trim(road))
		return true;
	var patrn = /(路|街|巷|弄)$/;
	return patrn.test(road);
}

//登录后添加修改地址输入路号验证
function checkNum(number) {
	if(null == number || "" == $.trim(number))
		return true;
	var patrn = /^[-\+]?\d+$/;
	return patrn.test(number);
}

function checkDetailAddrs(detailaddrs) {
	if("" == $.trim(detailaddrs) || strLength($.trim(detailaddrs)) > 100 || detailaddrs.length < 5) {
		return false;
	}
	return true;
}
//是否是手机号码

function isMobile(m) {
	return /^1[3|5|8][0-9]{9}$/.test(m);
}

//是否是座机号码-可带区域号码的
function isTel(tel) {
	if(null == tel || "" == $.trim(tel))
		return false;
	var patrn = /^((\d{3,4}-)?\d{7,8})$/;
	return patrn.test(tel);
}

//验证分机号码
function isTelExt(tel) {
	if(null == tel || "" == $.trim(tel))
		return false;
	var patrn = /^(\d{1,8})$/;
	return patrn.test(tel);
}

//通用电话号码，只允许填7-20位数字及空格-
function isCommonTel(tel) {
	var patrn = /^[\d| |-]+$/;
	if(!patrn.exec(tel))
		return false;
	if(null == tel || "" == $.trim(tel) || strLength($.trim(tel)) > 30 || strLength($.trim(tel)) < 8)
		return false;
	//验证以1开头的手机不能小于11位
	if($.trim(tel).indexOf("1") == 0 && strLength($.trim(tel)) < 11) {
		return false;
	}
	return true;
}

//通用用户名字验证 只能输入 min--max个汉字
function verifyUserName(userName, minLen, maxLen) {
	if("" == $.trim(userName) || $.trim(userName).length < minLen ||
		$.trim(userName).length > maxLen || !isChinese(userName) || haveInvalidStr(userName)) { //不是中文字符
		return false;
	}
	return true;
}

//增加点击数  计算配送费
function addsuphit(obj, id, deliverymode) { //deliverymode 2-团餐
	window.location.href = "/order/menu/" + id + ".html";
}

function listgetPsfeeResponse(res) {
	var a = res.split('_');
	if(a[7] == 2) {
		alert("该商家正在更新菜单，请稍后重试！");
		return;
	} else {
		window.location.href = "/order/menu/" + a[9] + ".html";
	}
}

//创建时间 参数：开始时间 间隔时间 间隔数
function createTime(init, sep, i) {
	if(init.length != 5) {
		return 0;
	}
	var seperate = i * sep;
	var ih = Math.round(init.split(":")[0]);
	var im = Math.round(init.split(":")[1]);
	im = im + Math.round(i * sep);
	ih = ih + Math.floor(im / 60);
	im = im - Math.floor(im / 60) * 60;
	if(im == 0) {
		im += "0";
	}
	var rtime = ih + ":" + im;
	return rtime;
}

//设定送达时间数组
var eat_array1 = [];
for(var i = 0; i <= 47; i++) {
	eat_array1[i] = createTime("10:15", 15, i);
}

//比较时间值大小，参数：比较时间time1(10:45)，被比较时间time2，返回大时间值

//直接对比就行了
// return time1 > time2
function laterThanTime(time1, time2) {
	var th1 = Math.round(time1.split(":")[0]);
	var tm1 = Math.round(time1.split(":")[1]);

	var th2 = Math.round(time2.split(":")[0]);
	var tm2 = Math.round(time2.split(":")[1]);

	if(th1 > th2) {
		return true;
	} else if(th1 == th2 && tm1 > tm2) {
		return true;
	} else {
		return false;
	}
}

//返回当前时间所处的数组下一项值索引
function getEat_array1Index(ctime) {
	var i = 0;
	for(var j = 0; j < eat_array1.length; j++) {
		if(!laterThanTime(ctime, eat_array1[j])) {
			i = j;
			break;
		}
	}
	return i;
}

//判断时间点是否在服务时间范围内
function isBetweenTimes(time, AM1, AM2, PM1, PM2) {
	var ret = 0; // 0-不在服务时间范围  1-在上午服务时间范围内  2-在下午服务时间范围内  3-在服务时间范围内
	if(AM2 == 0 || PM1 == 0) { //没有午休商家
		if(laterThanTime(time, AM1) && laterThanTime(PM2, time)) {
			ret = 3;
		}
	} else { //有午休商家
		if(laterThanTime(time, AM1) && laterThanTime(AM2, time)) { //在上午时间段
			ret = 1;
		} else if(laterThanTime(time, PM1) && laterThanTime(PM2, time)) { //在下午时间段
			ret = 2;
		} else {
			ret = 0;
		}
	}
	return ret;
}

function setOption(hour, minute, songdaTime) {
	if(songdaTime == undefined) {
		return;
	}

	var ctime = hour + ":" + minute;
	var k = getEat_array1Index(songdaTime); //获取
	var AMStart = $("#stime").val();
	var AMEnd = $("#breakstart").val();
	var PMStart = $("#breakend").val();
	var PMEnd = $("#etime").val();
	var AM1 = createTime(AMStart, 40, 1);
	var AM2 = createTime(AMEnd, 40, 1);
	var PM1 = createTime(PMStart, 40, 1);
	var PM2 = createTime(PMEnd, 31, 1);

	document.getElementById("orderTime").options.add(new Option("请选择", ""));
	document.getElementById("orderTime").options.add(new Option("尽快", "尽快"));
	if(hour > 22) {
		document.getElementById("orderTime").options.add(new Option("00:00"));
	} else {
		for(var i = k; i < eat_array1.length; i++) {
			if(laterThanTime(eat_array1[i], songdaTime) && isBetweenTimes(eat_array1[i], AM1, AM2, PM1, PM2)) {
				document.getElementById("orderTime").options.add(new Option(eat_array1[i], eat_array1[i]));
			}
		}
	}

}

//网站点餐时间
function resetOption() {
	var AMStart = $("#stime").val();
	var AMEnd = $("#breakstart").val();
	var PMStart = $("#breakend").val();
	var PMEnd = $("#etime").val();
	var AM1 = createTime(AMStart, 40, 1);
	var AM2 = createTime(AMEnd, 40, 1);
	var PM1 = createTime(PMStart, 40, 1);
	var PM2 = createTime(PMEnd, 30, 1);
	var orderTime = $('#orderTime')[0];
	var selectDate = $('#DiyArriveTime').val();

	if(selectDate.replace(" ", "") > visit_date.replace("\n", "").replace("\r", "")) { //预定时间不在当天
		orderTime.options.length = 0;
		for(var i = 0; i < eat_array1.length; i++) {
			if(isBetweenTimes(eat_array1[i], AM1, AM2, PM1, PM2)) {
				orderTime.options.add(new Option(eat_array1[i], eat_array1[i]));
			}
		}
	} else if(selectDate.replace(" ", "") == visit_date.replace("\n", "").replace("\r", "")) {
		if(typeof window.songdaTime === 'undefined') { //测试新时长模型
			if(typeof window.songdaTimeArr !== 'undefined') {
				var timeArr = window.songdaTimeArr.split(",");
				var sTr = '<option value="">请选择</option>';
				for(var i = 0; i < timeArr.length; i++) {
					sTr += '<option value=' + timeArr[i] + '>' + timeArr[i] + '</option>';
				}
				$('#orderTime').html(sTr);
			}
			return;
		}
		orderTime.options.length = 0; //清空送达时间数组
		setOption(window.svr_hour, window.svr_min, window.songdaTime);
		var sb = orderTime.options[1];
		if(window.songdaTime.substring(0, 2) < 10) {
			orderTime.removeChild(sb);
			//sb = null;
		} else if(window.songdaTime.substring(0, 2) == 10 && window.songdaTime.substring(3, 5) < 30) {
			orderTime.removeChild(sb);
			//sb = null;
		} else {
			var ctime = window.svr_hour + ":" + window.svr_min;

			sb.value = window.songdaTime;
			sb.text = window.songdaTime;
			//if(isBetweenTimes(ctime,AMStart,AMEnd,PMStart,PMEnd)==0){
			if(laterThanTime(AMStart, ctime)) {
				sb.value = laterThanTime(window.songdaTime, AM1) ? window.songdaTime : AM1;
				sb.text = laterThanTime(window.songdaTime, AM1) ? window.songdaTime : AM1;
			} else if(laterThanTime(AMEnd, ctime)) {
				sb.value = laterThanTime(window.songdaTime, AM2) ? AM2 : window.songdaTime;
				sb.text = laterThanTime(window.songdaTime, AM2) ? AM2 : window.songdaTime;
			} else if(laterThanTime(PMStart, ctime)) {
				sb.value = laterThanTime(window.songdaTime, PM1) ? window.songdaTime : PM1;
				sb.text = laterThanTime(window.songdaTime, PM1) ? window.songdaTime : PM1;
			} else if(laterThanTime(PMEnd, ctime)) {
				sb.value = laterThanTime(window.songdaTime, PM2) ? PM2 : window.songdaTime;
				sb.text = laterThanTime(window.songdaTime, PM2) ? PM2 : window.songdaTime;
			} else {
				orderTime.removeChild(sb);
				//sb = null;
			}
			//}			
		}

	}
}

//集团下单时间
function resetOption3() {
	var selectDate = $('#DiyArriveTime').val();
	var orderTime = $('#orderTime')[0];
	var s = visit_date.replace("\n", "").replace("\r", "");
	if(selectDate > s) {
		orderTime.options.length = 0;
		for(var i = 0; i < eat_array1.length; i++) {
			orderTime.options.add(new Option(eat_array1[i], eat_array1[i]));
		}
	} else if(selectDate == s) {
		orderTime.options.length = 0;
		var songdatime = createTime(window.svr_hour + ":" + window.svr_min, 50, 1);
		setOption(window.svr_hour, window.svr_min, songdatime);
		orderTime.options[1] = null;
	}
}

//判断浏览器类型
function getOSType() {
	var Browser = navigator.userAgent;
	var OsObject = "";
	if(Browser.indexOf("MSIE") > 0) {
		return "MSIE";
	}
	if(Browser.indexOf("Firefox") > 0) {
		return "Firefox";
	}
	if(Browser.indexOf("Safari") > 0) {
		return "Safari";
	}
	if(Browser.indexOf("Chrome") > 0) {
		return "Chrome";
	}
	if(Browser.indexOf("Camino") > 0) {
		return "Camino";
	}
	if(Browser.indexOf("Gecko/") > 0) {
		return "Gecko";
	}
}

//nana 隐藏级别显示功能代码 15-4-29
//级别显示
// function getRating(){
// 	$.ajax({
// 		url:'/common!findIntegralRating.do',
// 		data:{data:new Date()},
// 		success: function(res){
// 			if(res.status==1){
// 				getRatingResponse(res.result);
// 			}
// 		}
// 	})
// }

// function getRatingResponse(res){

// 	if($("#userRating")[0]){
// 		$("#userRating").html("<a href='/help/member_center.html#jfgl' >"+res.lvNm+"</a>");
// 		$("#userRating").next().off().on({
// 			'click':function(){
// 				showRatingtype(res.integralType)
// 			}

// 		});
// 	}
// }

//显示级别显示类型
// function showRatingtype(integralType){
// 	var _a = $("#Ratingtype");
// 	if(	_a.css('display') == 'none'	){
// 		_a.css('display','block').html("<p style='line-height:30px;height:30px;text-align:center'>请稍候...</p>");
// 		$.ajax({
// 			url:'/common!findIntegralTypeList.do',
// 			data:{date:new Date()},
// 			success: function(res){showRatingtypeResponse(res.result,integralType)}	
// 		});
// 	}else{
// 		_a.css('display','none');
// 	}
// }

// function showRatingtypeResponse(json,ratingtype){
// 	var html="<ul>";
// 	//for(var i=0;i<getJsonLength(json.result);i++){
// 	for( var index in json ){
// 		if(ratingtype == json[index].type){
// 			html += "<li><a href='javascript:void(0)' class='cur'>"+json[index].name+"</a></li>";
// 		}
// 		else{
// 			html += "<li><a href='javascript:void(0)' onclick=\"setRatingtype('"+json[index].type+"');return false;\">"+json[index].name+"</a></li>";
// 		}
// 	}
// 	html += "</ul>"
// 	$("#Ratingtype").html(html);
// }

//设置级别显示类型
// function setRatingtype(type){
// 	$.ajax({
// 		url : "/common!editWmMemberRatingType.do",
// 		data:{ratingType:type,date:new Date()},
// 		success: function(res){setRatingtypeResponse(res)}
// 	})
// }

// function setRatingtypeResponse(res){
// 	if(res.status == 1){
// 		$("#Ratingtype").css('display', 'none');
// 		getRating();
// 	}
// }

//点击商家页面动作 商家配送费等计算
function setId(eve, supid, entertype) {
	window.location.href = "/order/menu/" + id + ".html";
}

/*function getPsfee2Response(res){
	var supname = res.split("_")[0];
	var id = res.split("_")[9];
	var dwb_psfee = res.split("_")[2]/100;
	var dis = res.split("_")[4];

	//商家暂停营业显示功能添加
	var state = res.split("_")[7];
	if(state==2){
		alert("该商家正在更新菜单，请稍后重试！");
		return;
	}else{
		if(dwb_psfee>=18 && dis>=7999){
			alert("您选择的商家距您的默认送餐地址太远，为了保证餐品送达的质量，请重新选择商家下单，谢谢。");
			if(window.location.href.indexOf("index")==-1){
				window.location.href="/dianwoba/grid/sl.jsp";
			}
		}else{
			var keyword = res.split("_")[10];
				keyword = keyword.replace("请输入商家 餐品","");
				keyword = keyword.replace(supname,"");
			window.location.href = "/order/menu/"+id+".html#"+keyword;
		}
	}
}

function getPsfee2Error(){

}

function ifEnterSelfSupResponse(res){
	if(res.split("_")[0]=="ok"){
		var supid = res.split("_")[1];
		var menuid = res.split("_")[2];
		if(menuid==0){
			window.location.href = "/order/menu/"+supid+".html";
		}else{
			window.location.href = "/order/menu/"+supid+".html#Menuid="+menuid;
		}	
	}else{
		alert("您的位置超出了商家的服务范围，请重新选择商家！")
	}
}*/

//点击连锁商家页面动作
function setLiansuoId(eve, liansuoid) {
	window.location.href = "/dianwoba/grid/liansuo.jsp?lid=" + liansuoid;
}

/****************多城市公共部分*****************/

var GLOBAL = {}; //定义全局变量
GLOBAL.cities = [{ "endDate": null, "id": 1, "mapCenterLat": 30260698, "mapCenterLng": 120157985, "name": "杭州", "startDate": "2009-05-01 00:00:00", "status": 1, "zoom": 15 }, { "endDate": null, "id": 3, "mapCenterLat": 31230292, "mapCenterLng": 121514431, "name": "上海", "startDate": "2013-01-08 00:00:00", "status": 1, "zoom": 15 }];
GLOBAL.cityid = 1;

//获取当前城市ID
function getGlobalCityID() {
	$.cookie('dwb_cookie_isok', 'isok', { path: '/' })
	var dwb_cookie_isok = $.cookie("dwb_cookie_isok");
	if(!dwb_cookie_isok) {
		alert("您的浏览器设置禁用了Cookies，会影响你正常使用网站，请先启用Cookies。");
		return;
	}
	var nowcityid = $.cookie('dwb_cityid')
	if(!Number(nowcityid)) {
		nowcityid = 1;
	}
	return nowcityid;
}

function setNanjingBusiness(cityid) {
	if(cityid == 2) {
		var $mainNav = $('#mainnav');
		if($mainNav[0]) {
			var $aLid = $('#mainnav li')
			if($aLid.length > 1) {
				$aLid[2].childNodes[0].href = "javascript:void(0)";
				$aLid[2].childNodes[0].onclick = function() {
					//取消超市
					alert("南京站便利超市即将开通，敬请期待");
				}
			}
		}
		if($("#hot-chaoshi")[0]) {
			$("#hot-chaoshi").css('display', 'none');
		}

		//更改南京标题
		if(document.title) {
			var aa = document.title;
			document.title = aa.replaceAll("杭州", "南京");
		}
	} else if(cityid == 3) {
		if($("#mainnav")[0]) {

		}
		if($("#hot-chaoshi")[0]) {
			$("#hot-chaoshi").css('display', 'none');
		}

		//更改上海标题
		if(document.title) {
			var aa = document.title;
			document.title = aa.replaceAll("杭州", "上海");
		}
	}
}
/****************多城市公共部分end**************/

/****************百度地图纠偏**********************/
function toBMapLng(glng) {
	var blng = Math.round(glng) + 6540;
	return blng;
}

function toBMapLat(glat) {
	return Math.round(glat) + 5680;
}

function toGMapLng(blng) {
	return Math.round(blng) - 6540;
}

function toGMapLat(blat) {
	return Math.round(blat) - 5680;
}

//定义字符串替换全部方法
String.prototype.replaceAll = function(reallyDo, replaceWith, ignoreCase) {
	if(!RegExp.prototype.isPrototypeOf(reallyDo)) {
		return this.replace(new RegExp(reallyDo, (ignoreCase ? "gi" : "g")), replaceWith);
	} else {
		return this.replace(reallyDo, replaceWith);
	}
}

function replaceStr(str) {
	var sStartStr = str;
	var bSame = false;
	str = str.replace(/&/g, '&amp;');
	str = str.replace(/</g, "&lt;");
	str = str.replace(/>/g, "&gt;");
	str = str.replace(/'/g, '&#039;');
	str = str.replace(/"/g, '&quot;');
	str = str.replace(/"/g, '&quot;');
	str = str.replace(/^eval/g, "");
	str = str.replace(/\//g, '');
	str = str.replace(/^<!--(.*)-->$/, '');
	str = str.replace(/#/, '');
	str = str.replace(/javascript:/, '');
	if(str == sStartStr) bSame = true;
	return {
		value: str,
		bSame: bSame
	}
}

/*
 *       判断浏览器和手机端
 *
 * */
function system() {
	var sUserAgent = navigator.userAgent;
	return {
		isFF: sUserAgent.indexOf('Gecko') > -1 && sUserAgent.indexOf('KHTML') == -1, //火狐
		isOpear: sUserAgent.indexOf('Presto') > -1, //opear
		isApple: sUserAgent.indexOf('AppleWebKit') > -1, //WebKit
		isIe: sUserAgent.indexOf('MSIE') > -1, //IE
		isMobile: !!sUserAgent.match(/AppleWebKit(.*Mobile.*)?/), //手机
		ios: !!sUserAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
		android: sUserAgent.indexOf('Android') > -1 || sUserAgent.indexOf('Linux') > -1 //android终端或者uc浏览器
	}
}

/*===============================================================================================
	切换地址：查找用户地址
==============================================================================================*/
$(document).click(function() {
	$('#xialaAddress').css('display', 'none');
});
$('#selectAdress').click(function(ev) {
	var $xl = $('#xialaAddress');
	if($xl.css('display') === 'block') {
		$xl.css('display', 'none');
	} else {
		$xl.css('display', 'block');
		$xl.html("<p class='loading'>数据加载中…</p>");
		//查询客户地址
		var nowcity = getGlobalCityID();
		getUserAddrs(nowcity);
	}
	ev.stopPropagation();
});

function getUserAddrs(cityid) {
	$.get(
		"/ucenter/profile!findAddressList.do", { cityid: cityid, t: +new Date() },
		function(data) {
			getDBUserAddrsResponse(data);
		},
		"json"
	)
}

//填充用户地址
function getDBUserAddrsResponse(data) {
	if(data.status) {
		var json = data;
		var addrList = json.result;
		var userInfo = "";

		for(var i = 0, len = addrList.length; i < len; i++) {
			var o = addrList[i];
			userInfo += "<li aId='" + o.id + "' aqukuai='" + o.qukuai + "' aLng='" + o.lng + "' aLat='" + o.lat + "' addrs='" + o.addrs + "'><b>" + o.name + "</b><address title='切换到" + o.addrs + "'>" + o.addrs + "</address></li>";
		}
		userInfo += '<li class="btns"><a href="/supplier/home!map.do?from=market&amp;lastUrl=/supplier/market!index.do" title="重新定位">重新定位</a><a href="/ucenter/profile!address.do#add" title="添加地址">添加地址</a></li>';
		$("#xialaAddress").html(userInfo);

		//点击事件

		$('#xialaAddress li[aId]').bind({
			'click': function(ev) {
				setAddr($(this).attr('aId'), $(this).attr('aqukuai'), $(this).attr('aLng'), $(this).attr('aLat'), $(this).attr('addrs'));
				ev.stopPropagation();
			},
			'mouseover': function(ev) {
				$(this).css({ 'background': '#fdd4b4' });
			},
			'mouseout': function() {
				$(this).css({ 'background': 'none' })
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
				var domain = getDomain(data.result.cityId);
				if(url.indexOf("/dianwoba/grid/liansuo.jsp") > 0) {
					toUrl = "/dianwoba/grid/liansuo.jsp" + url.substring(url.indexOf("?"), url.length);
				}
				if(url.indexOf("/dianwoba/grid/sl.jsp") > 0) {
					toUrl = "/dianwoba/grid/sl.jsp";
				}
				if(url.indexOf("/search!gtSearchResult.do") > 0) {
					toUrl = "/search!gtSearchResult.do" + url.substring(url.indexOf("?"), url.length);
				}
				if(url.indexOf(domain) != -1) { //当前域名
					window.location.reload();
				} else {
					window.location.href = domain + toUrl;
				}
			}
		}
	)
	/*var addrTo = "";
	if(url.indexOf("/dianwoba/grid/liansuo.jsp")>0){
		addrTo = "chain";
	}
	if(url.indexOf("/dianwoba/grid/sl.jsp")>0){
		addrTo = "hotel";
	}
	if(url.indexOf("/search!gtSearchResult.do")>0){
		addrTo = "search";
	}
	window.location.href="/ucenter/profile!editDefaultAddrs.do?addrId="+addrid+"&addrTo="+addrTo+"&fromUrl="+url;*/
}

/*==================================
	收藏商家
==================================*/
function addCollectSup(usercode, supid, deliveryMode) {
	if(usercode == null) {
		alert("请先登录");
		window.location.href = "/auth/login.do#?" + window.location.href;
		return;
	}
	$.ajax({
		url: '/common!addCollectSup.do',
		data: { supId: supid, deliveryMode: deliveryMode, t: +new Date() },
		dataType: "json",
		success: function(data) { listgetCsupResponse(data, supid) }
	})
}

function listgetCsupResponse(data, supid) {
	if(data.status) {
		if(data.result.addCollectSupStatus == 0) {
			$("#fav_" + supid).addClass("active");
			$("#fav_" + supid + " a").html("已收藏");
		} else if(data.result.addCollectSupStatus == 1) {
			$("#fav_" + supid).removeClass("active");
			$("#fav_" + supid + " a").html("收藏");
		} else {
			alert("收藏失败，请重试!");
		}
	}
}

//获取收藏商家
$("#listHead li:eq(1)").click(function() {
	getCollectSupList();
});

function getCollectSupList() {
	var deliverymode = $("#deliveryMode").val();
	var count = 10;
	$.get(
		"/common!gtCollectSupList.do", {
			count: count,
			t: +new Date()
		},
		function(data) {
			getCollectSupListResponse(data, deliverymode);
		},
		"json"
	)
}

function getCollectSupListResponse(data) {
	if(data.status) {
		var json = data.result;
		var shoplist = json.collectSupList;

		var html = "";
		if(shoplist.length == 0) {
			html += "<li><a style='padding-left:30px;'>暂无收藏商家</a></li>"
		} else {
			for(var i = 0, len = shoplist.length; i < len; i++) {
				html += "<li><a href=\"javascript:void(0)\" onclick=\"addsuphit(this,'" + shoplist[i].supid + "');return false;\"  title=\"" + shoplist[i].supName + "\" id=\"" + shoplist[i].supid + "_id\" style='padding-left:30px;'>" + shoplist[i].supName + "</a></li>";
			}
		}
		$(".myFavorite").html(html);
	}
}

//设高亮
function setNavLight() {
	var navLinks = [{ "link": "/dianwoba/grid/sl.jsp", "light": 1 },
		{ "link": "/search!gtSearchResult.do", "light": 1 },
		{ "link": "/dianwoba/grid/liansuo.jsp", "light": 1 },
		{ "link": "/dianwoba/grid/home!map.do", "light": 1 },
		{ "link": "/search/map.do", "light": 1 },
		{ "link": "/order/menu/", "light": 1 },
		{ "link": "/supplier/home!map.do", "light": 2 },
		{ "link": "/supplier/market!index.do", "light": 2 },
		{ "link": "/supplier/market!list.do", "light": 2 },
		{ "link": "/supplier/market!search.do", "light": 2 },
		{ "link": "/supplier/market!cart.do", "light": 2 },
		{ "link": "/express/index.html", "light": 3 }
	]
	var nowLink = window.location.href;
	$("#header-nav li").removeClass("active");
	for(var i = 0; i < navLinks.length; i++) {
		if(nowLink.indexOf(navLinks[i].link) != -1) {
			$("#header-nav li").eq(navLinks[i].light).addClass("active");
		}
	}
}
setNavLight();

//根据城市ID获取域名
function getDomain(cityId) {
	var domain = "http://www.dianwoba.com";
	if(Number(cityId) == 3) {
		domain = "http://shanghai.dianwoba.com";
	}
	return domain;
}

//设置登录返回链接
function setLoginReturnUrl() {
	if(!isLogin) {
		var retUrl = window.location.href;
		if(retUrl.indexOf("auth/login.do") == -1) {
			var url = $(".top-qqLogin").attr("href");
			$(".top-qqLogin").attr("href", url + "?url=" + retUrl);
			url = $(".top-webLogin").attr("href");
			$(".top-webLogin").attr("href", url + "?url=" + retUrl);
			url = $(".top-wxLogin").attr("href");
			$(".top-wxLogin").attr("href", url + "?url=" + retUrl);
			url = $("#login-url").attr("href");
			$("#login-url").attr("href", url + "#?" + retUrl);
		}
	}
}
setLoginReturnUrl();