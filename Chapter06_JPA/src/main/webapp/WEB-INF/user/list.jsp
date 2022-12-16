<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h3>
	<img alt="" src="../img/apeach.png" style="width: 200px; cursor:pointer;" onclick="location.href='/'">회원가입
</h3>
<hr>
<table border="1" id="userListTable">
	<tr>
		<th>이름</th>
		<th>아이디</th>
		<th>비밀번호</th>
	</tr>
	
</table>
<br/><br/>
<div>
	<form id="searchForm">
		<select id="searchOption">
			<option value="name">이름</option>
			<option value="id">아이디</option>
		</select>
		<input type="text" id="keyword">
		<input type="button" id="searchBtn" value="검색">
	</form>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script type="text/javascript" src="../js/list.js"></script>
</body>
</html>