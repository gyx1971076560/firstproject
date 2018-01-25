$(function(){
	$("#enters").click(function(){
		login();
	});
})
//登录
function login(){
	$.ajax({
           type:"POST",
           url:"logincheck02.php",
           data:{
              "username":$("#form_username1").val(),
              "userpass":$("#form_userpass1").val()
           },
            success:function (t) {
                if(t=="1"){
                    //保存cookie
                    location.href="index.html";
                }else{
                $("#errorMsg").html("用户名或者密码错误");
					
                }
            }
        });
}
//注册
var usernameExists = true;
	$("#form_username1").blur(function () {
            $.ajax({
                url:"usercheck.php",
                method:"get",
                data:{"username":$("#form_username1").val()},
                success:function (data) {
                    if(data=="0"){
                        usernameExists = false;
                        $("#usernameMsg").html("该用户名可用");
                    }else{
                        usernameExists = true;
                        $("#usernameMsg").html("该用户名已存在");
                    }
                }
            });
        });

    $("#content_form").submit(function () {
        if(usernameExists){
            alert("亲，用户名已经存在");
            return false;//阻止浏览器的默认行为。
        }
    });