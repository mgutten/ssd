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

        <img src="/images/portfolio/1/portfolio_01.jpg" class='img-back img-back-portfolio' />
        <img src="/images//portfolio/1/portfolio_02.jpg" class='img-back-portfolio' />
        <img src="/images//portfolio/1/portfolio_03.jpg" class='img-back-portfolio' />
    
    </div>
    <div id='animate-inner-container2' class='animate-inner-container'>

        <img src="/images/portfolio/2/portfolio_04.jpg" class='img-back img-back-portfolio' />
        <img src="/images//portfolio/2/portfolio_05.jpg" class='img-back-portfolio' />
        <img src="/images//portfolio/2/portfolio_06.jpg" class='img-back-portfolio' />
    
    </div>
	<div id='animate-inner-container3' class='animate-inner-container'>

        <img src="/images/portfolio/3/portfolio_07.jpg" class='img-back img-back-portfolio' />
        <img src="/images//portfolio/3/portfolio_08.jpg" class='img-back-portfolio' />
        <img src="/images//portfolio/3/portfolio_09.jpg" class='img-back-portfolio' />
    
    </div>
    <div id='animate-inner-container4' class='animate-inner-container'>

        <img src="/images/portfolio/4/portfolio_10.jpg" class='img-back img-back-portfolio' />
        <img src="/images//portfolio/4/portfolio_11.jpg" class='img-back-portfolio' />
        <img src="/images//portfolio/4/portfolio_12.jpg" class='img-back-portfolio' />
    
    </div>
    
</div>

