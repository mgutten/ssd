<?php

require_once($_SERVER['DOCUMENT_ROOT'] . '/includes/head.php');

$head = new Head('Video');
echo $head->script('jwplayer/jwplayer');
echo $head->script('video');

$head->close();

$body = new Body();
$body->lower();
?>


<img src='/images/video/back.jpg' class='img-back' />


<div class='body-text-back' id='video-text'>
    
    	<p class='body-text text'>
       		At SSD we believe our first responsibility is to our clients who use our furniture and services.
            In meeting their needs everything we do must be of the highest quality.
        </p>
        
</div>

<img src='/images/video/play-button.png' class='video-play-button margin-resize' />






<div id='jwplayer'></div>
 

<!--

<div class="flowplayer is-splash" >
   <video src="/test.ogg"></video>
</div>
-->
