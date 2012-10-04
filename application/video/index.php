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
<img src='/images/video/play-button.png' class='video-play-button video-resize' />

<div class='body-text-back video-resize' id='video-text'>
    
    	<p class='body-text text larger-line'>
       		<span class='larger-text'>A</span>T <span class='larger-text'>SSD</span> WE BELIEVE OUR FIRST RESPONSIBILITY IS
             TO OUR CLIENTS WHO USE OUR FURNITURE AND SERVICES.
            IN MEETING THEIR NEEDS EVERYTHING WE DO MUST BE OF THE HIGHEST QUALITY.
        </p>
        
</div>




<div id='jwplayer'></div>
 

<!--

<div class="flowplayer is-splash" >
   <video src="/test.ogg"></video>
</div>
-->
