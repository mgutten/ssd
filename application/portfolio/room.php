<?php
//require_once($_SERVER['DOCUMENT_ROOT'] . '/application/portfolio/' . $_GET['page'] . '/index.php');
require_once($_SERVER['DOCUMENT_ROOT'] . '/includes/head.php');

$head = new Head('Portfolio By Room');
echo $head->script('scroll');
$head->close();

$body = new Body('true');
$body->lower();
?>
<div id='animate-outer-container' class='animate-outer-container-room'>

	<div id='animate-inner-container1' class='animate-inner-container-room animate-inner-container'>

        <div class='img-back-room-container'><img src="/images/room/rooms_01.jpg" class='img-back img-back-room whiteout-more whiteout' text='BEDROOMS'/></div>
        <div class='img-back-room-container'><img src="/images/room/rooms_02.jpg" class='img-back-room whiteout-more whiteout' text='DETAILS'/></div>
        <div class='img-back-room-container'><img src="/images/room/rooms_03.jpg" class='img-back img-back-room whiteout-more whiteout' text='DINING ROOMS'/></div>
        <div class='img-back-room-container'><img src="/images/room/rooms_04.jpg" class='img-back-room whiteout-more whiteout' text='BATHROOMS'/></div>
        <div class='img-back-room-container'><img src="/images/room/rooms_05.jpg" class='img-back img-back-room whiteout-more whiteout last-column' text='STAIRS/FOYERS'/></div>
        <div class='img-back-room-container'><img src="/images/room/rooms_06.jpg" class='img-back-room whiteout-more whiteout' text='KITCHENS'/></div>
        <div class='img-back-room-container'><img src="/images/room/rooms_07.jpg" class='img-back img-back-room whiteout-more whiteout' text='MEDIA/GAME ROOMS/GYMS'/></div>
        <div class='img-back-room-container'><img src="/images/room/rooms_08.jpg" class='img-back-room whiteout-more whiteout' text='LIVING ROOMS'/></div>
        <div class='img-back-room-container'><img src="/images/room/rooms_09.jpg" class='img-back-room whiteout-more whiteout' text='OUTDOOR SPACES'/></div>
        <div class='img-back-room-container'><img src="/images/room/rooms_10.jpg" class='img-back-room whiteout-more whiteout' text='STUDIES'/ onload="sequentialFade('.img-back-room',300)"></div>
        
    </div>
</div>


<?php

$slideshow = new Slideshow();
$slideshow->create();
?>

<div id='hover-text'>
	<div class='hover-text text hover-text-small'>
    
    </div>
</div>

<img src='/images/loading/loader.gif' class='hidden loading' />
