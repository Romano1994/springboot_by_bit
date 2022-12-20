$(function(){
    $.ajax({
        type: "post",
        url: "/user/getUserList",
        dataType: "json",
        success: function(data){
            //alert(JSON.stringify(data));
            $.each(data, function(data, items){
                $("<tr/>").append($("<td/>",{
                    align : "center",
                    text : items.name
                })).append($("<td/>",{
                    align : "center",
                    text : items.id
                })).append($("<td/>",{
                    align : "center",
                    text : items.pwd
                })).appendTo($("#userListTable"));
            })

        },
        error: function (err) {
            console.log(err);
        }
    });
});

$("#searchBtn").click(function(){
	if($("#keyword").val() == ""){
		alert("검색어를 입력하세요")
	}else {
	    $.ajax({
        type: "post",
        url: "/user/search",
        data: {"searchOption" : $("#searchOption").val(),
        		"keyword" : $("#keyword").val()},
        dataType: "json",
        success: function(data){
			$("#userListTable tr:gt(0)").remove();
			
            $.each(data, function(data, items){
                $("<tr/>").append($("<td/>",{
                    align : "center",
                    text : items.name
                })).append($("<td/>",{
                    align : "center",
                    text : items.id
                })).append($("<td/>",{
                    align : "center",
                    text : items.pwd
                })).appendTo($("#userListTable"));
            })
        },
        error: function (request, status, error) {
                console.log("code: " + request.status)
                console.log("message: " + request.responseText)
                console.log("error: " + error);
            }
    });
	}
});