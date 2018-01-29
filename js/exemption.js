function goodlist(){
	$.ajax({
		type:"get",
		url:"getGoodsList.php",
		success:function(date){
//			alert(date);
			showdate(date);
		}
	});
}
function showdate(date){
	
}
$(function(){
	goodlist();
});
