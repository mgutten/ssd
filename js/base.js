// JavaScript Document
	
 //set the originals
var originalBodWidth;

//set the original font size
var originalFontSize;
var originalMargin;
var animateNumber = 1;

//set the ratio of change for each size change
var ratioOfChange = 100;

//var to test if slide animation is already running
var running = false;

//var to test if fade after load is running
var loadedFade = false;

//var to be used to keep track of what img fades next in portfolio page
var fadeOffset = 0;


$(function() {
	
    //set the font size using jquery
    $(".text").css("font-size", originalFontSize);
	
	//subtract 3% from body width to account for arrows on each side
	originalBodWidth = 	.97 * $('#body').width();
	
	originalFontSize = originalBodWidth * 1/85;
	
	//store original margin of each element within the lower body section
	$('#body-lower').children().each(function() {
		this.originalMargin = parseInt($(this).css('margin-top'),10)
	})
	
	//adjust text size and positioning onload
	textSize();
	marginSize($('.body-text').parent());
	
	
 
    $(window).resize(function() {
		textSize();
		marginSize($('.body-text').parent());
		marginSize($('.margin-resize'));
		animateMarginSize();
    })
	
	
	
	//move hidden home img behind shown img on page load
	$('.margin-resize').one('load',function() {
			marginSize($('.margin-resize'));
	});
	
	/* IE fix for bug where img-hidden "load" function does not work */
	if($.browser.msie && parseInt($.browser.version, 10) >= 9) {
		$('#home-img-hidden').attr("src", $('#home-img-hidden').attr("src"));
		$('#img-back-portfolio-last').attr('src',$('#img-back-portfolio-last').attr('src'));
	}
	
	
	
	//set container height and width for arrows
	$('img:last').load(function() {
		$('.arrow-container').each(function(){	
			$(this).css('height', $('#body-lower').height() + 'px');
		})
	});
	
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
	


	/* sequential fade effect for portfolio */
	$('#img-back-portfolio-last').load(function() {
			
			sequentialFade('.img-back-portfolio',500)
	})
	
	/* sequential fade effect for press */
	$('#img-back-press-last').load(function() {

			sequentialFade('.img-back-press', 200)
	})
	
	/* whiteout effect for mouseover imgs */
	$('.whiteout').hover(function() {
			
			if(loadedFade === false)
				return;
				
			$(this).stop().animate({'opacity':'.3'},600);
			
			var height = $(this).height() + 'px';
			var width = $(this).width() + 'px';
			var top = $(this).offset().top + 'px';
			var left = $(this).offset().left + 'px';
			var text = $(this).attr('text');

			
			$('#hover-text').css({'height': height,
									'width': width,
									'top': top,
									'left': left,
									'display': 'block'
								})
								
			$('.hover-text').html(text);
			
			
							
			
		},
		function() {
			
			if(loadedFade === false)
				return;
			
			$(this).stop().animate({'opacity':'1'},600);
			$('#hover-text').hide();
	})
	
})


function sequentialFade(classes, speed) {
	
		var ele = $(classes + ':eq(' + fadeOffset + ')');
		
		ele.animate({'opacity': '1'}, speed);
		
		var delay = speed/2;
		
		setTimeout(function() {
				
				//temp fix for portfolio arrows fade in
				if(!ele.parent().is('#animate-inner-container1')){
					//no longer need to hold off mouseover effects
					loadedFade = true;
					$('.arrow-container').animate({'opacity':'1'},500);
				}
				
				//if last ele of that class, no more fades
				if(ele.is(classes + ':last'))
					return;
				
				fadeOffset++;
				sequentialFade(classes, speed);
		},delay)
		
}

function animateSlide(nextOrLast, obj) {
		
		//test if animation is already running
		//prevent multiple fires
		if(running == true)
			return;
		else
			running = true;
		
		animateNumber += nextOrLast * -1;
		
		var curMargin = parseInt(obj.css('margin-left'),10);
		var width = (obj.children('.animate-inner-container').width() + 1) * nextOrLast;
		var newMargin = (curMargin + width)  + 'px';
		
		obj.animate({'margin-left': newMargin}, 300);
		
		//reset animation after done
		setTimeout(function() {
				running = false;
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
		
		var originalMargin = (applied_element.prop('originalMargin') ? applied_element.prop('originalMargin') : 0);
		var imgHeight = $('.img-back').height();
		
		if(imgHeight == 0){
			imgHeight = getOriginalHeightOfImg()
		}
		
		var newMargin = originalMargin - imgHeight;

		applied_element.css('margin-top', newMargin + 'px');
		
		
		//if on press page and img-back is tiny
		if(imgHeight < 300)
			imgHeight = imgHeight * 3;
			
		//change height of arrow divs on either side
		$('.arrow-container').css('height', imgHeight + 'px');
		
}

function getOriginalHeightOfImg() {
		
		var ratio = 700/1200;
		var imgHeight = originalBodWidth * ratio;
		
		return imgHeight;
	
}