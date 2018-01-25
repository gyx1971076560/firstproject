//导航栏的下拉菜单
$(".textfirst").mouseenter(function(){
	$(".pushDoll").slideDown();
	$("#pushDold").css({background:"#fff"});
	$(this).stop();
});
$(".textfirst").mouseleave(function(){
	$(".pushDoll").slideUp();
	$("#pushDold").css({"background":"#f2f2f2"});
});
$(".textfirst1").mouseenter(function(){
	$(".pushDolls").slideDown();
	$("#pushDolds").css({background:"#fff"});
	$(this).stop();
});
$(".textfirst1").mouseleave(function(){
	$(".pushDolls").slideUp();
	$("#pushDolds").css({"background":"#f2f2f2"});
});

//购物车的下拉效果
$(".frames").mouseenter(function(){
	setTimeout(function() {
		$(".shoppingBox").css({"display":"block","box-shadow":"0 0 2px rgba(0, 0, 0, 0.2)","border":"1px solid #e5e5e5","border-top":"0"});
		$(".shopping").css({"box-shadow":"none","border-bottom":"0"});
		$(".frames span").css({"background":"#fff"});
		$(".frames").css({"border-bottom":"0"});
	}, 1000);
	
});
$(".frames").mouseleave(function(){
	$(".shoppingBox").css({"display":"none","border-top":"none"});
	$(".shopping").css({"box-shadow":"0 0 2px rgba(0, 0, 0, 0.2)","border": "1px solid #e5e5e5"});
	$(".frames span").css({"background":"#f8f8f8"});
	$(".frames").css({"border-bottom":"1px solid #e5e5e5"});
	
});
//右侧边栏的登录
$(".topFirstGird").mouseenter(function(){
	setTimeout(function() {
	$(".twoRightSidebar").css({"display":"block"});
	}, 200);
});
$(".topFirstGird").mouseleave(function(){
	timers=setTimeout(function() {
	$(".twoRightSidebar").css({"display":"none"});
	}, 50);
});
$(".twoRightSidebar").mouseenter(function(){
	clearTimeout(timers);
});
$(".twoRightSidebar").mouseleave(function(){
	$(".twoRightSidebar").css({"display":"none"});
});
//$(function(){
//	 var tops = $(".topFirstGird").top;
//	$(".twoRightSidebar").css({"top":tops});
//
//});
$(".twoRSidebara").click(function(){
	$(".twoRightSidebar").css({"display":"none"});
});

$(".topThreeGird").mouseenter(function(){
	$(".threeDiv").css({"visibility": "initial"});
	$(".threeDiv").animate({"left":"-92"},200);
});
$(".topThreeGird").mouseleave(function(){
	$(".threeDiv").css({"visibility": "hidden"});
	$(".threeDiv").animate({"left":"-112"},200);
});
$(".topFourGird").mouseenter(function(){
	$(".fourDiv").css({"visibility": "initial"});
	$(".fourDiv").animate({"left":"-92"},200);
});
$(".topFourGird").mouseleave(function(){
	$(".fourDiv").css({"visibility": "hidden"});
	$(".fourDiv").animate({"left":"-112"},200);
});
$(".topFiveGird").mouseenter(function(){
	$(".fiveDiv").css({"visibility": "initial"});
	$(".fiveDiv").animate({"left":"-92"},200);
});
$(".topFiveGird").mouseleave(function(){
	$(".fiveDiv").css({"visibility": "hidden"});
	$(".fiveDiv").animate({"left":"-112"},200);
});
$(".twoBottomSidebar").mouseenter(function(){
	$(".twoBottomDiv").css({"visibility": "initial"});
	$(".twoBottomDiv").animate({"left":"-92"},200);
});
$(".twoBottomSidebar").mouseleave(function(){
	$(".twoBottomDiv").css({"visibility": "hidden"});
	$(".twoBottomDiv").animate({"left":"-112"},200);
});
$(".threeBottomSidebar").mouseenter(function(){
	$(".threeBottomDiv").css({"visibility": "initial"});
	$(".threeBottomDiv").animate({"left":"-92"},200);
});
$(".threeBottomSidebar").mouseleave(function(){
	$(".threeBottomDiv").css({"visibility": "hidden"});
	$(".threeBottomDiv").animate({"left":"-112"},200);
});

$(".firstBottomSidebar").mouseenter(function(){
	$(".firstBottomDiv").css({"display":"block"});
});
$(".firstBottomSidebar").mouseleave(function(){
	$(".firstBottomDiv").css({"display":"none"});
});

	//$("#pushDold").mouseenter(function(){
	//	$(this).next().toggle(400);
	//	$(this).css({background:"#fff"});
	//});
	//$(".pushDoll").mouseenter(function(){
	//	$(this).css({display:"block"});
	//});
	////$("#pushDold").mouseleave(function(){
	////	$(this).next().toggle(400);
	////	$(this).css({"background":"#f2f2f2"});
	////});
	//$(".pushDoll").mouseleave(function(){
	//	$("#pushDold").css({"background":"#f2f2f2"});
	//	$(this).toggle(400);
	//});
	
	//$(".topFirstGird").hover(function(){
	//	$(".twoRightSidebar").toggle(100);
	//},function(){
	//	$(".twoRightSidebar").toggle(100);
	//});
	//$("#pushDold").bind("mouseenter",function(){
	//	$(this).next().slideDown()
	//	$(this).css({background:"#fff"});
	//});
	//$("#pushDold").bind("mouseleave",function(){
	//	$(this).next().slideUp()
	//	$(this).css({background:"#f2f2f2"});
	//});
	//$(".pushDoll").hover(
	//  	function(){
	//  		$(this).css({"display":"block"});
	//  	},
	//  	function(){
	//  		
	//  		$(this).slideUp();
	//  	}
	//);
	//$("#pushDold").hover(
	//  	function(){
	//  		$(this).next().slideDown();
	//  	},
	//  	function(){
	//  		
	//  		$(this).next().slideUp();
	//  	}
	//);
	//$("#pushDold").bind("mouseenter",function(){
	//	$(this).next().slideDown();
	//});
	//$("#pushDold").bind("mouseleave",function(){
	//	iTimer=setTimeout(function(){
	//		$(this).next().slideup();
	//	},50);
	//});
	//$(".pushDoll").mouseleave(function(){
	//	$(".pushDoll").slideUp();
	//});
	//$(".pushDoll").bind("mouseenter",function(){
	////	clearTimeout(iTimer);
	//	$(this).css({display:"block"});
	//});
	
	//鼠标滑动变色
	$(".BottomLeft a").mouseenter(function(){
		$(this).css({"color":"#999"});
	});
	$(".BottomLeft a").mouseleave(function(){
		$(this).css({"color":"#fff"});
	});

//点击事件
$(".skipButtonLeft").click(function(){
	$(".skipButtonLeft").css({"background": "#666",
    "color": "#e6e6e6"});
    $(".skipButtonRight").css({"color": "#333",
    "background": "#f7f7f7"});
	$(".leftButtonIndex").css({"display":"block"});
	$(".rightButtonIndex").css({"display":"none"});
});
$(".skipButtonRight").click(function(){
	$(".skipButtonRight").css({"background": "#666",
    "color": "#e6e6e6"});
    $(".skipButtonLeft").css({"color": "#333",
    "background": "#f7f7f7"});
	$(".rightButtonIndex").css({"display":"block"});
	$(".leftButtonIndex").css({"display":"none"});
});

$(".maskLayer21 ").mouseenter(function(){
	$(this).css({"background":"rgba(255, 255, 255, 0.3)"});
	$(this).next().css({"display":"block"});
//	$(this).css({"display":"block"});
});
$(".maskLayer21 ").mouseleave(function(){
	$(this).css({"background":"rgba(255, 255, 255, 0)"});
	$(this).next().css({"display":"none"});
//	$(".global_tip").css({"display":"none"});
	
});
//$(".maskLayer22 ").mouseenter(function(){
//	$(this).css({"opacity":"1"});
//	$(".global_tip").css({"display":"block"});
//});
//$(".maskLayer22 ").mouseleave(function(){
//	$(this).css({"opacity":"0"});
//});
//左侧边栏
 $(document).scroll(function(){
        var top = $(document).scrollTop();
//      console.log($(".SeeTitle").offset().top);
        if(top >= $(".SeeTitle").offset().top){
            $(".allLeft").show();
            $(".sectionRemain a").css({"background-position": "0 -124px","color":"#8f8f8f"});
            $(".thirdRemain a").css({"background-position": "-0 -186px","color":"#8f8f8f"});
            $(".firstRemain a").css({"background-position": "-176px 0","color":"#fff"});
            
        }
        if(top >= $(".shoppingTit").offset().top){
            $(".firstRemain a").css({"background-position": "0 0","color":"#8f8f8f"});
            $(".thirdRemain a").css({"background-position": "0 -186px","color":"#8f8f8f"});
            $(".sectionRemain a").css({"background-position": "-176px -124px","color":"#fff"});
            
        }
        if(top >= $(".BeautyTit").offset().top){
            $(".firstRemain a").css({"background-position": "0 0","color":"#8f8f8f"});
            $(".sectionRemain a").css({"background-position": "0 -124px","color":"#8f8f8f"});
            $(".thirdRemain a").css({"background-position": "-176px -186px","color":"#fff"});
            
        }
        if(top<$(".SeeTitle").offset().top){
        	$(".allLeft").css({"display":"none"});
        }
         $(".firstRemain a").click(function(){
         	$(".sectionRemain a").css({"background-position": "0 -124px","color":"#8f8f8f"});
            $(".thirdRemain a").css({"background-position": "-0 -186px","color":"#8f8f8f"});
            $(".firstRemain a").css({"background-position": "-176px 0","color":"#fff"});
         });
          $(".sectionRemain a").click(function(){
         	 $(".firstRemain a").css({"background-position": "0 0","color":"#8f8f8f"});
            $(".thirdRemain a").css({"background-position": "0 -186px","color":"#8f8f8f"});
            $(".sectionRemain a").css({"background-position": "-176px -124px","color":"#fff"});
         });
          $(".thirdRemain a").click(function(){
         	$(".firstRemain a").css({"background-position": "0 0","color":"#8f8f8f"});
            $(".sectionRemain a").css({"background-position": "0 -124px","color":"#8f8f8f"});
            $(".thirdRemain a").css({"background-position": "-176px -186px","color":"#fff"});
         });
         $(".firstRemain a").hover(function(){
         	
         },function(){});
         $(".sectionRemain a")
         $(".thirdRemain a")
});

//
$(".shoppingMall").mouseenter(function(){
	$(".dropDownBox").slideDown(200);
	$(this).stop();
});
$(".shoppingMall").mouseleave(function(){
	$(".dropDownBox").slideUp(200);
});

//
$("#TwoGirda").click(function(){
	$(".threeRightSidebar").show();
	$(".threeRightSidebar").animate({"left":"-287"},200);
});
$(".RightSidebar_A").click(function(){
	$(".threeRightSidebar").hide();
});

