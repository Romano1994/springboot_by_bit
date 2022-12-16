<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style type="text/css">
#updatForm {
	color: red;
	font-size: 8pt;
	font-weight: bold;
}
</style>
</head>
<body>
	<h3>
		<img alt="" src="../img/apeach.png" style="width: 200px"
			onclick="location.href='/'">업데이트
	</h3>
	
		수정할 아이디 입력 <input type="text" name="searchId" id="searchId">
		<input type="button" value="검색" id="searchIdBtn">
	<div id="resultDiv">
	</div>
	<hr>
	<div id="updateDiv">
		<form action="" id="updateForm">
			<table>
				<tr>
					<th>이름</th>
					<td><input type="text" name="name" id="name">
						<div id="nameDiv"></div></td>
				</tr>
				<tr>
					<th>아이디</th>
					<td><input type="text" name="id" id="id" readonly="readonly">
					</td>
				</tr>
				<tr>
					<th>비밀번호</th>
					<td><input type="password" name="pwd" id="pwd">
						<div id="pwdDiv"></div></td>
				</tr>
				<tr>
					<td colspan="2"><input type="button" value="수정" id="updateBtn">
						<input type="button" value="취소" id="resetBtn"></td>
				</tr>
			</table>
		</form>
	</div>
	<script
		src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script type="text/javascript" src="../js/update.js"></script> 
</body>
</html>