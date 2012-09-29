<?php

require_once($_SERVER['DOCUMENT_ROOT'] . '/includes/head.php');

$head = new Head('Video');
echo $head->style('video');
echo $head->script('video');
echo $head->script('flowplayer/flowplayer.min');
echo $head->style('http://releases.flowplayer.org/5.0.0/skin/minimalist');
$head->close();

$body = new Body();
$body->lower();
?>

<div class='img-back' id='video-img'>
	<div class='video-play-button'>
    </div>

</div>

<div class="flowplayer is-splash" >
   <video src="/test.ogg"></video>
</div>
