// $("#id").focusout(function () {
//     $.ajax({
//         url: "/chapter06_SpringWebMaven/user/findUser",
//         type: "post",
//         data: 'id=' + $(id).val(),
//         dataType: 'json',
//         success: function (data) {
//             if (data == "") {
//                 $("#resultDiv").val("찾고자 하는 아이디가 없습니다");
//             } else {
//                 $("<table/>").
//                     append($("<th>이름</th>")).
//                     append($("<th>아이디</th>")).
//                     append($("<th>비밀번호</th>")).
//                     append($("<td/>")).
//                     append($("<input type='text'>", data.name)).
//                     append($("<td/>")).
//                     append($("<input type='text'>", data.id)).
//                     append($("<td><input type='text'></td>"));
//             }
//         }
//     });
// });

$(function () {
    $("#updateDiv").hide();

    $("#searchIdBtn").click(function () {
        $("#resultDiv").empty();

        $.ajax({
            url: "/user/getUser",
            type: 'post',
            data: 'id=' + $("#searchId").val(),
            // dataType: JSON,
            success: function (data) { 
                // alert(JSON.stringify(data));
                if(data == null){
                    $("#updateDiv").hide();
                    $("#resultDiv").text("찾고자 하는 아이디가 없습니다");
                } else {
                    $("#updateDiv").show();
                    $("#name").val(data.name);
                    $("#id").val(data.id);
                }
            },
            error: function (request, status, error) {
                console.log("code: " + request.status)
                console.log("message: " + request.responseText)
                console.log("error: " + error);
            }
        }); // ajax
    }); //click
});

$("#resetBtn").click(function(){

    $("seachBtn").trigger("click"); //강제 이벤트 발생
});

$("#updateBtn").click(function(){
	  $("#nameDiv").empty();
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
	   }else {
		$.ajax({
			type: 'post',
			url:  "/user/update",
			data: $("#updateForm").serialize(),
			success: function(){
				alert("수정 완료");
		        location.href="/user/list";
		        },
			error: function(err){
				console.log(err);
				}
		});
	}
});