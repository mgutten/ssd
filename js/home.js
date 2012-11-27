// home animations

//array of images to be displayed (.jpg)
var imgs = new Array('home_01',
					'home_02',
					'home_03',
					'home_04',
					'home_05',
					'home_06',
					'home_07',
					'home_08',
					'home_09',
					'home_10',
					'home_11',
					'home_12',
					'home_13',
					'home_14',
					'home_15',
					'home_16',
					'home_17',
					'home_18'
							);
//cur_img refers to hidden back img
var cur_img = 0;	
//page used to determine img location
var page = 'home';				

var timeout;
//is animation running?
var animation = false;

$(function() {
	

	//if animation already seen, then skip to regular home
	if($('#animation-clearance').attr('class') == 'nope' ||
			($.browser.msie && $.browser.version == "6.0")){
		
			
		$('.animation,#animation-logo').hide();
		$('.nav,.img-back,.nav-bold,#logo,#copyright').css({'opacity':'1'});

		setFade();
		
	}
	else {
		
		/* IE fix for non firing "onload" event */
		
		$('.hidden:last').attr('src',$('.hidden:last').attr('src'));
		
		animation = true;
		/*$('.hidden:last').load(function() {
			textMove();
		})
		*/
		
		$(window).load(function() {
			textMove();
		})
		
		
	}
	
	/* SAFARI AND IE FIX for jumping images on homepage */
	if(navigator.userAgent.indexOf("Safari") > -1 ||
			$.browser.msie){
		//marginSize($('#home-img-hidden'))
	}
	
	//pause image scrolling while browser is elsewhere
	$(window).focus(function() {
		if(timeout == 0 && animation == false)
				setFade()
	});
		
	$(window).blur(function() {
			clearInterval(timeout);
			timeout = 0;
	});

	
})

//animate text
function textMove() {
		setTimeout(function() {
				$('#animation-text1').animate({'margin-left':'300px'},6800);
				$('#animation-text2').animate({'margin-left':'-2800px'},6800);
			}, 500);
		
		setTimeout(function() {
				fadeIn();
			}, 6800);	
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
	
	$('#animation-logo').animate({//'width':'350px',
									//'height':'30px',
									'top':top,
									'left':left}, 3000);
									
	setTimeout(function() {
			fadeDocument();
		}, 3100);
									
}

//fade whole document in
function fadeDocument() {
	$('.nav,#home-img-shown,.nav-bold,#logo,#copyright').animate({'opacity':'1'},700);
	$('.animation').hide();
	
	setTimeout(function() {
			$('#animation-logo').hide();
			$('#home-img-hidden').css('opacity','1');
		}, 705);
		
	animation = false;
	

	setFade();

}

//set fade effect for changing of images in imgs array
function setFade() {
	
	timeout = setInterval(function() {
					imgFade();
				}, 4000);
}

function imgFade() {

	animation = true;
	
	//fade out shown picture
	$('#home-img-shown').animate({'opacity':'0'},700);
	
	//change src to same as one showing
	setTimeout(function() {
			$('#home-img-shown').attr('src',$('#home-img-hidden').attr('src'))
								
			animation = false;
			setTimeout(function() {
				$('#home-img-shown').css('opacity','1')
				}, 2000);
	},780);
	
	//change hidden src to next pic
	if(cur_img + 1 == imgs.length)
		cur_img = 0;
	else
		cur_img++;
	
	var next_img = imgs[cur_img] ;
	$('#home-img-hidden').attr('src','/images/' + page + '/' + next_img + '.jpg');
			
				
}