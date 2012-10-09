// portfolio and press javascript




$(function() {
	
	/* center img onclick portfolio */
	$('.whiteout').click(function() {
		if(loadedFade === false || running == true || sliding == true || viewing == true)
			return;
		
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
	
	
	
	
	/* changes made on window load */
	$(window).load(function() {
		//make container the height of children
		$('.img-back-portfolio-container,.img-back-press-container').each(function() {
			$(this).css('height', $(this).children().height())
		})
		
		$('.animate-slide-outer').css({'height': $('#body-lower').css('height'),
										'width': ($('.animate-inner-container').width() * 20) + 'px',
										'top': $('#body-lower').offset().top,
										'left': $('#body-lower').offset().left})

	})
	
});


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
		
		
		//remove whiteout class so does not fade out
		element.removeClass('whiteout').addClass('whiteout-selected img-view');
		$('.whiteout').animate({'opacity':'0'},{duration:600,queue:false});
		//change background color
		$('.animate-inner-container').css('background','#000')
									
		//animate img to full opacity
		element.animate({'opacity':'1'},{duration:600,queue:false});
		//at same time move to middle of screen
		element.css({'height': element.css('height'),
						'width': 'auto',
						'top':element.offset().top,
						'left':element.offset().left,
						'position':'absolute'})
					.animate({'left':left,
								'top': $('#body-lower').offset().top,
								'height': $('#body-lower').height()
							},{duration:1000,queue:false});
							
		
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
	
	for(i = fileArray.length - 1; i >= 0; i--){
		
		var block = "<div class='animate-slide-inner'><img src='" + fileArray[i] + "' class='img-view' /></div>";
		
		$('.animate-slide-outer').append(block);
		
	}
	
	/*
	$('.img-view-container').css({'width': $('.animate-inner-container').css('width'),
									'height': $('#body-lower').css('height')});
	*/
	
	$('.img-view').each(function() {
		

		var left = ($('#body-lower').width() - ($(this).width()))/2;

		
		$(this).css({'left':'300px'})
	})
									
	$('.animate-slide-outer').css('z-index','5');
	
	
}
		
		

