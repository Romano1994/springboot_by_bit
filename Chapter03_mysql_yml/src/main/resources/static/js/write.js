$("#writeBtn").click(function () {
  $("#nameDiv").empty();
  $("#idDiv").empty();
  $("#pwdDiv").empty();
  if ($("#name").val() == "") {
    $("#nameDiv").text("이름을 입력하세요");
    $("#name").focus();
  } else if ($("#id").val() == "") {
    $("#idDiv").text("이름을 입력하세요");
    $("#id").focus();
  } else if ($("#pwd").val() == "") {
    $("#pwdDiv").text("이름을 입력하세요");
    $("#pwd").focus();
  } else {
    $.ajax({
      url: "/user/write",
      type: "post",
      data: $("#writeForm").serialize(),
      success: function () {
        alert("가입 완료");
        location.href="/user/list";
      },
      error: function (err) {
        console.log(err);
      }
    })
  }
});

$("#id").focusout(function(){
  $('#idDiv').empty();
	if($('#id').val() == ''){
		$('#idDiv').text('먼저 아이디를 입력하세요');
	} else {
		$.ajax({
			url: "/user/checkId", //서버 주소
			type: 'post', //get or post
			data: 'id='+$(id).val(), //서버로 보낼 데이터
			dataType: 'text', //서버로 부터 받은 데이터 자료형 / text, html, xml, json
			success: function(data){
				if(data == "exist"){
          $("#idDiv").text("사용 불가능");
        } else if(data == "non_exist"){
          $("#idDiv").text("사용 가능");
        }
			},
			error: function(request, status, error){
        console.log("code: " + request.status)
        console.log("message: " + request.responseText)
        console.log("error: " + error);
      }
		}); //$.ajax
	}
});
//$("#id").focusout(function(){
//    $.ajax({
//        url: "/chapter06_SpringWebMaven/user/checkId",
//        type: "post",
//        data: "id="+$(id).val(),
//        dataType: "text",
//        success: function () {
//          alert("도착")
//        },
//        error: function (err) {
//          console.log(err);
//        }
//      })
//});



//
//$(function () {
//  $("#name").focusout(function () {
//    $("#nameDiv").empty();
//    $("#idDiv").empty();
//    $("#pwdDiv").empty();
//    if ($("#name").val() == "") {
//      $("#nameDiv").text("이름을 입력하세요");
//      $("#name").focus();
//    }
//  });
//  $("#id").focusout(function () {
//    $("#nameDiv").empty();
//    $("#idDiv").empty();
//    $("#pwdDiv").empty();
//    if ($("#id").val() == "") {
//      $("#idDiv").text("아이디를 입력하세요");
//      $("#id").focus();
//    }
//  });
//  $("#pwd").focusout(function () {
//    $("#nameDiv").empty();
//    $("#idDiv").empty();
//    $("#pwdDiv").empty();
//    if ($("#pwd").val() == "") {
//      $("#pwdDiv").text("비밀번호를 입력하세요");
//      $("#pwd").focus();
//    }
//  });
//});