<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style type="text/css">
	#writeForm{
		color: red;
		font-size: 8pt;
		font-weight: bold; 
	}
</style>
</head>
<body>
<h3>
	<img alt="" src="../img/apeach.png" style="width: 200px" onclick="location.href='/'">회원가입
</h3>
<hr>
	<form action="/write" id="writeForm">
		<table>
			<tr>
				<th>이름</th>
				<td>
					<input type="text" name="name" id="name">
					<div id="nameDiv"></div>
				</td>
			</tr>
			<tr>
				<th>아이디</th>
				<td>
					<input type="text" name="id" id="id">
					<div id="idDiv"></div>
				</td>
			</tr>
			<tr>
				<th>비밀번호</th>
				<td>
					<input type="password" name="pwd" id="pwd">
					<div id="pwdDiv"></div></td>
			</tr>
			<tr>
				<td colspan="2">
					<input type="button" value="등록" id="writeBtn">
					<input type="reset" value="취소">
				</td>
			</tr>
		</table>
	</form>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script type="text/javascript" src="../js/write.js"></script>
</body>
</html>