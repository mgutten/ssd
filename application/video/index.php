<?php

require_once($_SERVER['DOCUMENT_ROOT'] . '/includes/head.php');

$head = new Head('Video');
echo $head->script('jwplayer/jwplayer');
echo $head->style('video');
echo $head->script('video');

$head->close();

$body = new Body();
$body->lower();
?>


<img src='/images/video/back.jpg' class='img-back' />
	<div class='video-play-button'>
    </div>



<div id='jwplayer'></div>
 

<!--

<div class="flowplayer is-splash" >
   <video src="/test.ogg"></video>
</div>
-->
