// JavaScript Document
	
 //set the originals
var originalBodWidth;

//set the original font size
var originalFontSize;
var originalMargin;
var animateNumber = 1;

//set the ratio of change for each size change
var ratioOfChange = 100;

var running = 0;


$(function() {
 	
    //set the font size using jquery
    $(".text").css("font-size", originalFontSize);
	
	//subtract 3% from body width to account for arrows on each side
	originalBodWidth = 	.97 * $('#body').width();
	
	originalFontSize = originalBodWidth * 1/85;
	originalMargin = parseInt($('.body-text').parent().css('margin-top'),10);
	
	textSize();
	marginSize($('.body-text').parent());
 
    $(window).resize(function()
    {
		textSize();
		marginSize($('.body-text').parent());
		animateMarginSize();
       
    })

	
	//set container height and width for arrows
	$('.arrow-container').css('height', getOriginalHeightOfImg());
	
	/* animation effect for arrow clicks */
	$('#next-arrow').click(function() {
		
		//set limit for how far scrolling can go
		var limit = $('#animate-outer-container').width() - $('.animate-inner-container').width() -10;
		
		//if we are at the end of animation, stop scrolling
		if(parseInt($('#animate-outer-container').css('margin-left'),10) <= (limit * -1))
			return;
		
		animateSlide(-1,$('#animate-outer-container'));
		
	});
	
	$('#last-arrow').click(function() {
		
		if(parseInt($('#animate-outer-container').css('margin-left'),10) >= 0)
			return;
		
		animateSlide(1,$('#animate-outer-container'));
		
	});
	
		
})


function animateSlide(nextOrLast, obj) {
		
		//test if animation is already running
		//prevent multiple fires
		if(running == 1)
			return;
		else
			running = 1;
		
		animateNumber += nextOrLast * -1;
		
		var curMargin = parseInt(obj.css('margin-left'),10);
		var width = (obj.children('.animate-inner-container').width() + 1) * nextOrLast;
		var newMargin = (curMargin + width)  + 'px';
		
		obj.animate({'margin-left': newMargin}, 300);
		
		//reset animation after done
		setTimeout(function() {
				running = 0;
			}, 450);
}

function animateMarginSize() {
		var newMargin = $('.animate-inner-container').width() * (animateNumber - 1) * -1;
		
		$('#animate-outer-container').css('margin-left', newMargin);
}
		


function textSize() {
	
		 //get the width and height as the window resizes
        var bodWidth = $('#body').width();
		
        //get the difference in width
        var widthDiff = bodWidth - originalBodWidth;
		
        //check if the window is larger or smaller than the original
        if(widthDiff > 0)
        {
				
            //our window is larger than the original so increase font size
            var pixelsToIncrease = Math.round(widthDiff / ratioOfChange);
 	

            //calculate the new font size
            var newFontSize = originalFontSize + pixelsToIncrease;
 
            //set new font size
            $(".body-text").css("font-size", newFontSize);
        }
        else
        {
            //our window is smaller than the original so decrease font size
            var pixelsToDecrease = Math.round(Math.abs(widthDiff) / ratioOfChange);
 
            //calculate the new font size
            var newFontSize = originalFontSize - pixelsToDecrease;
 
            //set the new font size
            $(".body-text").css("font-size", newFontSize);
        }
}

function marginSize(applied_element) {
	
		var imgHeight = $('.img-back').height();
			
		if(imgHeight == 0){
			imgHeight = getOriginalHeightOfImg($('.img-back'))
		}
		
		var newMargin = originalMargin - imgHeight;
		
		applied_element.css('margin-top', newMargin + 'px');
		
		//change height of arrow divs on either side
		$('.arrow-container').css('height', imgHeight);
		
}

function getOriginalHeightOfImg() {
		
		var ratio = 700/1200;
		var imgHeight = originalBodWidth * ratio;
		
		return imgHeight;
	
}