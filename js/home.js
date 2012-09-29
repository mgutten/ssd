// home animations

//array of images to be displayed (.jpg)
var imgs = new Array('fade0',
					'fade1',
					'fade2',
					'fade3');
//cur_img refers to hidden back img
var cur_img = 0;	
//page used to determine img location
var page = 'home';				

var timeout;
//is animation running?
var animation;

$(function() {
	
	//if animation already seen, then skip to regular home
	if($('#animation-clearance').attr('class') !== 'nope' &&
			!($.browser.msie && $.browser.version == "6.0")){
		
		animation = true;
		textMove();
		
	}
	else {
		
		$('.animation,#animation-logo').hide();
		$('.nav,.img-back,.nav-bold,#logo').css({'opacity':'1'});
		setFade();
	}
	
	//pause image scrolling while browser is elsewhere
	$(window).focus(function() {
		
		if(timeout == 0 && animation == false){
				
				setFade()
			}
	});
		
	$(window).blur(function() {
			clearInterval(timeout);
			timeout = 0;
	});

	
})

//animate text
function textMove() {
		setTimeout(function() {
				$('#animation-text1').animate({'margin-left':'200px'},5800);
				$('#animation-text2').animate({'margin-left':'-1420px'},5800);
			}, 500);
		
		setTimeout(function() {
				fadeIn();
			}, 5800);	
}

//fade large center logo in 
function fadeIn() {
	
	$('#animation-logo').animate({'opacity':'1'},700);
	
	setTimeout(function() {
			
			moveLogo();
			
		}, 1200);
		
}

//move and shrink logo
function moveLogo() {
	
	var top = parseInt($('#logo').offset().top,10) - parseInt($('#animation-logo').css('margin-top'),10) + 'px';
	var left = parseInt($('#logo').offset().left,10) - parseInt($('#animation-logo').css('margin-left'),10)  + 'px';
	
	$('#animation-logo').animate({'width':'280px',
									'height':'35px',
									'top':top,
									'left':left}, 3000);
									
	setTimeout(function() {
			fadeDocument();
		}, 3100);
									
}

//fade whole document in
function fadeDocument() {
	$('.nav,#home-img-shown,.nav-bold,#logo').animate({'opacity':'1'},700);
	$('.animation').hide();
	
	setTimeout(function() {
			$('#animation-logo').hide();
			$('#home-img-hidden').css('opacity','1');
		}, 705);
		
	animation = false;
	
	setTimeout(function() {
			setFade();
		}, 4000);
}

//set fade effect for changing of images in imgs array
function setFade() {
	
	timeout = setInterval(function() {
					
					imgFade();
				}, 4000);
}

function imgFade() {
	
	//fade out shown picture
	$('#home-img-shown').animate({'opacity':'0'},700);
	
	//change src to same as one showing
	setTimeout(function() {
			$('#home-img-shown').attr('src',$('#home-img-hidden').attr('src'))
								.css('opacity','1')
	},740);
	
	//change hidden src to next pic
	if(cur_img + 1 == imgs.length)
		cur_img = 0;
	else
		cur_img++;
	
	var next_img = imgs[cur_img] ;
	$('#home-img-hidden').attr('src','/images/' + page + '/' + next_img + '.jpg');
			
				
}