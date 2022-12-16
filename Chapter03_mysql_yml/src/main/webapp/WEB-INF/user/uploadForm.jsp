<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style type="text/css">
	#img{
		visibility: hidden;
	}
</style>
</head>
<body>

<!-- 단순  submit -->
<%-- 
<form action="/chapter06_SpringWebMaven/user/upload" method="post" enctype="multipart/form-data">
<!-- 	<input type="file" name="img" ><br>
	<input type="file" name="img" ><br> -->
	<!-- <input type="file" name="img[]" multiple="multiple"> -->
	
	<br><br>
	여러개파일 선택<br>
	<i class="fa-solid fa-camera" id="camera"></i>
	<input type="file" name="img[]" multiple="multiple" id="uploadBtn"><br>
	<br>
	<input type="submit" id="upload" value="이미지 등록">
</form>
--%>
<!-- ajax 통신 -->

<form action="" id="uploadForm">
	<div id="imgDiv"></div>
	<!-- 업로드 버튼을 누르기 전에 카메아 아이콘을 통해서 섵낵한 이미지가 맞는지 확인하기 위해서 이미지를 보이게 한다  -->
	<img id="showImg" width="300" height="300">
	<input type="file" name="img" id="img">
	<br><br>
	<i class="fa-solid fa-camera" id="camera"></i><br>
	<input type="button" id="uploadBtn" value="이미지 등록">
</form>
	<script src="https://code.jquery.com/jquery-latest.min.js"></script>
    <script src="https://kit.fontawesome.com/1f61694686.js" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="../js/upload.js"></script>
    <script type="text/javascript">
    	$("#camera").click(function() {
			$("#img").trigger("click");
		});
    	
    	$("#img").on("change", function(){
    		readURL(this);
    	});
    	function readURL(input){
    		if(input.files[0]){
    			var reader = new FileReader();
    			
    			reader.onload = function(e){ //e.target 이벤트가 발생하는 요소를 반환해준다
    				$("#showImg").attr('src', e.target.result)
    			};
    			reader.readAsDataURL(input.files[0])
    		};
  	};
  	


    </script>
</body>
</html>

<!-- FileReader는 type이 file인 input 태그 또는 API 요청과 같은 인터페이스를 통해 File 또는 Blob 객체를 편리하게 처리할수있는 방법을 제공하는 객체이며
abort, load, error와 같은 이벤트에서 발생한프로세스를 처리하는데 주로 사용되며,  File 또는 Blob 객체를 읽어서 result 속성에 저장한다.

FileReader도 비동기로동작한다.

FileReader.onload()
load 이벤트의 핸들러. 이 이벤트는 읽기 동작이 성공적으로 완료되었을 때마다 발생한다. -->