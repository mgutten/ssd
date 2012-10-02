// video javascript
var playerMarginTop;
var playerHeight;
var playerWidth;


$(function() {
	
	originalMargin = 0;
	//find starting positions for player
	playerHeight = getOriginalHeightOfImg();
	playerWidth = playerHeight * 1200/700;
	playerMarginTop = playerHeight;
	
	
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
		'controlbar': 'over',
		'width': playerWidth,
		'height': playerHeight,
		'icons': false,
		'skin': '/js/jwplayer/simple.zip',
		stretching: 'exactfit'
  	});	
	
	//allow player to load then move to under img
	setTimeout(function() {
			
			marginSize($('#jwplayer'));
			
	},800);
		
	
	//when click customized play button, move player forward
	//and start movie		
	$('.video-play-button').click(function() {

		$('#jwplayer').css({'z-index':'1','display':'block'})

		jwplayer().play();
			

	})
	
	 $(window).resize(function()
	{
		marginSize($('#jwplayer'));
       
    })
	
	
	
});


		
		