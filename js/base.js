// JavaScript Document
	
 //set the originals
var originalBodWidth;

//set the original font size
var originalFontSize;
var originalMargin;
var animateNumber = 1;

//set the ratio of change for each size change
var ratioOfChange = 95;

//var to test if slide animation is already running
var running = false;

//var to test if fade after load is running
var loadedFade = false;

//var to be used to keep track of what img fades next in portfolio page
var fadeOffset = 0;

//is the img expanding
var sliding = false;

//are you viewing a press/project fullscreen
var viewing = false;

//find the slide position and number
var numMainSlides;
var numSecondarySlides;
var curMainSlide = 1;
var curSecondarySlide = 1;

var timeout;


//GOOGLE ANALYTICS TRACKING
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36199650-1']);
_gaq.push(['_setDomainName', 'stephenshubel.com']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
//END GOOGLE ANALYTICS


$(function() {
	
		
	
	//temporary fix for old versions of internet explorer (not fully debugged for launch)
	if($.browser.msie && parseInt($.browser.version, 10) <= 6) {
    	
			window.location = '/error';
		
		
	} 
    //set the font size using jquery
    //$(".text").css("font-size", originalFontSize);
	
	//subtract 6% from body width to account for arrows on each side
	originalBodWidth = 	$('#body-lower').width();
	
	
	//originalFontSize = originalBodWidth * 1/85;
	//store original font size for body-text in ele
	$('.body-text').each(function() {
			this.originalFontSize = parseInt($(this).css('font-size'),10) * (originalBodWidth * 1/1100);
			
	})
	
	//store original margin of each element within the lower body section
	$('#body-lower').children().each(function() {
			this.originalMargin = parseInt($(this).css('margin-top'),10)
	})
	
	//adjust text size and positioning onload
	textSize();
	//marginSize($('.body-text').parent());
	/*IE BUG where onload does not always fire, used to move video-play-button onload in IE */
	//marginSize($('.margin-resize'));
	

 
 	/* deal with img resize and window resize */
    $(window).resize(function() {
		textSize();
		//marginSize($('.body-text').parent());
		//moves top margin for home-img-hidden
		//marginSize($('.margin-resize'));
		
		/* NAVIGATION */
		navResize();
		dropdownResize();
		
    })
		
	//store original nav margin-right
	$('.nav,.nav-bold').each(function() {
		this.originalMarginRight = parseInt($(this).css('margin-right'),10)
	});
	
	navResize();
	
	
	
	
	/* DROPDOWNS */
	
	//prevent default click action for portfolio dropdown so can
	//select dropdown options
	if(isiPhone()){
		
		$('#nav-portfolio,#nav-about').click(function() {
				return false;
		});
		
		
	
	}
			
	
	
	$('.dropdown-inner').each(function() {
		//how many dropdown navs
		var children = $(this).children().length;
		//how tall is each nav times num of children plus top padding
		var height = ($(this).children().innerHeight() * children) + 10;
		
		this.innerHeight = height;
		
		//move inner dropdown to hidden
		$(this).css('margin-top',-$(this).prop('innerHeight') + 'px');
	
		
		//portfolio dropdown center inner navigation titles since they are wider
		if($(this).is('#portfolio'))
			$(this).children('.nav,.nav-bold').css('padding-left','10px');
		
				
	});
	
	
	
	/*hover effect for dropdowns on mouseover*/
	$(".dropdown,.dropdown-inner").hover(
	
		function() {
			
			var ele;
			if($(this).is('.dropdown-inner'))
				ele = $(this);
			else
				ele = $(this).next('.dropdown-outer').children('.dropdown-inner');
				
			ele.stop().animate({'margin-top':'0px'},300);
		},
		function() {
			var ele;
			if($(this).is('.dropdown-inner'))
				ele = $(this);
			else
				ele = $(this).next('.dropdown-outer').children('.dropdown-inner');
				
				
			var height = ele.prop('innerHeight');
			
			ele.stop().animate({'margin-top': -height + 'px'},300);
						
				
	})
	
	
	
	
	/*products page subscribe button*/
	$('#subscribe').click(function() {
		$('#subscribe-container').show();
		
		$('#subscribe-container').animate({'opacity': '1'},600);
	});
	
	/* successful subscribe */
	if($('#subscribe-success').length > 0){
		$('#subscribe-success').click(function() {
			$(this).hide();
		})
	}
		
	
	
	
	
	//move hidden home img behind shown img on page load
	/*
	$('.margin-resize').one('load',function() {
			marginSize($('.margin-resize'));
	});
	
	
	
	
	/* IE fix for bug where img-hidden "load" function does not work */
	if($.browser.msie && parseInt($.browser.version, 10) >= 9) {
		$('#home-img-hidden').attr("src", $('#home-img-hidden').attr("src"));
		$('#img-back-portfolio-last').attr('src',$('#img-back-portfolio-last').attr('src'));
	}
	
	
	
	//rerun dropdown resize for IE onload cache bug and while page is loading the dropdown should
	//match with "portfolio" nav
	dropdownResize();
	
	//set container height and width for arrows
	$(window).load(function() {
		
		$('.arrow-container').each(function(){	
			$(this).css('height', $('#body-lower').height() + 'px');
		})
		
		//fix bug for chrome/webkit where dropdown does not align onload
		dropdownResize();

		
	});	
	
	
})


function isiPhone(){
    return (
        //Detect iPhone
        (navigator.platform.indexOf("iPhone") != -1) ||
        //Detect iPod
        (navigator.platform.indexOf("iPad") != -1)
    );
}

function dropdownResize() {
		$('.dropdown-inner').each(function() {		
		
			var id = $(this).attr('id');
			var parent_ele = $('#nav-' + id);
			var top = parent_ele.offset().top + $('.nav').height();
			var left = parent_ele.offset().left + 1;
			var width = 90;
			
			
			//edits for about dropdown
			if($(this).is('#about')){
				left -= 8;
				width -= 10;
			}
			
			
			$(this).parent().css({'top': top,
								'left': left,
								'width': width});
								
			$(this).show().children().show();
			
		});
}
		

function navResize() {
	
	
	//navigation alignment TO BE CHANGED WHEN VIDEO IS REMOVED----------
	if($(window).width() < 1180){
		$('.nav,.nav-bold').css('margin-right','8px')
		$('#nav-contact').css('margin-right','36px');
	}
	else{
		
		$('.nav,.nav-bold').each(function() {
			$(this).css('margin-right',$(this).prop('originalMarginRight') + 'px')
		})
	}
}

	


function sequentialFade(classes, speed) {
		
		var ele = $(classes + ':eq(' + fadeOffset + ')');
		
		ele.animate({'opacity': '1'}, speed);
		
		var delay = speed/2;
		
		timeout = setTimeout(function() {
				
						//fix for portfolio arrows fade in
						if(!ele.parent().parent().is('#animate-inner-container1') && loadedFade == false || ele.is(classes + ':last')){
							//no longer need to hold off mouseover/click effects
							loadedFade = true;
							
							if($('.arrow-container').height() < 300){
									var height = ($('.img-back').height() < 300 ? ($('.img-back').height() * 3) : $('.img-back').height());
									$('.arrow-container').css('height',height)
							}
							
							testArrows();
		
						}
						
						//if last ele of that class, no more fades
						if(ele.is(classes + ':last'))
							return;
						
						fadeOffset++;
						sequentialFade(classes, speed);
				},delay)
		
}		


function textSize() {
	
		 //get the width and height as the window resizes
        var bodWidth = $('#body').width();
		
        //get the difference in width
        var widthDiff = bodWidth - originalBodWidth;
		
        //check if the window is larger or smaller than the original
				
		//our window is larger than the original so increase font size
		var pixelsToIncrease = Math.round(widthDiff / ratioOfChange);
 				
			$('.body-text').each(function() {
				
				//calculate the new font size
				var newFontSize =  Math.floor($(this).prop('originalFontSize') + pixelsToIncrease);
				
				//lower limit for font size (11px) for about page
				if(newFontSize < 11)
					newFontSize = 11;
				
 				
				//set new font size
				$(this).css("font-size", newFontSize + 'px');
			})
}

function marginSize(element,fixedMargin) {
		var originalMargin = (element.prop('originalMargin') ? element.prop('originalMargin') : 0);
		//var imgHeight = getOriginalHeightOfImg();
		var imgHeight = $('.img-back').height();
		
		//if img-back not loaded or fixedMargin is true, move element 
		//according to proper img ratios
		if(imgHeight == 0 || fixedMargin){
			imgHeight = getOriginalHeightOfImg();
		}
				
		var newMargin = originalMargin - imgHeight;
	
		element.css('margin-top', newMargin + 'px');
						
		//change arrow height to match the img height (press)
		//since press img is 1/3 of total img height (3 press images per column)
		if($('.img-back').height() < ($('#body-lower').height()/2))
			imgHeight = $('.img-back').height() * 3;
		
		//change height of arrow divs on either side
		$('.arrow-container').css('height', imgHeight + 'px');
				
}

function getOriginalHeightOfImg() {
		
		var ratio = 700/1200;
		var imgHeight = originalBodWidth * ratio;
		
		return imgHeight;
	
}

function validate(form_name) {	
	
	var returning = true;
	
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	
		$('#' + form_name + ' input[type=text]').each(function(){
			
			if($.trim($(this).val()) == '' ||
				($(this).attr('name') == 'email' && !emailReg.test($(this).val()))){
				
				returning = false;
				$(this).addClass('red-back');
				
			}
		});
				
		if(!returning)
			return false;
		else
			return true;
		
	
}		
