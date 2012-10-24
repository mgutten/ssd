// portfolio and press javascript


$(function() {
	
	/* center img onclick portfolio */
	$('.whiteout').click(function() {
		if(loadedFade === false || running == true || sliding == true || viewing == true)
			return;
		
		//remove whiteout class so does not fade out
		$(this).removeClass('whiteout').addClass('whiteout-selected');
		
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
			var top = $(this).offset().top + 'px';
			var left = $(this).offset().left + 'px';
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
	$('.x').click(function() {
		
		//remove selected image class
		$('.whiteout-selected').removeClass('whiteout-selected').addClass('whiteout');
		//show main slide
		$('.whiteout').animate({'opacity':'1'},400);
		
		//delete all imgs in animate-slide-outer, reset to starting point
		$('.animate-slide-outer').html('')
								.css('margin-left','0px');
		
		//move animate-slide behind 
		$('.animate-slide-outermost').css('z-index','-1');
		
		//change background to clear
		$('.animate-inner-container').css('background','none')
		
		//reset indicators
		pageIndicators('main');
		
		//hide x
		$('.x').hide();
		
		//proceed with regular viewing
		viewing = false;
	})
	
	
	
	
	$('.indicator').live('click',function() {

		$(this).parent().siblings('.arrow').trigger('click');
	});
	

	/* changes made on window load */
	$(window).load(function() {
		
		windowLoad();

	})
	

	
});



//alignment and sizing function for window.load and window.resize
function windowLoad() {
	
		//make container fixed height of children
		$('.img-back-portfolio-container,.img-back-press-container').each(function() {
			$(this).css('height', $(this).children().height())
		})
		
		//set number of main slides as var
		numMainSlides = $('.animate-inner-container').length;
		
		pageIndicators('main');			
		
		$('.animate-slide-outer').css({'height': $('#body-lower').css('height'),
										'width': ($('.animate-inner-container').width() * 20) + 'px'})
										
		$('.animate-slide-outermost').css({'height': $('#body-lower').css('height'),
											'width': $('#body-lower').css('width'),
											'top': $('#body-lower').offset().top,
											'left': $('#body-lower').offset().left})
											
		//position x for exiting slideshow
		var left = $('#body-lower').offset().left + $('#body-lower').width() - 20;
		$('.x').css({'top': $('#body-lower').offset().top + 5,
						'left': left});
						
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
		
		$('#next-arrow-container').append(block);
		
		//find margin top for indicator container based on next-arrow height (should be below middle arrow so minus 20)
		var marginTop = (($('#next-arrow-container').height()/2) - 10) * -1 + 'px';
		$('#indicator-container').css({'margin-top': marginTop,
										'width': $('#next-arrow-container').width()})
		//center indicators
										
		var marginLeft = Math.floor(($('#next-arrow-container').width() - $('.indicator').width())/2);	
		$('.indicator').css('margin-left', marginLeft);
		
		
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
			
			var left = ($(window).width() - (imgRatio * $('#body-lower').height()))/2;
		}
		else
			var left = ($(window).width() - (element.width()))/2;
		
		
		$('.whiteout').animate({'opacity':'0'},{duration:600,queue:false});
		
		//change background color #fffbef
		//$('.animate-inner-container').css('background','#000')
									
		//animate img to full opacity
		element.animate({'opacity':'1'},{duration:600,queue:false});
		//at same time move to middle of screen
		element.css({'height': element.css('height'),
						'width': 'auto',
						'top':element.offset().top,
						'left':element.offset().left,
						'position':'absolute'})
					.animate({'left':left + 'px',
								'top': $('#body-lower').offset().top,
								'height': $('#body-lower').height()
							},{duration:1000,queue:false,complete: function() {
									//on complete of animate, fade in copy of first image
									$('#animate-slide-inner-first').css('opacity','1')
									element.css({'opacity':'0',
													'position':'static',
													'width':element.parent().width(),
													'height': element.parent().height()})
									$('.x').show();
													
									
								}
							});
							
							
		
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
	
	for(i = 0; i < fileArray.length; i++){
		
		if(i == 0){
			//first page is cover img
			block = "<div class='animate-slide-inner animate-slide' id='animate-slide-inner-first'><img src='" + $('.whiteout-selected').attr('src') + "' class='img-view' /></div>"
			
		}
		else
			block = "";
		
		block += "<div class='animate-slide-inner animate-slide'><img src='" + fileArray[i] + "' class='img-view' /></div>";
		
		
		$('.animate-slide-outer').append(block);
		
	}
	
	/*
	$('.img-view-container').css({'width': $('.animate-inner-container').css('width'),
									'height': $('#body-lower').css('height')});
	*/
	
	//change width of animate-slide-inner to match the width of viewing screen
	$('.animate-slide-inner').css('width',$('#body-lower').css('width'));

	
	$('.img-view').each(function() {
		
		$(this).load(function() {
			
			if($(this).is('.img-view-first')){
				$(this).css('opacity','0');
				return;
			}
			
			var left = ($('#body-lower').width() - ($(this).width()))/2;
	
			
			$(this).css('margin-left',left + 'px')
			

		})
	})
	
	//change width of animate outer to exactly match number of pictures
	//so animateSlide on base.js works properly
	setTimeout(function() {
				
				/* IF ISSUES ARISE FOR ARROWS DISAPPEARING BEFORE END OF SLIDESHOW, LOOK TO THE LAST PART OF THIS VAR AS THE CULPRIT */
				var width = ($('.animate-slide-outermost').width() * (fileArray.length + 1)) + (1 * fileArray.length);
				$('.animate-slide-outer').css('width', width);
				
				
	}, 2000);
	
									
	$('.animate-slide-outermost').css('z-index','5');
	
	//change number of slides and indicators
	numSecondarySlides = $('.animate-slide-inner').length;
	
	
	pageIndicators('second');
	
	
}
		
		

