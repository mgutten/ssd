<?php
header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date in the past


require_once($_SERVER['DOCUMENT_ROOT'] . '/includes/head.php');

$head = new Head('Home');
echo $head->style('home');
echo $head->script('home');
$head->close();

$body = new Body();
$body->lower();



//cancel animation if already seen it
if(@strpos($_SERVER['HTTP_REFERER'],'stephenshubel') !== false && @strpos($_SERVER['HTTP_REFERER'],'google') == false )
	echo "<span id='animation-clearance' class='nope'></span>";
?>

<img src='/images/home/home_01.jpg' id='home-img-shown' class='img-back'/>
<img src='/images/home/home_02.jpg?<?php echo microtime(true);?>' id='home-img-hidden' class='img-back'/>

<?php

$body->close();

?>

<div id='animation-container' class='animation'>

	<div id='animation-container-inner' class='animation'>
        <img src='/images/home/animation_shubel.png' class='animation-text animation' id='animation-text1' >

        <img src='/images/home/animation_stephen.png' class='animation-text animation' id='animation-text2' >

    </div>
        

</div>


<img src='/images/nav/logo.png' id='animation-logo' />

<img src='/images/home/home_01.jpg' class='hidden' />
<img src='/images/home/home_02.jpg' class='hidden' />
<img src='/images/home/home_03.jpg' class='hidden' />
<img src='/images/home/home_04.jpg' class='hidden' />
<img src='/images/home/home_05.jpg' class='hidden' />
<img src='/images/home/home_06.jpg' class='hidden' />
<img src='/images/home/home_07.jpg' class='hidden' />
<img src='/images/home/home_08.jpg' class='hidden' />
<img src='/images/home/home_09.jpg' class='hidden' />
<img src='/images/home/home_10.jpg' class='hidden' />
<img src='/images/home/home_11.jpg' class='hidden' />
<img src='/images/home/home_12.jpg' class='hidden' />
<img src='/images/home/home_13.jpg' class='hidden' />
<img src='/images/home/home_14.jpg' class='hidden' />
<img src='/images/home/home_15.jpg' class='hidden' />
<img src='/images/home/home_16.jpg' class='hidden' />
<img src='/images/home/home_17.jpg' class='hidden' />
<img src='/images/home/home_18.jpg' class='hidden' />



