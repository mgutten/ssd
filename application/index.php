<?php

require_once($_SERVER['DOCUMENT_ROOT'] . '/includes/head.php');

$head = new Head('Home');
echo $head->style('home');
echo $head->script('home');
$head->close();

$body = new Body();
$body->lower();

//cancel animation if already seen it
if(!empty($_SESSION['animation']))
	echo "<span id='animation-clearance' class='nope'></span>";
?>

<img src='/images/home/fade0.jpg' id='home-img-shown' class='img-back'/>
<img src='/images/home/fade1.jpg' id='home-img-hidden' class='img-back'/>

<div id='animation-container' class='animation'>

	<div id='animation-container-inner' class='animation'>
        <p class='animation-text text' id='animation-text1' class='animation'>
            SHUBEL
        </p>
        <p class='animation-text text' id='animation-text2' class='animation'>
            STEPHEN
        </p>
    </div>
        

</div>

<img src='/images/home/animation_logo.jpg' id='animation-logo' />

<?php
$body->close();

//set session so animation only happens when first come to site
$_SESSION['animation'] = true;
