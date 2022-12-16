$(function () {

    $("#searchIdBtn").click(function () {
        $("#resultDiv").empty();

        $.ajax({
            url: "/user/getUser",
            type: 'post',
            data: 'id=' + $("#searchId").val(),
            // dataType: JSON,
            success: function (data) { 
                // alert(JSON.stringify(data));
                if(data == ""){
                    $("#resultDiv").text("찾고자 하는 아이디가 없습니다");
                } else {
                    if(confirm("삭제하시겠습니까")){
                        $.ajax({
                            type: "post",
                            url: "/user/delete",
                            data: "id="+$("#searchId").val(),
                            success: function(){
                                location.href = "/user/list"
                            },
                            error: function(err){
                                console.log(err);
                            }
                        })
                    }
                } //else
            },
            error: function (request, status, error) {
                console.log("code: " + request.status)
                console.log("message: " + request.responseText)
                console.log("error: " + error);
            }
        }); // ajax
    }); //click
});