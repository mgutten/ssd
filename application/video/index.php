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


<div class='img-back' id='video-img'>
	<div class='video-play-button'>
    </div>

</div>

<div id='jwplayer'></div>
 
<script type='text/javascript'>
  jwplayer('jwplayer').setup({
    'flashplayer': 'player.swf',
    'file': '/test.ogg',
    'controlbar': 'over',
    'width': '1100',
    'height': '700',
	'icons': false,
	'skin': '/js/jwplayer/simple.zip'	
  });
</script>

<!--

<div class="flowplayer is-splash" >
   <video src="/test.ogg"></video>
</div>
-->
