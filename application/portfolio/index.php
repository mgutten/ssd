<?php
//require_once($_SERVER['DOCUMENT_ROOT'] . '/application/portfolio/' . $_GET['page'] . '/index.php');
require_once($_SERVER['DOCUMENT_ROOT'] . '/includes/head.php');

$head = new Head('Portfolio');
echo $head->script('scroll');
$head->close();

$body = new Body('true');
$body->lower();
?>

<div id='animate-outer-container' class='animate-outer-container'>

	<div id='animate-inner-container1' class='animate-inner-container'>

        <div class='img-back-portfolio-container'><img src="/images/portfolio/Portfolio_01.jpg" class='img-back img-back-portfolio whiteout' text='BELVEDERE VILLA'/></div>
        <div class='img-back-portfolio-container'><img src="/images/portfolio/Portfolio_02.jpg" class='img-back-portfolio whiteout' text='LOIRE COUNTRY HOUSE'/></div>
        <div class='img-back-portfolio-container'><img src="/images/portfolio/Portfolio_03.jpg" class='img-back-portfolio whiteout' text='PRESIDIO HEIGHTS RESIDENCE'/></div>
    
    </div>
    <div id='animate-inner-container2' class='animate-inner-container'>

        <div class='img-back-portfolio-container'><img src="/images/portfolio/Portfolio_04.jpg" class='img-back-portfolio whiteout' text="PARIS PIED-&Aacute-TERRE"/></div>
        <div class='img-back-portfolio-container'><img src="/images/portfolio/Portfolio_05.jpg" class='img-back-portfolio whiteout' text='SAN FRANCISCO MANSION'/></div>
        <div class='img-back-portfolio-container'><img src="/images/portfolio/Portfolio_06.jpg" class='img-back-portfolio whiteout' text='BEACH HOUSE' /></div>
    
    </div>
	<div id='animate-inner-container3' class='animate-inner-container'>

        <div class='img-back-portfolio-container'><img src="/images/portfolio/Portfolio_07.jpg" class='img-back-portfolio whiteout' text='MARIN RESIDENCE'/></div>
        <div class='img-back-portfolio-container'><img src="/images/portfolio/Portfolio_08.jpg" class='img-back-portfolio whiteout' text='SAUSALITO RESIDENCE'/></div>
        <div class='img-back-portfolio-container'><img src="/images/portfolio/Portfolio_09.jpg" class='img-back-portfolio whiteout' text='PIEDMONT MANOR'/></div>
    
    </div>
    <div id='animate-inner-container4' class='animate-inner-container'>

        <div class='img-back-portfolio-container'><img src="/images/portfolio/Portfolio_10.jpg" class='img-back-portfolio whiteout' text='SAN FRANCISCO LOFT'/></div>
        <div class='img-back-portfolio-container'><img src="/images/portfolio/Portfolio_12.jpg" class='img-back-portfolio whiteout' text='SONOMA SUMMER HOUSE'/></div>
        <div class='img-back-portfolio-container'><img src="/images/portfolio/Portfolio_11.jpg" class='img-back-portfolio whiteout' id='img-back-portfolio-last' text="FISHERMAN'S COTTAGE" 
        onload="sequentialFade('.img-back-portfolio',500)"/></div>
    
    </div>
    
</div>

<div id='hover-text'>
	<div class='hover-text text'>
    </div>
</div>

