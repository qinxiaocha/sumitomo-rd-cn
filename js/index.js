$(document).ready(function(){

    //index.html  function
	$(".opa").hover(function(){
    		$(this).find("img").css("opacity",".8");
    	},function(){
    		$(this).find("img").css("opacity","1");
    	});

    //group-header hover function
	$(".lv2 li").hover(function(){
		$(this).find(".g").fadeIn();
    	},function(){
    		$(this).find(".g").fadeOut();
    	});





   // 获取并设置小图片区域的长度
    var len = $(".display-list").length;
    var ulwidth,num;
    for(var i=0;i<len;i++){
        num = $(".display-list").eq(i).find("li").length;
        ulwidth = num*98;
        $(".display-list").eq(i).css("width",ulwidth+"px");
    }
   
    //点击小图片，显示大图片
    $(".display-list li").click(function(){
        $(this).parent().find(".list-hovbg").removeClass('list-hovbg');
        $(this).addClass('list-hovbg');
        var src = $(this).find("img").attr("src");
        var play_src=src.replace(/small/, "");
        $(this).parent().parent().prev().find("img").attr("src",play_src);
    });

     //hover tab function
     $(".list-title li a").hover(function(){
         $(this).find(".non").removeClass('non');
         $(this).find(".sho").removeClass('sho');
         $(this).find("img:eq(0)").addClass('non');
         $(this).find("img:eq(1)").addClass('sho');
     },function(){
         $(this).find(".non").removeClass('non');
         $(this).find(".sho").removeClass('sho');
         $(this).find("img:eq(0)").addClass('sho');
         $(this).find("img:eq(1)").addClass('non');
     });

    //切换tab
    $(".list-title li a").click(function(event){
        event.preventDefault();
        var id = $(this).attr("href");
        
        $(".hid").removeClass('hid');
        $(".show").removeClass('show');
        $(this).find('img:eq(0)').addClass('hid');
        $(this).find('img:eq(1)').addClass('show');


        $(".display-wrap > div").siblings().css("display","none");
        $(".display-wrap > div").siblings("#"+id).css("display","block").find(".display-list").css("left","0px");

    });
    

    $(".navbar li").hover(function(){
        $(this).toggleClass('gre');
           });

     //小图片滑动部分
     //click left
    $(".leftarrow").click(function(){
        // $(this).css("background","url(images/leftarrow-click.jpg) no-repeat");
        var getleft = $(this).prev().find(".display-list").css("left");

       var n= parseFloat(getleft);
       var move=n+97.5;
       if(n == 0){
        // console.log("finish");
            return;
       }
       // $(this).prev().find(".display-list").css("left",move);
       $(this).prev().find(".display-list").animate({left:move+"px"},{duration:500,easing:"easeOutCubic",complete:function(){}});
    });
    // //click right
    $(".rightarrow").click(function(){
        // $(this).css("background","url(images/rightarrow-click.jpg) no-repeat");
        var getleft = $(this).prev().prev().find(".display-list").css("left");
        // console.log(getleft);
        var abs_getleft=Math.abs(parseFloat(getleft));
        // console.log(abs_getleft);
        var n= parseFloat(getleft);
        // console.log(n);
        var leave=$(this).prev().prev().find(".display-list li").length-7;
        var totalleft=leave*97.5;
        // console.log(totalleft);
        if (totalleft == abs_getleft) {
          console.log("success");
          return;
        };
        var moverleft = n-97.5;//li width is 97.5(90+7.5);
        // var abs_moverleft=Math.abs(parseFloat(moverleft));

        // var wid=$(this).prev().prev().find(".display-list").css("width");
        // var w= parseFloat(wid); //w is pic ul width
        // var sub=w-690+102;//690 is contain's width,then sub is 
        // if(abs_moverleft>=(sub-2)){
        //     return;
        // }
        
        $(this).prev().prev().find(".display-list").animate({left:moverleft+"px"},{duration:500,easing:"easeOutCubic",complete:function(){}});
   

    });

    $(".table-lv2 td").click(function(){
        $(".active").removeClass('active');
        $(this).addClass('active');
    });

    var theBtns=$(".table-lv2 td");
    theBtns.each(function(){
        var theBtn=$(this);
        theBtn.hover(function(){
            $(this).addClass('hover');
        },
        function(){
            $(this).removeClass('hover');
        });
    });

   $(".opacity").hover(function(){
      $(this).css("opacity",".8");
   },function(){
      $(this).css("opacity","1");
   });
   
   $("#la_tour a").click(function(e) {
       /* Act on the event */
       e.preventDefault();
       var id = $(this).attr("id");
       if (id =="lind-port") {
            $("html,body").stop(true,true).animate({scrollTop:"4345px" },450)
       }else if(id =="lind-chiyo"){
$("html,body").stop(true,true).animate({scrollTop:"4890px" },450)
       }else if(id =="lind-night"){
$("html,body").stop(true,true).animate({scrollTop:"5180px" },450)
       }else if(id =="lind-valley"){
$("html,body").stop(true,true).animate({scrollTop:"5720px" },450)
       }else if(id =="lind-day"){
$("html,body").stop(true,true).animate({scrollTop:"6010px" },450)
       }else if(id =="lind-wen"){
$("html,body").stop(true,true).animate({scrollTop:"6310px" },450)
       };
   });
   

   $(".m a,#la_tour a").bind('click', function(event) {
     /* Act on the event */
     event.preventDefault();
     var target=$(this).attr("href");
     var top=$(target).offset().top-131;
     $('html, body').animate({
        scrollTop: top
    }, 1000);
   });

    $(".leftarrow").mouseover(function(){
      $(this).css("background","url(images/leftarrow-click.jpg) no-repeat");
    });
    $(".rightarrow").mouseover(function(){
      $(this).css("background","url(images/rightarrow-click.jpg) no-repeat");
    });
    $(".leftarrow").mouseout(function(){
      $(this).css("background","url(images/leftarrow.jpg) no-repeat");
    });
    $(".rightarrow").mouseout(function(){
      $(this).css("background","url(images/rightarrow.jpg) no-repeat");
    });

});



