<?php
//require_once($_SERVER['DOCUMENT_ROOT'] . '/application/portfolio/' . $_GET['page'] . '/index.php');
require_once($_SERVER['DOCUMENT_ROOT'] . '/includes/head.php');

$head = new Head('Portfolio');
$head->close();

$body = new Body('true');
$body->lower();
?>

<div id='animate-outer-container'>
	<div id='animate-inner-container1' class='animate-inner-container'>

        <img src="/images/portfolio/1/portfolio_01.jpg" class='img-back img-back-portfolio whiteout' text='BELVEDERE VILLA'/>
        <img src="/images//portfolio/1/portfolio_02.jpg" class='img-back-portfolio whiteout' text='LOIRE COUNTRY HOUSE'/>
        <img src="/images//portfolio/1/portfolio_03.jpg" class='img-back-portfolio whiteout' text='PRESIDIO HEIGHTS RESIDENCE'/>
    
    </div>
    <div id='animate-inner-container2' class='animate-inner-container'>

        <img src="/images/portfolio/2/portfolio_04.jpg" class='img-back-portfolio whiteout' text="PARIS PIED'A'TERRE"/>
        <img src="/images//portfolio/2/portfolio_05.jpg" class='img-back-portfolio whiteout' text='SAN FRANCISCO MANSION'/>
        <img src="/images//portfolio/2/portfolio_06.jpg" class='img-back-portfolio whiteout' text='NORTH BAY BEACH HOUSE' />
    
    </div>
	<div id='animate-inner-container3' class='animate-inner-container'>

        <img src="/images/portfolio/3/portfolio_07.jpg" class='img-back-portfolio whiteout' text='MARIN RESIDENCE'/>
        <img src="/images//portfolio/3/portfolio_08.jpg" class='img-back-portfolio whiteout' text='SAUSALITO RESIDENCE'/>
        <img src="/images//portfolio/3/portfolio_09.jpg" class='img-back-portfolio whiteout' text='PIEDMONT MANOR'/>
    
    </div>
    <div id='animate-inner-container4' class='animate-inner-container'>

        <img src="/images/portfolio/4/portfolio_10.jpg" class='img-back-portfolio whiteout' text='SAN FRANCISCO LOFT'/>
        <img src="/images//portfolio/4/portfolio_12.jpg" class='img-back-portfolio whiteout' text='SONOMA SUMMER HOUSE'/>
        <img src="/images//portfolio/4/portfolio_11.jpg" class='img-back-portfolio whiteout' id='img-back-portfolio-last' text='NORTH BAY COTTAGE' onload="sequentialFade('.img-back-portfolio',500)"/>
    
    </div>
    
</div>

<div id='hover-text'>
	<div class='hover-text text'>
    </div>
</div>

