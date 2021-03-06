// portfolio and press javascript
var loadingTimeout;

$(function() {
	
	
	/* center img onclick portfolio */
	$('.whiteout').click(function() {
		if(loadedFade === false || running == true || sliding == true || viewing == true)
			return;
		
		//clear sequentialFade timeout to prevent quick scrolling to next page and then activating imgExpand
		if(timeout)
			clearTimeout(timeout);
		
		//remove whiteout class so does not fade out
		$(this).removeClass('whiteout').addClass('whiteout-selected');
		
		$('.animate-slide-outermost').show();
		
		animateImgExpand($(this));
						
	});
	
	
	/* whiteout effect for mouseover imgs */
	$('.whiteout').hover(function() {
				
			if(loadedFade === false || running == true || sliding == true || viewing == true)
				return;
			
			
			//OPACITY = .2 FOR PRESS PAGE and .3 for portfolio
			var opacity = '.3';
			
			if($(this).is('.whiteout-more'))
				opacity = '.2'
				
			
			$(this).stop().animate({'opacity':opacity},600);
			
			var height = $(this).height() + 'px';
			var width = $(this).width() + 'px';
			var top = $(this).position().top;
			var left = $(this).position().left + 'px';
			var text = $(this).attr('text');
			
			
			//adjust for the right-most column of press page so text can be centered on image 
			//(img hangs over to next page)
			if($(this).is('.last-column'))
				width = parseInt(width,10) - 10 + 'px';
				
			
			$('#hover-text').css({'height': height,
									'width': width,
									'top': top,
									'left': left,
									'display': 'block'
								})
								
			$('.hover-text').html(text)
						
			//center text for press page
			$('.hover-text-small').css('margin-top',-($('.hover-text-small').height()/2)+'px')
							
			
		},
		function() {
			
			if(loadedFade === false || sliding || viewing)
				return;
			
			$(this).stop().animate({'opacity':'1'},600);
			$('#hover-text').hide();
	})
	
	
	
	
	/* click on viewed img to exit out */
	$('.x,#background').click(function() {
		
		//reset body-lower height
		$('#body-lower').css('height',$('.animate-inner-container').height());

		//hide loading gif if not already hidden
		$('.loading').hide();
		
		//remove selected image class
		$('.whiteout-selected').removeClass('whiteout-selected').addClass('whiteout');
		//show main slide
		$('.whiteout,.nav,.nav-bold,#logo').animate({'opacity':'1'},400);
		
		//reset counter
		curSecondarySlide = 1;
		
		//reset arrows
		$('.arrow-container').css('height',$('#body-lower').height())
		
		//delete all imgs in animate-slide-outer, reset to starting point
		$('.animate-slide-outer').html('')
								.css({'margin-left':'0px',
										'width':($('.animate-inner-container').width() * 30) + 'px'});
		
		//move animate-slide behind 
		$('.animate-slide-outermost').css('z-index','-1')
										.hide();
		
		//change background to clear
		$('.animate-inner-container').css('background','none')
				
		//reset indicators
		pageIndicators('main');
		
		//hide x and background
		$('.x,#background').hide();
		
		//proceed with regular viewing
		viewing = false;
		
		//check arrows to be shown or not
		testArrows();
		
		//turn off cartouche 
		closeCartouche();
	})
	
	
	
	
	$('.indicator').live('click',function() {
		var change;
				
		if(viewing)
			change = $('.indicator').index(this) - (curSecondarySlide - 1);
		else
			change = $('.indicator').index(this) - (curMainSlide - 1);
			
		$('#cartouche').hide();
			
		customAnimateSlide(change);
				
		//$(this).parent().siblings('.arrow').trigger('click');
	});
	
	
	
	$('#cartouche-close').click(function() {
		
		closeCartouche();
	})
	
	
	
	
	/* arrow effects */
		/* animation effect for arrow clicks */
	$('#next-arrow').click(function() {
		//set limit for how far scrolling can go
		var limit;
		
		if(loadingTimeout)
			return;
		
		
		//if viewing the sub-tree of project/articles
		if(viewing){
			
			//prevent overshoot animation
			//1 extra pixel per slide due to margin-left overlap
			limit = $('.animate-slide-outer').width() - $('.animate-slide-inner').width() - (1 *  $('.animate-slide-inner').length) - 5;
			
			//subtract one animate slide inner from limit for portfolio due to one fewer slide
			if($('.whiteout-selected').is('.img-back-portfolio,.img-back-room'))
				limit -= $('.animate-slide-inner').width();
				
								
			if((parseInt($('.animate-slide-outer').css('margin-left'),10) * -1) >= limit ){
				return;
			}
			
			//close cartouche on portfolio page
			closeCartouche(true);

			
			animateSlide(-1,$('.animate-slide-outer'));
			return;
			
		}
		
		
		limit = $('#animate-outer-container').width() - $('.animate-inner-container').width() - (1 *  $('.animate-slide-inner').length) - 5;
		
		//if we are at the end of animation, stop scrolling
		if((parseInt($('#animate-outer-container').css('margin-left'),10) * -1) >= limit)
			return;
		
		
		animateSlide(-1,$('#animate-outer-container'));
	});
	
	$('#last-arrow').click(function() {
		
		//if viewing the sub-tree of project/articles
		if(viewing){
			
			if(parseInt($('.animate-slide-outer').css('margin-left'),10) >= 0)
				return;
				
			animateSlide(1,$('.animate-slide-outer'));
			return;
		}
		
		
		if(parseInt($('#animate-outer-container').css('margin-left'),10) >= 0)
			return;
		

		animateSlide(1,$('#animate-outer-container'));
		
	});
	
	
	
	$(document).keydown(function (e) {
		  var keyCode = e.keyCode || e.which,
			  arrow = {left: 37, up: 38, right: 39, down: 40 };
		
		  switch (keyCode) {
			case arrow.left:
			  $('#last-arrow').trigger('click');
			break;
			case arrow.right:
			  $('#next-arrow').trigger('click');

			break;
			case arrow.up:
			  //..
			break;

			case arrow.down:
			  //..
			break;
		  }
		});

	
	

	/* changes made on window load */
	$(window).load(function() {
		
		windowLoad();
		//create pageIndicators
		pageIndicators('main');	
		
		

	})
	
	$(window).resize(function() {
		resize();
	})
	
	

});


//value for slide is true or false
function closeCartouche(slide) {
	
	$('#cartouche').animate({'opacity': '0'}, 
							{duration:200,
								queue:false,
								complete:function() {
									$(this).hide()
									}
				})
	
	if(slide)
		$('#cartouche').animate({'left': $('#body-lower').offset().left - 500},300)
	
}


function resize() {
	
	//resize arrow
	var height;
	if(viewing){
		$('#body-lower').css('height', $('.animate-slide-outer').height());

		height = $('.animate-slide-outer').height();
	}
	else{
		$('#body-lower').css('height','auto');
		
		height = $('#body-lower').height();
	}
		
	$('.arrow-container').css('height',height);
	
	
	indicatorResize();
	windowLoad();
	slideResize();
	animateMarginSize($('.animate-inner-container'));

}

function slideResize() {
	
	if(!viewing)
		return;
		
	//change width of animate-slide-inner to match the width of viewing screen
	var width = $('#body-lower').width();
	$('.animate-slide-inner').css('width',width);
	
	$('.img-view').each(function() {
		
		centerImg($(this));
	})
	

	//change width of animate outer to exactly match number of pictures
	//so animateSlide works properly
	var marginLeft = ($('.indicator.indicator-selected').index() * width) * -1;	
	
	width = ($('#body-lower').width() * ($('.animate-slide-inner').length)) + (1 * $('.animate-slide-inner').length);
	
	if($('.whiteout-selected').is('.img-back-portfolio,.img-back-room'))
		width += $('.animate-slide-inner').width();
	
	$('.animate-slide-outer').css({'width': width,
									'margin-left': marginLeft});
}

function indicatorResize() {
		
		/*
		//find margin top for indicator container based on next-arrow height (should be below middle arrow so minus 20)
		//var marginTop = (($('#next-arrow-container').height()/2) - 10) * -1 + 'px';
		$('#indicator-container').css({'margin-top': marginTop,
										'width': $('#next-arrow-container').width()})
		
		//center indicators
										
		var marginLeft = Math.floor(($('#next-arrow-container').width() - $('.indicator').width())/2);	
		$('.indicator').css('margin-left', marginLeft);
		*/
		
		var marginLeft = ($('#body').width() - $('#indicator-container').width())/2;
				
		$('#indicator-container').css('margin-left', marginLeft);
}


function animateMarginSize(element) {
		var animateNum = Math.round(parseInt(element.parent().css('margin-left'),10)/element.width());
		var newMargin = (element.width() * (animateNum)) - (animateNum * 1);
		var width = element.length * ($('#body-lower').width() * 1.015);		
		
		element.parent().css({'margin-left': newMargin,
								'width': width});
								
}



//alignment and sizing function for window.load and window.resize
function windowLoad() {
	
		//make container fixed height of children
		$('.img-back-portfolio-container,.img-back-press-container,.img-back-room-container').each(function() {
			$(this).css('height', $(this).children().height())
		})
		
		//set number of main slides as var
		numMainSlides = $('.animate-inner-container').length;
		
		var height = $('#body-lower').width() * 700/1200;
		$('.animate-slide-outermost').css({'height': height, //$('#body-lower').css('height'),
											'width': $('#body-lower').css('width'),
											'top': 0,
											'left': 0})
		if(!viewing)
			$('.animate-slide-outermost').hide();
		
		//*30 gives us our starting width of about 30 slides, which should not be exceeded.  if there are more than 30 pics,
		//up the multiply to a higher number
		$('.animate-slide-outer').css({'height': $('.animate-slide-outermost').height() + 'px',
										'width': ($('.animate-inner-container').width() * 30) + 'px'})
										

											
		//position x for exiting slideshow
		$('.x').css({'top': 5,
						'right': 5});
		
		/* fix problem where first container for press and by rooms page is sometimes larger than child img */
		$('.img-back-room-container:first,.img-back-press-container:first').each(function() {
			
			if($(this).height() > $(this).children().height())
				$(this).css('height', $(this).children().height())
				
		})
		
}

//change = # of slides to change
function customAnimateSlide(change) {
	
	
	//test if animation is already running
	//prevent multiple fires
	if(running)
		return;
	else
		running = true;
	
	//determine which container we are animating
	var element = (viewing ? $('.animate-slide-outer') : $('#animate-outer-container'));

	//find new margin
	var curMargin = parseInt(element.css('margin-left'),10);
	var newMargin = curMargin - (change * (element.children().width()));
		
	//animate
	element.animate({'margin-left': newMargin + 'px'},{duration:400,complete:function() {
																		running = false}});
	
	
	if(viewing){
		curSecondarySlide += change;
		$('.indicator-selected').removeClass('indicator-selected');
		$('.indicator:eq(' + (curSecondarySlide - 1) + ')').addClass('indicator-selected');
	}
	else{
		curMainSlide += change;
		$('.indicator-selected').removeClass('indicator-selected');
		$('.indicator:eq(' + (curMainSlide - 1) + ')').addClass('indicator-selected');
	}
	
	
	
}


function animateSlide(nextOrLast, element) {
		
		//test if animation is already running
		//prevent multiple fires
		if(running)
			return;
		else
			running = true;
		
		
		var marginLeft = parseInt(element.css('margin-left'),10);
		
		//animateNumber += nextOrLast * -1;
		
		var curMargin = parseInt(element.css('margin-left'),10);
		var width = (element.children().width()) * nextOrLast;
		var newMargin = (curMargin + width)  + 'px';
		
		element.animate({'margin-left': newMargin}, 
					{duration:300,
					complete:function() {
								running = false
							}
					});
		
		//if we are at the end of animation, stop scrolling
		if(nextOrLast < 0){
			/*
			//next arrow clicked
			var limit = element.width() - (2 * element.children().width()) - 10;
			
			if(marginLeft <= (limit * -1)){
				$('#next-arrow').hide();
				$('#last-arrow').show();
			}
			else{
				$('#next-arrow').show();
				$('#last-arrow').show();
			}
			*/
			//change current slide used in page indicator
			var secondOrMain;
			if(element.is('#animate-outer-container')){
				curMainSlide += 1;
				secondOrMain = 'main';
			}
			else{
				curSecondarySlide += 1;
				secondOrMain = 'second';
			}
				
			changeIndicator(secondOrMain);	
				
		}
		else if(nextOrLast > 0){
			/*
			//last arrow clicked
			var limit = -$('.animate-inner-container').width() - 20;
			
			if(marginLeft >= limit){
				$('#last-arrow').hide();
				$('#next-arrow').show();
			}
			else{
				$('#next-arrow').show();
				$('#last-arrow').show();
			}
			*/
			//change current slide used in page indicator
			var secondOrMain;
			if(element.is('#animate-outer-container')){
				curMainSlide -= 1;
				secondOrMain = 'main';
			}
			else{
				curSecondarySlide -= 1;
				secondOrMain = 'second';
			}
				
			changeIndicator(secondOrMain);	
		}
		
}


function testArrows() {
	
	
	var element = (viewing ? $('.animate-slide-inner') : $('.animate-inner-container'));

	if(element.length > 1)
		$('.arrow-container').animate({'opacity':'1'},400).children().css('cursor','pointer');
	else
		$('.arrow-container').css('opacity','0').children().css('cursor','default');
		
}
	
	
	

//secondOrMain is str with val = 'main' or = 'second'
function pageIndicators(secondOrMain) {
		
		//remove old indicator container
		$('#indicator-container').remove();
		
		var numSlides;
		var curSlide;
		
		if(secondOrMain == 'main'){
			curSlide = curMainSlide;
			numSlides = numMainSlides;
		}
		else{
			curSlide = 1;
			numSlides = numSecondarySlides;
		}
		

		
		var block = '<div id="indicator-container">';
		var classes;
		
		//loop through and create indicators
		for(i = 0; i < numSlides; i++){
			
			
			classes = 'indicator'
			if(i + 1 == curSlide)
				classes += ' indicator-selected';
			
			block += "<img src='/images/arrows/indicator.png' class='" + classes + "' />";
			
		}
		
		block += "</div>";
		
		//$('#next-arrow-container').append(block);
		$('#copyright').before(block);
		
		indicatorResize();
		
}


//secondOrMain is str with val = 'main' or = 'second'
function changeIndicator(secondOrMain) {
		
		//subtract one because eq:(num) uses array index 0
		var curSlide;
		if(secondOrMain == 'main')
			curSlide = curMainSlide - 1;
		else
			curSlide = curSecondarySlide - 1;
		
		
		$('.indicator-selected').removeClass('indicator-selected')
		
		$('.indicator:eq(' + curSlide + ')').addClass('indicator-selected');
		
}


function animateImgExpand(element) {
		
		//set sliding var so mouseover does not fire
		sliding = true;
		viewing = true;
		
		//hide hover text
		$('#hover-text').hide();
		
		//img expands if on press page
		if(element.is('.whiteout-more')){
			var imgRatio = element.width()/element.height();
			//find left distance to center img
			var left = ($('#body-lower').width() - (imgRatio * $('.animate-slide-outer').height()))/2;
		}
		else
			var left = ($(window).width() - (element.width()))/2;
		
				
		
		//change background color #fffbef
		//$('.animate-inner-container').css('background','#000')
		
		//different animation effect for portfolio by project and by room page
		if(element.is('.img-back-portfolio,.img-back-room')){
			//hide background images and nav
			$('.whiteout,.whiteout-more,.nav,.nav-bold,#logo,.img-back-portfolio').stop()
																					.animate({'opacity':'0'},
																						{duration:100,
																						queue:false,
																						complete: function() {
																								if(!loadingTimeout){
																									loadingTimeout = setTimeout(function() {
																										$('.loading').show().animate({'opacity':'1'},400);
																										loadingTimeout = true;
																									}, 300)
																								}
																								
																						}
																					});

			
			//move cartouche
			var top = (($('#body-lower').height() - $('#cartouche').height())/2);
			$('#cartouche').css({'top': top,
									'left': '50%'});
			
			
			//populate cartouche with text for this project
			var text = $('.whiteout-selected').parent().next('.portfolio-text').html();
			$('.cartouche-body').html(text);
			$('.cartouche-title').html($('.whiteout-selected').attr('text'));
			
			$('#cartouche').show();
			
		}
		else{
			
			$('#body-lower').css('height',$('.animate-slide-outer').height());
			
			$('.whiteout,.nav,.nav-bold,#logo').stop().animate({'opacity':'0'},{duration:600,queue:false});
			
			if(!loadingTimeout)
				loadingTimeout = true;
								
			//animate img to full opacity
			element.stop().animate({'opacity':'1'},{duration:600,queue:false});
			//at same time move to middle of screen
			element.css({'height': element.css('height'),
							'width': 'auto',
							'top':element.parent().position().top,
							'left':element.parent().position().left,
							'position':'absolute'})
					.animate({'left':left + 'px',
								'top': 0,
								'height': $('.animate-slide-outer').height()
								},{duration:1000,queue:false,complete: function() {
									
										//on complete of animate, fade in copy of first image
										setTimeout(function() {
											$('#animate-slide-inner-first').css('opacity','1')
											element.css({'opacity':'0',
														'position':'static',
														'width':'100%',
														'height': 'auto'})
											$('.x,#background').show();
											testArrows();
											loadingTimeout = false;
										},500)
										
										
														
									}
								});
		}
							
		//animate arrows to same size as element
		setTimeout(function() {
			
			$('.arrow-container').animate({'height':$('.animate-slide-outer').height()},600)
			
			//for when indicators are on side arrows
			//var marginTop = (($('.animate-slide-outer').height()/2) - 10) * -1 + 'px';
			//$('#indicator-container').animate({'margin-top': marginTop},600);
			//fix issue where press page indicators are too close on img expand
			if($('.whiteout-selected').is('.img-back-press'))
				$('#indicator-container').animate({'margin-top': '15px'},600);
			
		}, 400)
							
							
		
		//load images from this project/article
		loadImgs(element.attr('src'));		
								
		setTimeout(function() {
				sliding = false;
				
			}, 1000);
			
}

//retrive image names from file
function loadImgs(src) {

	var num = src.match(/_([0-9]+)/)[1];
	//num = num[0].replace(/_/g,'');
	var folder = src.match(/images\/([a-z]+)/)[1];
	
	var imgFolder = '/images/' + folder + '/' + num;
	var numFiles;
	
	//ajax call to retrieve all of the images that are stored for this project/article
	$.ajax({
		url: '/ajax/img_load.php',
		type: 'POST',
		data: {folder : imgFolder},
		success: function(data) {
			numFiles = $.parseJSON(data);
			//drop first 2 values of json return as they are . and ..
			numFiles.splice(0,2)
			
			displayImgs(numFiles);
			
	
		}
	})
		
}

function displayImgs(fileArray) {
	
	var block;
	var timestamp = ($.browser.msie ? '?' + new Date().getTime() : '');
	
	//if there are no inner imgs, display cover img again
	if(fileArray.length == 0){
		block = "<div class='animate-slide-inner animate-slide' id='animate-slide-inner-first'><img src='" + $('.whiteout-selected').attr('src') + timestamp + "' class='img-view' /></div>";
		$('.animate-slide-outer').append(block);
	}
	else{
			for(i = 0; i < fileArray.length; i++){
								
				//if first iteration
				if(i == 0){
					//and not portfolio page
					if(!$('.whiteout-selected').is('.img-back-portfolio,.img-back-room')){
						//first page is cover img
						block = "<div class='animate-slide-inner animate-slide' id='animate-slide-inner-first'><img src='" + $('.whiteout-selected').attr('src') + timestamp + "' class='img-view' /></div>"
					}
					//else it is portfolio by project page
					else{
						
						//display first image of project
						block = "<div class='animate-slide-inner animate-slide' id='animate-slide-inner-first'><img src='" + fileArray[i] + timestamp + "' class='img-view' /></div>"
						$('.animate-slide-outer').append(block);
						continue;
					}
					
				}
				//else not first iteration
				else
					block = "";
				
				block += "<div class='animate-slide-inner animate-slide'><img src='" + fileArray[i] + timestamp + "' class='img-view' /></div>";
				
				
				$('.animate-slide-outer').append(block);
				
			}
	}
	
	
	//animate first image in onload for by project
	if($('.whiteout-selected').is('.img-back-portfolio,.img-back-room')){
		$('.img-view:last').load(function() {

			setTimeout(function() {
				
				//clear loading gif timeout or hide it
				if(loadingTimeout){
					clearTimeout(loadingTimeout);
				}
				
				loadingTimeout = false;
				
				$('.loading').stop().css('opacity','1').hide()
				
				
				//fade in first image and cartouche
				$('#animate-slide-inner-first').animate({'opacity': '1'}, 1500);
				$('#cartouche').animate({'opacity': '.9'}, 1000);
				//show x and clickable "exit" background
				$('.x,#background').show();
				//test whether arrows should appear or not
				testArrows();
			}, 100)
		})
	}
	/*
	$('.img-view-container').css({'width': $('.animate-inner-container').css('width'),
									'height': $('#body-lower').css('height')});
	*/
	
	
	$('.img-view').each(function() {
		
		$(this).load(function() {
			
			centerImg($(this));

		})
	})
	
	//change width of animate-slide-inner to match the width of viewing screen
	$('.animate-slide-inner').css('width',$('#body-lower').css('width'));
	
	//change width of animate outer to exactly match number of pictures
	//so animateSlide on base.js works properly
	setTimeout(function() {
				
				/* IF ISSUES ARISE FOR ARROWS DISAPPEARING BEFORE END OF SLIDESHOW, LOOK TO THE LAST PART OF THIS VAR AS THE CULPRIT */
				var width = ($('.animate-slide-inner').width() * (fileArray.length + 1)) + (1 * fileArray.length);
				$('.animate-slide-outer').css('width', width);
				
				
	}, 2000);
	
									
	$('.animate-slide-outermost').css('z-index','5');
	
	//change number of slides and indicators
	numSecondarySlides = $('.animate-slide-inner').length;
	
	
	pageIndicators('second');
	
	
}


function centerImg(element) {
				
			if(element.is('.img-view-first')){
				element.css('opacity','0');
				return;
			}
			
			var left = ($('#body-lower').width() - (element.width()))/2;
	
			
			element.css('margin-left',left + 'px')
						

}
		