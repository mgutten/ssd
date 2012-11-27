// video javascript
var playerMarginTop;
var playerHeight;
var playerWidth;
//loaded var to determine when jwplayer is done loading
var loaded = false;
var stretch;


$(function() {
	
	//temporary fix for old versions of internet explorer (not fully debugged for launch)
	if($.browser.msie && parseInt($.browser.version, 10) <= 8) {
    	
		window.location='/error';
			
	} 

	
	originalMargin = 0;
	//find starting positions for player add 10 px to fix layout bug
	//playerHeight = Math.round(getOriginalHeightOfImg());
	//playerWidth = (playerHeight) * 1200/700;
	//playerMarginTop = playerHeight;
		
	
	if($.browser.msie)
		var stretch = 'none';
	else
		var stretch = 'exactfit';
	
	//create jwplayer
	jwplayer('jwplayer').setup({
		modes: [ 
		{type: 'html5'},
        {type: 'flash', src: '/js/jwplayer/player.swf'},
        {type: 'download'} 
		] ,
		levels: [
					{ file: '/finishing_touches.webm'},
					{ file: '/finishing_touches.mp4' }
				  
    			],
		controlbar: 'over',
		width: '100%',
		height: '100%',
		stretching: stretch,
		icons: false,
		skin: '/js/jwplayer/simple.zip'
		
  	});	
	
	//allow player to load then move to under img
	setTimeout(function() {
			loaded = true;
			document.getElementById('jwplayer').originalMargin = 0;
			//marginSize($('#jwplayer'));
			//$('#jwplayer').css('margin-top','-' + playerMarginTop + 'px');
			
	},1500);
		
	
	//when click customized play button, move player forward
	//and start movie		
	$('.video-play-button').click(function() {
		
		//if player not loaded, do not do anything
		if(loaded == false)
			return;
			
		$('#jwplayer').css({'z-index':'200','display':'block'})

		jwplayer().play();
			

	})
	
	
	marginSize($('.video-resize'));
	
	 $(window).resize(function()
	{
		
		resizeVideo();
		//marginSize($('#jwplayer'));
		//marginSize($('.video-resize'));
       
    })
	
	
	
});


function resizeVideo() {
	
	//resize video height on page resize
	$('#jwplayer').css('height',$('.img-back').height());
}

		
		