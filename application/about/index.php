<?php

require_once($_SERVER['DOCUMENT_ROOT'] . '/includes/head.php');

$head = new Head('About');
$head->close();

$body = new Body();
$body->lower();
?>

<div class='img-back' id='about-img'>

	<div class='body-text-back' id='about-us-text'>
    
    	<p class='text body-text'>
       		Stephen Shubel Design, Inc., a San Francisco firm, specializes in high-end residential interiors, 
            with over thirty years of experience in interior architecture and interior decorating. 
            Stephen Shubel, the principal designer, has been distinguished as one of "House Beautiful's Top 100 Designers" 
            for the last eight years. Our projects have graced the pages of over fifty domestic and international 
            publications. The firm has a reputation for having fresh and inspiring design that is often sought 
            after by the nation's leading interior design magazines.</br></br>

            At SSD we believe our first responsibility is to our clients who use our furniture and services. 
            In meeting their needs everything we do must be of the highest quality.</br></br>
            
            Our focus is to meet the practical needs of clients and maintain beautiful design. While creating 
            high-end interior furnishings and livable environments, we work closely with our clients to produce a 
            personalized home.</br></br>
            
            We pride ourselves on our choice of local and international suppliers, sources and workrooms. Our long-standing 
            relationships with our vendors insure high quality products and services. As designers we believe in sound 
            fundamental principles that enable us to produce responsible, simple solutions.</br></br>
            
            As a firm we work well in a team environment. While collaborating with architects, contractors, landscape 
            and lighting designers we are respectful of their expertise.</br></br>
            
            Our goal is to create a home that reflects the needs and personal style of the client, while 
            always remaining sensitive to their budget. This strength, along with a sensitivity and respect for 
            the architecture, the landscape, and the environment, form the cornerstone of our firm.
        </p>
        
    </div>
    
</div>

<?php
$body->close();
