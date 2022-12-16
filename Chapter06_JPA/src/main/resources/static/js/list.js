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
        data: 'id=' + $("#keyword").val(),
        dataType: "json",
        success: function(data){
            $("<tr/>").append($("<td/>",{
                    align : "center",
                    text : data.name
                })).append($("<td/>",{
                    align : "center",
                    text : data.id
                })).append($("<td/>",{
                    align : "center",
                    text : data.pwd
                })).appendTo($("#userListTable"));
        },
        error: function (err) {
            console.log(err);
        }
    });
	}
});