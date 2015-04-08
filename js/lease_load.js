var INTERVAL_TIME = 3000;
var moveNow = false;
var currentIndex = 0;

$(document).ready(function(){
	var startSlide=function(){
		intervalId=setInterval(function(){
			moveNow = true;
			nextImage();
		},INTERVAL_TIME);
	}

	startSlide();
	var maxNum = $(".pic_slide li").length;
	

	var nextImage = function(){
		currentIndex++;
		if(currentIndex>maxNum-1){ currentIndex = 0;}
		var width = $(".pic_slide li").width();
		var left=-currentIndex*width;
        $(".pic_slide").animate({left:left+"px"},{duration:1000,easing:"easeOutCubic",complete:function(){}});
        
	}

});