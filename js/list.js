function goodlist(){
	$.ajax({
		type:"get",
		url:"getGoodsList.php",
		success:function(date){
			showdate(date);
		},dataType:"json"
	});
}
function showdate(date){
//	date=JSON.parse(date);
	for(let i=0;i<date.length;i++){
	var $liDom=$("<li class='list_new_1'></li>");
	$(".content_list_new").append($liDom);
	var $divDom=$("<div class='li_body'></div>");
	$liDom.append($divDom);
	
	$divDom.append("<div class='li_body_tit'><div></div></div>");
	
	$divDom.append("<a class='li_body_img'><img src="+date[i].goodsImg+" /></a>");
	
	$divDom.append("<div class='li_body_meg'><a>"+date[i].goodsName+"</a></div>");
	
	$divDom.append("<div class='li_body_size'><lable>￥</lable><span>"+date[i].goodsPrice+"</span><i>"+date[i].goodsDesc+"</i></div>");
	
	$divDom.append("<div class='li_body_num'>"+date[i].goodsCount+"</div>");
	$divDom.append("<div class='li_body_go'><a target='_blank' title='去看看'></a></div>");
	$divDom.append("<p class='search_list_tags'><span>清洁</span><span>喷雾</span><span>香氛</span><span>除臭</span></p>");
	}

}



$(function(){
	for(var i=0;i<10;i++){
		goodlist();
	}
	
	
});
