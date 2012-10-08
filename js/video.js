// video javascript
var playerMarginTop;
var playerHeight;
var playerWidth;
//loaded var to determine when jwplayer is done loading
var loaded = false;
var stretch;


$(function() {
	
	originalMargin = 0;
	//find starting positions for player add 10 px to fix layout bug
	playerHeight = Math.round(getOriginalHeightOfImg()) + 20;
	playerWidth = (playerHeight - 20) * 1200/700;
	playerMarginTop = playerHeight;
		
	
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
		width: playerWidth,
		height: playerHeight,
		stretching: stretch,
		icons: false,
		skin: '/js/jwplayer/simple.zip'
		
  	});	
	
	//allow player to load then move to under img
	setTimeout(function() {
			loaded = true;
			document.getElementById('jwplayer').originalMargin = 0;
			marginSize($('#jwplayer'));
			$('#jwplayer').css('margin-top','-' + playerMarginTop + 'px');
			
	},1500);
		
	
	//when click customized play button, move player forward
	//and start movie		
	$('.video-play-button').click(function() {
		
		//if player not loaded, do not do anything
		if(loaded == false)
			return;
			
		$('#jwplayer').css({'z-index':'1','display':'block'})

		jwplayer().play();
			

	})
	
	
	marginSize($('.video-resize'));
	
	 $(window).resize(function()
	{
		marginSize($('#jwplayer'));
		marginSize($('.video-resize'));
       
    })
	
	
	
});


		
		