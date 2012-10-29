<?php
//require_once($_SERVER['DOCUMENT_ROOT'] . '/application/portfolio/' . $_GET['page'] . '/index.php');
require_once($_SERVER['DOCUMENT_ROOT'] . '/includes/head.php');

$head = new Head('Portfolio By Project');
echo $head->script('scroll');
$head->close();

$body = new Body('true');
$body->lower();
?>

<div id='animate-outer-container' class='animate-outer-container'>

	<div id='animate-inner-container1' class='animate-inner-container'>

        <div class='img-back-portfolio-container'><img src="/images/portfolio/portfolio_01.jpg" class='img-back img-back-portfolio whiteout' text='BELVEDERE VILLA'/></div>
        <span class='hidden portfolio-text'>This European-style residence has strong Mediterranean influences and is bathed in hues of saffron, terracotta and ocher.  
        The design focuses on the enjoyment of the finer things in life and includes a chef inspired kitchen, relaxing spa, media room, and a sumptuous bedroom.
        </span>
        
        <div class='img-back-portfolio-container'><img src="/images/portfolio/portfolio_02.jpg" class='img-back-portfolio whiteout' text='LOIRE COUNTRY HOUSE'/></div>
        <span class='hidden portfolio-text'>This 16th century townhouse in the Loire Valley of France was designed to serve as a place to rest and nourish 
        the creative mind of the decorator abroad.  The country retreat features California casual treatment of classic French style. 
        </span>
        
        <div class='img-back-portfolio-container'><img src="/images/portfolio/portfolio_03.jpg" class='img-back-portfolio whiteout' text='PRESIDIO HEIGHTS RESIDENCE'/></div>
        <span class='hidden portfolio-text'>This Edwardian style residence located in San Francisco's Presidio Heights was designed to reflect the client's personal 
        fashion and creative styles.  By combining bold patterns and fresh colors with an eclectic mix of furniture, Stephen Shubel was able to create a runway ready interior.
        </span>
    
    </div>
    <div id='animate-inner-container2' class='animate-inner-container'>

        <div class='img-back-portfolio-container'><img src="/images/portfolio/portfolio_04.jpg" class='img-back-portfolio whiteout' text="PARIS PIED-&Aacute-TERRE"/></div>
        <span class='hidden portfolio-text'>
        This Marais district pied-&aacute;-terre, just steps from the Place des Vosges, is over 400 years old.  It has been transformed into a luxurious warehouse perfect for travel decompression and antique 
        storage.  The atelier functions as a design studio, living room, dining room, and bedroom. The tiny 400-square-foot space also functions as a showroom for flea market treasures coming and going 
        with every sale.  
        </span>
        <div class='img-back-portfolio-container'><img src="/images/portfolio/portfolio_05.jpg" class='img-back-portfolio whiteout' text='SAN FRANCISCO MANSION'/></div>
        <span class='hidden portfolio-text'>
        Originally built in 1910, this former Russian consulate is now an elegant San Francisco family residence.  Stephen Shubel worked closely with the architect and client to breath new life into the 
        Neoclassical Revival beauty.  The home includes seven bedrooms, eleven bathrooms, three dining rooms, a wine cellar, media room, full size indoor basketball court, and a top floor penthouse suite.
        </span>        
        <div class='img-back-portfolio-container'><img src="/images/portfolio/portfolio_06.jpg" class='img-back-portfolio whiteout' text='BEACH HOUSE' /></div>
        <span class='hidden portfolio-text'>
        This stylish 1960's beach bungalow was designed as a guesthouse for the young at heart.  By working with the existing architecture and blending modern furniture with nautical nuances, 
        Stephen Shubel was able to create a space any coastal vacationer would be happy to call home.
        </span>        
        
    
    </div>
	<div id='animate-inner-container3' class='animate-inner-container'>

        <div class='img-back-portfolio-container'><img src="/images/portfolio/portfolio_07.jpg" class='img-back-portfolio whiteout' text='MARIN RESIDENCE'/></div>
        <span class='hidden portfolio-text'>
        The shingle exterior of this Sausalito home has all of the east coast charm of the Hampton's, but the fresh use of bright colors and a laid-back approach to 
        casual furnishings creates a classic west coast interior.  Stephen worked extensively with the architect and client to design a fully remodeled and completely family friendly home.
        </span>        
        
        <div class='img-back-portfolio-container'><img src="/images/portfolio/portfolio_08.jpg" class='img-back-portfolio whiteout' text='SAUSALITO RESIDENCE'/></div>
        <span class='hidden portfolio-text'>
        The most recent rendition of Stephen Shubel's 1907 fisherman's cottage is a casual Californian mix of black and white with, playful antiques, French, and American furniture.  The fashion-influenced
         finishes and nautical touches transport guests aboard a most livable old wooden boat, perhaps the boat that originally carried all of the wood from San Francisco to the North Bay.  
        </span>        
        
        <div class='img-back-portfolio-container'><img src="/images/portfolio/portfolio_09.jpg" class='img-back-portfolio whiteout' text='PIEDMONT MANOR'/></div>
        <span class='hidden portfolio-text'>
        Built in the 1920's by Albert Farr, this Bay Area residence was remodeled for the 21st century.  The d&eacute;cor and design were influenced by the lavish gardens and existing architecture.  The house is 
        Mediterranean on the outside and Parisian indoors with furniture and finishes in peaceful hues of greens and yellows. It has a sense of formality yet is light and open, perfect for a young and vibrant family.
        </span>        
        
    
    </div>
    <div id='animate-inner-container4' class='animate-inner-container'>

        <div class='img-back-portfolio-container'><img src="/images/portfolio/portfolio_10.jpg" class='img-back-portfolio whiteout' text='SAN FRANCISCO LOFT'/></div>
        <span class='hidden portfolio-text'>
        This South of Market loft is located in a modern building near the San Francisco Design Center.  The clean white lines of the loft space provide a blank canvas for a 
        mix of contemporary and classic d&eacute;cor accented with antiques.  The design transformed the plain brown box into an impressively sophisticated Parisian influenced space.
        </span>        
        
        <div class='img-back-portfolio-container'><img src="/images/portfolio/portfolio_11.jpg" class='img-back-portfolio whiteout' text='SONOMA SUMMER HOUSE'/></div>
        <span class='hidden portfolio-text'>
        Calming periwinkle is the signature hue of this Sonoma weekend vacation house.  The cool, soothing, and sophisticated d&eacute;cor provide the prefect place to retreat and relax from bustling San Francisco. 
        </span>        
        
        <div class='img-back-portfolio-container'><img src="/images/portfolio/portfolio_12.jpg" class='img-back-portfolio whiteout' id='img-back-portfolio-last' text="FISHERMAN'S COTTAGE" 
        onload="sequentialFade('.img-back-portfolio',500)"/></div>
        <span class='hidden portfolio-text'>
        Nautical memorabilia and gilded treasures float swimmingly in the sea of white painted redwood paneling. Also, the all white palette lends itself well to being a laboratory for new color and d&eacutecor experiments. 
        This cottage has seen many different decorating lives over the years including everything from classic black and white to citrus punch inspired accents. 
        </span>        
        
    
    </div>
    
</div>


<?php

$slideshow = new Slideshow();
$slideshow->create();
?>

<div id='cartouche'>
	<p class='text cartouche-title'>
    BELVEDERE PLAZA
    </p>
    <p class='text cartouche-body'>
    </p>
    <div id='cartouche-close'>
    </div>
</div>

<div id='hover-text'>
	<div class='hover-text text'>
    </div>
</div>

<img src='/images/loading/loader.gif' class='hidden loading' />

