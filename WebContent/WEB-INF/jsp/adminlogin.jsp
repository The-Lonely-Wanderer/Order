<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Login Page</title>
<style type="text/css">

@keyframes f{
	0%{transform:scale(0.2);}
	99%{transform:scale(1.01);}
	100%{transform:scale(1);}
}

body {
	background: rgba(0, 0, 0, 0.8);
}

* {
	margin: 0px;
	padding: 0px;
}

#login {
	position: relative;
	margin: 100px auto; 
	width : 500px;
	height: 600px;
	background: rgba(255, 255, 255, 0.9);
	border-radius: 10px;
	width: 500px;
}

#banner {
	position: absolute;
	left: 20%;
	top: 15%;
}

p {
	margin-top: 20px;
	font-size : 25px;
	font-family: microsoft yahei;
	font-size: 25px;
}

#logininp, #registr {
	font-size: 30px;
	color:rgba(0, 0, 0, 0.5);
	width: 300px;
	height: 40px;
	background: rgba(0, 0, 0, 0);
	outline: none;
	border: none;
	border-bottom: 1px dashed rgba(0, 0, 0, 0.5);
}

input {
	margin-top: 30px;
}

#loginbut {
	width: 300px;
	height: 50px;
	border: none;
	outline: none;
	cursor: pointer;
	font-size:20px;
}

#loginbut:hover {
	background: rgba(0, 0, 0, 0);
	border: 1px solid rgba(0, 0, 0, 0.5);
}
</style>
</head>
<body>
	<form id="login" action="loginto.action" method="post">
		<div id="banner">
		<p>用戶名:</p><input id="logininp" type="text" name="adminname" placeholder="用戶名">
		<p>密碼:</p><input id="registr" type="password" name="password" placeholder="密碼"><br/>
		<input id="loginbut" type="submit" value="Login"/><br/>
		<input id="loginbut" type="button" value="Back" onclick="javascript:window.location='index.jsp'">
		<p style="color:red;">${message}</p>
		</div>
	</form>
	
	<script type="text/javascript">
	window.onload=function(){
		var login=document.getElementById("login");
		login.style.cssText="animation: f 0.6s";

	}
	</script>
</body>
</html>