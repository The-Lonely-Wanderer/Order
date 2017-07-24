 /**
 * Created with JetBrains WebStorm.
 * User: zhoulang
 * Date: 13-1-23
 * Time: 下午5:08
 * To change thisdd template use File | Settings | File Templates.
 * 使用alert()方法要引用$ 和弹出层的CSS(/css/v13/mode/alert.css)
 */

define(['jquery','/js/3.0/vendor/jquery.cookie'],function(require, exports, module){  
	var jq=require("jquery");
     require("/js/3.0/vendor/jquery.cookie")(jq)
    
	
	
	
	;var base={
		oAjax:null,		
		bFiles:[], //存储加载的文件
	    /*
	     *       tab:选项卡切换  返回当前触发的对象
	     *      参数：
	     *          @ sTabTitle:选项卡标题层  
	     *          @ sTabContent：选项卡内容层
	     *          @ sClass:选项卡标题触发时添加的class
	     *          @ evnetType:选项卡触发事件
	     *          @ bOther:是否隐藏其他
	     *          @ callback:回调函数  参数是当前触发的$对象
	    */
	    tab:function(sTabTitle,sTabContent,sClass,eventType,bOther,callback){
	        sTabTitle.bind(eventType,function(ev){
	            //阻止默认事件和冒泡
	            ev.preventDefault();
	            ev.stopPropagation();
	
	            //点击相对应的那个内容
	            var content=sTabContent.eq(sTabTitle.index($(this)));
	           
	            if(bOther){
	                sTabTitle.removeClass(sClass);
	                $(this).addClass(sClass);
	                //隐藏其他
	                sTabContent.css({'display':'none'});
	                content.css({'display':'block'});
	            }else{
	                $(this).addClass(sClass);
	                if(content.css('display') != 'block'){
	                    content.css('display','block');
	                }else{
	                    content.css('display','none');
	                    $(this).removeClass(sClass);
	                }
	            }
	
				//如果有回调函数就执行回调函数           
			   callback && callback($(this));
				//返回当前的Jquery元素
	            return $(this);
	        });
	    },
	    /*
	     * @ 将一个对象里面的熟悉和方法复制到另一个对象中 重复的属性方法将覆盖
	     * @ 第一个参数是要将属性添加到的对象，第二个是从这个对象中提取属性
	     */
	    copyObj:function( obj1 ,obj2 ){
	        for( var attr in obj2 ){
	            if( obj2.hasOwnProperty( attr )){  //判断attr是否是自有属性
	                obj1[ attr ] = obj2[ attr ];
	            }
	        }
	        return obj1;
	    },
	    //弹出框 和js原生alert一样
	    alert:function( set ){
	        var _h = $( 'html' ); //html对象
	        var _w = $( window ); //windown
	        var _b = $( 'body' ); //body对象
	        var _head = $( 'head' ); //head
	        
	        var setting={
	            width : '422px',  //弹出框的默认的宽
	            height : '89px', //弹出框的默认的高
				css:{},
	            title : '<h2 class="alert_top">温馨提示</h2>',
	            content : '<p class="alert_tips">您尚未登录，请先【登录】后开始选择兑换礼品！</p>',
	            //<span id="alert_cancelBtn" class="alert_cancelBtn">取消</span>
	            bottom : '<div class="alert_ok"><span class="alert_okBtn" id="alert_okBtn">确定</span></div>',
				alertCallback : function(){}, //弹出框弹出后的回调函数
	            okCallback : function(){ $('#alert,#alertMark').css({'display':'none'});}, //确定回调函数
	            cancelCallback : function(){ $('#alert,#alertMark').css({'display':'none'});} //取消回调函数
	        }
			
	        //将传入的参数覆盖对象
	        this.copyObj(setting,set);
	
			//创建弹窗并显示在页面
	        if(!$('#alert')[ 0 ]){ //如果页面上没有弹出框就创建弹出框和遮罩层
	            var _clientH=_w.height(); //可视区高度
	            var _clientW=_w.width();  //可视区宽度
	            var _dH=Math.max(parseInt($('body').css('height')),_clientH); //取可视区和文档之间的最高度
	            //创建并添加到文档页面
	            $('body').append($('<div id="alert" style="width:'+setting.width+'">'+setting.title+'<div class="alert_content" style=height:'+setting.height+'>'+setting.content+'</div>'+setting.bottom+'</div>'));
	            $('body').append('<div id="alertMark"></div>');
				$('#alert .alert_content').css(setting.css)
				//遮罩层高度
	            $('#alertMark').css({'height':_dH,'width':_clientW});
				setting.alertCallback && setting.alertCallback();
	        }else{  
	            //如果有就显示并替换内容
	            $('#alert .alert_content').html(setting.content).css(setting.css);
	            $('#alert,#alertMark').css('display','block');
				setting.alertCallback && setting.alertCallback();
	        }
	      
	        
	        var _t=(_clientH-parseInt($('#alert').css('height')))/2;  //弹出框的top值
	        var _l=(_clientW-parseInt($('#alert').css('width')))/2;   //弹出框的left值
	        
			//定位弹出层
	        $('#alert').css({
	            'top':_t,
	            'left':_l
	        });
			 
	        //点击确定之后的操作
	        $('#alert_okBtn').click(function(ev){
	           // 隐藏弹出层  以便后面调用
	            setting.okCallback();//执行点击后的回调函数
	        	ev.preventDefault();
				ev.stopPropagation();
			});
	
	        //点击取消
	        $('#alert_cancelBtn,#close').click(function(ev){
	              //隐藏弹出层  以便后面调用
	            setting.cancelCallback();
				ev.preventDefault();
				ev.stopPropagation();
	        });
	
	        $('#alertMark').on({
	            click:function(){
	               $('#alert').hide();
	               $(this).hide(); 
	            }
	        });
	    },
	
	    /*
	     表单验证
	     * @ 第一个参数是匹配的字符串 第二个参数是一个正则或者是一个json对象
	     * @ json对象里面有两个属性
	     * @ 第一个属性是oRel，代表要验证的那一项的字符串  如邮箱：oRel：email
	     * @ 第一个属性是errorCode，代表要显示的错误信息 可选 不写就是默认的
	     *
	     * @ demo:
	     * @  var r=fnCheckForm(str,/a/)   返回结果：{bResult:true||false},
	     * @  var r=fnCheckForm(str,{oRel:'email',errorCode:'自定义的信息'}) 返回：{bResult:true||false, sResult:'自定义的信息'}
	     * @  var r=fnCheckForm(str,{oRel:'email'}) 返回：{bResult:true||false, sResult:'默认的错误信息'}
	     * @  var r=fnCheckForm(str,{oRel:'email',errorCode:false}) 返回：{bResult:true||false}  不返回具体信息
	     *
	     * */
	    fnCheckForm:function (str,rel,success,error){
	        var aRel={
	            user:{          //用户名正则
	                oRel:/^(\w|[\u4e00-\u9fa5]){2,}$/,
	                errorMessage:'用户名格式不正确'
	            },
	            passWord:{      //密码正则
	                oRel:/^(\w){6,20}$/,
	                errorMessage:'密码格式不正确'
	            },
	            email:{         //邮箱正则
	                oRel:/^\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/,
	                errorMessage:'邮箱格式不正确'
	            },
	            nickName:{      //昵称
	                oRel:/^[A-Za-z0-9_]{2,7}|[\u4e00-\u9fa5]{2,6}$/,
	                errorMessage:'昵称格式不正确'
	            },
	            phone:{         //手机号码
	                oRel:/^1[3-8]\d{9}$/,
	                errorMessage:'手机号码格式不正确'
	            },
				phoneCode:{
					oRel:/^[0-9-()（）]{7,18}$/,
	            	//oRel:/^0\d{2,3}(-?)\d{7,}(-)?\d{0,5}$/,
					errorMessage:'电话号码格式不正确'
				},
	            qq:{           //qq号
	                oRel:/^[1-9]\d{5,12}$/,
	                errorMessage:'QQ号码格式不正确'
	            },
	            chinese:{       //中文
	                oRel:/^[\u4e00-\u9fa5]{0,}$/g,
	                errorMessage:'包含非中文字符'
	            },
	            number:{    //数字
	                oRel:/\d/g,
	                errorMessage:'不是一个有效的数字'
	            },
				address:{
					oRel:/\w|[\u4e00-\u9fa5]{5,}/,
					errorMessage:'地址格式有误'
				},
				PInteger:{	//正整数
					oRel:/^[1-9]{1,}$/,
					errorMessage:'数字输入有误'
				},
				youhui:{
					oRel:/^(\w){10}$/,
					errorMessage:'优惠券输入错误'
				}
	        };
	
	        //自定义的正则
	        if(typeof rel ==='object' && rel instanceof RegExp){  //传入的第二个参数是否是一个正则对象
	            return {
	                bResult:rel.test(str)         	//返回验证结果
	            };
	        }else{  //如果是一个对象
			
	            var orel = aRel[rel.oRel];          //返回的对应传入参数的那个对象
	            var m= orel.errorMessage;           //错误信息
			
	            if((typeof rel.errorCode)!=='undefined' && typeof rel.errorCode==='string'){  //有自定义错误信息就改变成自定义的
	              
				  m=rel.errorCode;
					
	            }else if(rel.errorCode === false){  //只返回真假 不返回具体信息
	
	                return {
	                    bResult:orel.oRel.test(str)
	                }
	            }
				
	            return {
	                bResult:orel.oRel.test(str),  //返回验证是否通过
	                sResult:m                     //返回验证未通过的错误信息
	            }
	        }
	    },
	
	    /*
	     * @ getJsonLength( json ) 计算并返回json的长度
	     * @ 参数为一个json对象
	     * @ 数组和其他类型将原样返回
	     * */
	    getJsonLength:function(json){
	        if(typeof json === 'object' && !( json instanceof Array )){
	            var num=0;
	            for(var attr in json){  
	                num++;
	            }
	            return num;
	        }else{
	            return json;
	        }
	    },
	
	
	    /*
	     @ 动态加载css ,js ,图片
	     @ oParent:是创建节点或者传入节点对象的父节点  可以是对象或者是字符串 字符串为这个对象的ID
	     @ fileMessage 是一个json对象
	     @ 属性标签名tagName:
	     @  1：字符串  要创建的标签名 (添加属性)
	     @  2：在页面已存在的DOM对象 (替换里面的属性)
	     @ 其他属性可以自定义()
	     @ callback：回调函数可选参数
	     @ 这个方法返回新建的那个元素 可已使用$对这个新建元素进行多次操作其他$方法
	     */
	    loadFile:function(oParent,fileMessage,callback,error){
	
	        //判断传入的fillMessage是否是一个对象
	        if(typeof fileMessage !=='object'){
	            return false;
	        }
	
	        //父节点如果是字符串
	        if(typeof oParent==='string'){
	            oParent=$(oParent);
	        }
	
	        //要插入的对象
	        var oTag=null;
	
	        //如果传入的是一个对象并且在DOM中存在
	        if(typeof fileMessage.tagName==='object' && fileMessage.tagName){
	            oTag = fileMessage.tagName;  //将页面中存在的这个对象赋给oTag
	        }else{  //页面上没有这个元素 就创建
	            oTag =document.createElement(fileMessage.tagName);
	        }
	
			oTag.onerror= function(){
				error(oTag);
			}
	        //如果有属性就加上属性
	        if(base.getJsonLength(fileMessage)>1){
	            for(var attr in fileMessage){
	                if(attr=='tagName'){continue;}
	                oTag[attr]=fileMessage[attr];
	            }
	        }
	
	        // appendChild(); 
	        //当向父元素插入一个在页面中已存在的节点对象 是替换这个节点对象而非另外插入这个对象
	        oParent.appendChild(oTag);
	
			
	        //对象加载完成执行回调函数
	        if(oTag.readyState){
	           oTag.onreadystatechange = function(){
	                if((oTag.readyState=='complete'|| oTag.readyState=='loaded')){
	                    oTag.onreadystatechange=null;  //防止调用两次
	                    callback && callback( oTag );
	                }
	            } 
	        }else{
	            oTag.onload=function(){ //非IE
					oTag.onload = null;
	                callback && callback( oTag );
	            }
	        }
	        //返回这个新对象
	        return oTag;
	    },
	
		/*
		*	动态加载多个JS文件
		*   @	aFiles:一个存储文件地址的数组	
		*	@   callback: 回调函数
		*/
	    loadFiles:function(aFiles,callback){
	        if(!(aFiles instanceof Array)) return aFiles;
			var bOver=false;
	        var j=0;
	        var len=aFiles.length;
	        var _h=document.getElementsByTagName('head')[0];
			
	        for(var i=0;i<len;i++){
	            base.loadFile(_h,{'tagName':'script','src':aFiles[i]},function(){j++;})
	        }
	        //监听是否加载完成  完成后执行回调函数
	        var timer=setInterval(function(){
	            if(j===len){
	                clearInterval(timer);
	                callback && callback();
					return bOver;
	            }
	        },20);
	    },
	
	    /*
			Layout:
				布局转化 将页面中的其他定位转换成绝对定位 即方便布局又方便在JS中操作
				参数：
					obj :  
	     */
	    Layout:function( obj ){
	        var leng=obj.length;
	        var position = [];
			
	        //对元素在页面中进行定位
	        for(var i=0;i<leng;i++){
	            position.push({
	                left:$(obj[i]).css('left'),
	                top:$(obj[i]).css('top')
	            })
				$(obj[i]).css({'left':obj[i].offsetLeft,top:obj[i].offsetTop});
	        }
	        //设置元素的定位方式并且去掉margin值
			$(obj).css({'position':'absolute','margin':0})
	        return position;
	    },
	
	    /*
	     *  @ 跳转到指定的地址
	     *  @ 没有参数就跳转到首页
	     *  @ 有参数就跳转到指定的页面
	     * */
	    goToLocaltion:function(addres){
	        if(typeof address==='undefined'){
	            window.location.href='index.html';
	        }else{
	           	window.location.href=addres;
	        }
	    },
		
	    /*
	        当数组的最后一个是空的就删除数组最后一个逗号，
			这个方法只能是一维数组
			参数为：
				arr: 一个一维数组
			返回处理后的数组
		*/
	    delArrayLastFh:function(arr){
	       if(typeof arr[ arr.length-1 ] === 'undefined'){
	            arr.pop();
	        }
	        return arr;
	    },
		
		/*
		 *	输入框获取光标或失去光标事件
		 *	@ setting:一组参数对象
				obj:null,                   //触发的jQuery对象  
		        tip:'请输入你要查询的地址', //提示文字 可以用函数的返回值 参数是当前jQuery对象
		        focusColor:'#000',          //获取光标文本框中字体的颜色
		        blurColor:'#999',           //失去光标文本框中字体的颜色
		        focusFn:function(){},       //获取光标的回调函数
		        blurFn:function(){}         //失去光标的回调函数
				
		 *	@ bUserDefined:是否用自定义方法做判断
		 *	
		 */
		FormTextCursor:function(setting,bUserDefined){
			var set={
		        obj:null,                   //触发的$对象  
		        tip:'请输入你要查询的地址',       //提示文字
		        focusColor:'#000',          //获取光标文本框中字体的颜色
		        blurColor:'#999',           //失去光标文本框中字体的颜色
		        focusFn:function(){},       //获取光标的回调函数
		        blurFn:function(){}         //失去光标的回调函数
		    }
		
			
		    //将传入的参数赋给局部变量
		    for(var attr in setting){
		        if(setting.hasOwnProperty(attr)){
					if(typeof setting[attr] === 'function' && attr ==='tip'){  
						set[attr] = (setting[attr])(set.obj);
					}else{
						set[attr] = setting[attr];
					}
				}
		    }
		    //触发获取光标事件
		    set.obj.unbind().bind({
	            'focus':function( ev ){
					ev.stopPropagation();
	    	    	if(bUserDefined){
	    	    		set.focusFn( $(this) ,$(this).val() );
	    	    		return ;
	    	    	}
					
	    	        $(this).css('color',set.focusColor);
					
	    	        if( $(this).val() == set.tip ){
	                    $(this).val( '' );
	    	        }
					set.focusFn($(this) ,$(this).val()); 
		       },
	           'blur':function( ev ){
				   	ev.stopPropagation();
					var s = $(this).val();
	                if( bUserDefined ){
	                    set.blurFn($(this) ,$(this).val());
	                    return ;
	                }
					set.blurFn($(this) ,$(this).val());
	                if($(this).val() == '' ){ 
	                    $(this).val( set.tip ).css('color',set.blurColor);
	                }else{
	                    $(this).css('color',set.focusColor);
	                } 
	            }
	        });
	
		},
	    /*
			获取地址栏上面的参数
				返回一个 参数对象 没有值的返回false
		*/
		getArguments:function(){
			var json={};
			var sLocaltion = location.search.substring(1);
			var arrArguments =  sLocaltion.split('&') ;
			
			for(var i=arrArguments.length;i--;){
				var a = arrArguments[i].split('=');
				if($.trim( a[1] ).length > 0){
					json[ a[ 0 ] ] = unescape( a[1] );
				}else{
					json[ a[0] ] = false;	
				}
			}
			return json;
		},
		/*
			输入框连续输入事件
			参数:
				obj：触发对象  DOM 元素
				fn ：触发执行的函数
		*/
		oninput:function( obj ,fn ){
			for(var i = 0; i < obj.length; i++){
				if(obj[i].addEventListener){
					obj[i].addEventListener( 'input' ,function( ev ){
						fn(this,ev)
					} ,false);	
				}else{
					obj[i].onpropertychange = function(){	
						if(!$.trim( this.value ) || this.value == this.getAttribute('tip') ){return ;}
						fn(this ,event);	
					}
						
				}
			}
		},
		
		/*
		 * 检测一个地址是否能在百度地图请求中获取到
		 *	@ setting:一组参数对象 
				cityId :城市ID (number),              
		        address:地址(string), 				
		 *	@ success:判断成功后执行的函数 ,参数为获取得到的经纬度对象
		 *	@ error: 百度地图获取不到经纬度执行的函数
		 *	
			Demo:
				base.isGetPoint({cityId:1,address:'文三路'},function(point){  
					//成功后要执行的操作  参数point 是取到的百度 point 对象 可以在后面直接用 
				},function(){
					//失败后要执行的参数
				})
			
		*/
		isGetPoint : function( setting ,success ,error ){
			
			if(base.oAjax){
				base.oAjax.abort();
			}
			var defult = {
				cityId : 0,
				address : ''
			}
			
			this.copyObj( defult ,setting ); //auth/register!getAddrLnglat.do
			
			base.oAjax = $.ajax({
				url:"/common!findAddrLnglat.do",
				data:{
					position : defult.address,
					cityId : defult.cityId,
					now : +new Date()
				},
				timeout : 10000,
				dataType : "json", 
				success : function( data ){
					//能获取到 
					if( data.status == 1 && data.result.lng ){
						success( data.result ,$(this));
						return true;
					}else{
						error();
						return false;
					}
				},
				error : function(Xhr ,textStatus ,errorThrow){
					if(textStatus === 'timeout'){
						//alert('网络超时');
					}else{
						//alert('error');
					}
				}
			});
		},
		position:function( sObj ,eObj ){
			var json = {
				obj:sObj,
				top: 0 ,
				left: 0
			}
			
			while(sObj !== eObj){
				json.top += sObj.offsetTop;
				json.left += sObj.offsetLeft;
				json.obj = sObj = sObj.offsetParent;
			}
			return json;
		},
		
		/*登录框*/
		loginBox:function(lastUrl){
			var url = window.location.href;
			var registUrl = '/auth/register.do';
			if(lastUrl){
				registUrl += "?lastUrl="+lastUrl;
			}
			var sLoginBox = '<div class="login-pop"><div class="title"><h2>个人用户登录</h2><span class="closed" id="loginClose"></span></div><!--登录信息--><div class="login-main"><!--个人登录--><div class="userLogin"><div class="login-item"><label>帐号</label><span class="tip"></span><div><input type="text" id="Person_user" value="请输入邮箱/手机号" /></div></div><div class="login-item"><label>密码</label><span class="tip"></span><div><input type="password" id="Person_pass" /></div></div><div class="passHandel"><i class="checkBox" id="Person_keepLogin">记住密码</i><a href="/auth/reset_password_01.do" class="forgetPass">忘记密码？</a></div><div class="btnBg btnStyle1" id="Person_loginButton">登录<i class="btnRightBg"></i></div><!--第三方登录--><div class="third-party-login"><p>使用合作网站账号登录点我吧：</p><div class="third-partyWarp"><a href="/auth/login!qqAuth.do?url='+url+'"><img src="/images/web/3.0/qqlogin.png"/></a><a href="/auth/login!sinaAuth.do?url='+url+'"><img src="/images/web/3.0/sinalogin.png"/></a><a href="/auth/login!weixinAuth.do?url='+url+'"><img src="/images/web/3.0/wxlogin2.png"/></a></div></div></div><!--没有注册提示注册m--><p class="tipAuth">尚未注册？<a href="'+registUrl+'">马上注册</a></p></div>'
			base.alert({
				width:'',  //弹出框的默认的宽
				height:'', //弹出框的默认的高	<li>团体登录</li>
				title:'',
				content:sLoginBox,
				bottom:'',
				alertCallback:function(){
					if($.cookie('dwb_Pemail')){
						$('#Person_user').val($.cookie('dwb_Pemail'));
						$('#Person_pass').val($.cookie('dwb_Ppwd'));
						$('#Person_keepLogin').attr('checked','checked');
					}
					
					var oUserInput=$('.login-pop input:text');	 //用户名输入框
					var oPassInput=$('.pass');	 //密码输入框
					var relChinese=/[\u4e00-\u9fa5]/;  //匹配中文
					var relW=/\w/;
					var oKeepLogin=$('#keep_login');  //记住登录
					//var relEmali = /^([a-zA-Z0-9_]+[\.a-zA-Z0-9_-]*){1,}@([a-zA-Z0-9-]+\.){1,}[A-Za-z0-9]{2,4}$/;	//邮箱正则
					var relEmali = /^([a-zA-Z0-9_]+[\.a-zA-Z0-9_-]*){1,}@([a-zA-Z0-9-]+\.){1,}([A-Za-z0-9]{1,4}){1,}$/;	
					var relPhone=/^1+(3|4|5|8)+\d{9}$/; //手机号正则
					var relUser=/^[a-zA-Z_]{3,16}$/;  //用户名正则
					var tips = $('.userLogin .tip');
					
					
					
					//密码框阻止空格
					oPassInput.keydown(function( ev ){
						if(ev.keyCode == 32){
							return false;
						}
					});
					//点击记住密码
					$('#Person_keepLogin').on({
						click:function(){
							if($(this).hasClass('active')){
								$(this).removeClass('active');	
							}else{
								$(this).addClass('active');	
							}	
						}	
					});
						
					//个人登录函数
					function personLogin(){
						var $this=$('#Person_loginButton');
						var $Person_user=$('#Person_user').val(); //个人用户名
						var $Person_pass=$('#Person_pass').val(); //个人密码
						$this.html('登录中...<i class="btnRightBg"></i>').attr('disabled','true');
						
						//不合法的用户名
						if(!relEmali.test($Person_user) && !relPhone.test($Person_user) && !relUser.test($Person_user)){
							tips.eq(0).attr('class','tip error').show().html('用户名格式有误');
							$this.html('登&nbsp;&nbsp;录<i class="btnRightBg"></i>').removeAttr('disabled');
							return ;
						}
				
						var patrn = /^(\w){6,20}$/;
						if (!patrn.exec($Person_pass)) { // 不正确的输入格式
							tips.eq(1).attr('class','tip error').show().html('密码输入错误');
							$this.html('登&nbsp;&nbsp;录<i class="btnRightBg"></i>').removeAttr('disabled');
							return;
						}
						$.ajax({
							url:'/auth/login!asynLogin.do',
							data:{
								userName:$Person_user ,
								passWord:$Person_pass,
								isAutoLogin:$("#Person_keepLogin").hasClass("active")?1:0,
								d:+new Date()
							},
							type:'POST',
							dataType:'json',
							success:function(data){
								if(data.status!=1){
									tips.eq(1).attr('class','tip error').show().html('系统登录错误');
									return;
								}
								var r = data.result;
								if(r.loginStatus == '1'){  //登录成功
									window.location.reload();
									/*var login_cityid = r.result.cityId;
									//登录绑定默认地址所在城市ID
									//$.cookie('dwb_cityid', login_cityid, {expires: 7, path: '/'});
									//记住密码
									if($("#Person_keepLogin").hasClass("active")){
										$.cookie('dwb_Pemail', $Person_user, {expires: 7, path: '/'});
										$.cookie('dwb_Ppwd', '', {expires: 7, path: '/'});
									}
									//重置配送费
									resetPsfee();*/
								} else if(r.loginStatus==2){  //
									tips.eq(0).attr('class','tip error').show().html('没有该用户名');
									$('#Person_user').focus();
								} else if (r.loginStatus == 3) {  //密码错误
									tips.eq(1).attr('class','tip error').show().html('密码错误');
									$('#Person_pass').focus();
								} else{
									tips.eq(1).attr('class','tip error').show().html('登录失败');
								}
								$this.html("登&nbsp;&nbsp;录<i class='btnRightBg'></i>").removeAttr('disabled');
							},
							error:function(){
								tips.eq(1).attr('class','tip error').show().html('系统登录错误');
							}
						});
					}
					//个人登录
					$('#Person_loginButton').bind('click',personLogin);
					$('#Person_pass').bind('keydown',function(ev){
						if(ev.keyCode==13){
							personLogin();
						}
					});
	
					for(var i=oUserInput.length; i--;){
						base.FormTextCursor({
							obj:$(oUserInput[i]),                       //触发对象
							tip:$(oUserInput[i]).val(),					//提示文字
							focusColor:'#b6b6b6',                       //获取光标文本框中字体的颜色
							blurColor:'#666',                     		//失去光标文本框中字体的颜色
							focusFn:function( $obj ){
								$obj.nextAll('.error').hide();
							},                    						//获取光标的回调函数
							blurFn:function(){}                      	//失去光标的回调函数
						})
					}
					
					//输入框事件
					$('#Person_user').on({
						focus:function(){
							
						},
						blur:function(){
							var sValue = $(this).val();
							var next = $(this).closest('.login-item').find('.tip');
							if(!relEmali.test(sValue) && !(relPhone.test(sValue)) && !(relUser.test(sValue))){
								next.attr('class','tip error').html('帐号格式有误').show();
									
							}else{
								next.attr('class','tip right').html('').show();
							}
						}
					});
				},
				okCallback:function(){} //确定回调函数
			});
			$('#loginClose').on({
				'click':function( ev ){
					$('#alert,#alertMark').remove();
				}
			})
		}
	}
	exports.base = base;
});





