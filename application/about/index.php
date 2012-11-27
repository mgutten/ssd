<?php

require_once($_SERVER['DOCUMENT_ROOT'] . '/includes/head.php');

$head = new Head('About');
echo $head->script('scroll');
$head->close();

$body = new Body('true');
$body->lower();
?>

<div id='animate-outer-container' class='animate-outer-container animate-outer-container-text'>

	<div id='animate-inner-container1' class='animate-inner-container animate-inner-container-text'>

        <img src='/images/about/stephen.jpg' class='img-back-about' />
    
        <div class='body-text-back about-us-text' >
        
            <p class='body-text text'>
                Stephen Shubel, the founder and President of Stephen Shubel, Inc.,  grew up in the San Francisco Bay Area.  An early passion for art led him to study at California College of Arts and Crafts.  
                There he knew immediately that interior design was to become his life's direction.  He launched his design career as an independent designer early and never looked back.  
                Today he is one of the most published interior designers and well-received decorators on the West Coast.<br /><br />
     
                Influenced by international travel, Shubel honed his eye to appreciate the beauty in antiques and unique items from all over the world. Spending time in Europe he 
                developed a respect for anything done well and done with a relish for living.  He has grown to realize that beauty can be seen in both the simple and the sophisticated.  
                Today he is known for his straight-forward approach, whether his client is an Academy Award winner or a young fashion model. <br /><br />
     
                Over the years his style can be described as eclectic, comfortable, striking, understated,  elegant, timely, fresh, and even classical.  
                All these results are achieved with a single obsession for pleasing his clients' dreams and their personal styles.  The  measure for any of his success is to 
                always be true to his own sensibilities.   A diligence for details and an inherent talent for understanding color, space, and texture, is always seen in his work.  
                Shubel's interiors are honest and livable.<br /><br />
                
                In 2011, House Beautiful honored Shubel with inclusion in its Roots of American Design, a milestone project highlighting the lineage of significant American designers 
                from the nineteenth-century to present day.
            </p>
            
        </div>
    </div>
	<div id='animate-inner-container' class='animate-inner-container animate-inner-container-text'>

        <img src='/images/about/jennifer.jpg' class='img-back-about' onload="sequentialFade('.img-back-about',500)"/>
    
        <div class='body-text-back about-us-text'>
        
            <p class='body-text text'>
                Jennifer Atristain joined Stephen Shubel over a decade ago.  Well-executed and truly finished design requires a collaboration of client, 
                designer and those who see that every detail is perfected.  Atristain makes this happen for Shubel. <br /><br />

                Jennifer graduated cum laude from San Francisco State University with a degree in Interior Design.<br /><br />
                
                Her precise and natural eye for design coupled with an amazing talent to work with people and clients achieves the best results possible in every project.<br /><br />
                
                Born and raised in San Francisco, she has the extraordinary ability to connect with suppliers, craftspeople and all necessary sources to accomplish 
                any design question.  Her travels through North and Central America, Europe and Asia have proven priceless to all collaborations.<br /><br />
                 
                She answers the tough questions that come with any project,  "Where," "When," and "How." Jennifer steps forward and answers all with panache and determined ease. <br /><br />
                
                Her true expertise lies in her ability to attain the aesthetic objective while adhering to the project's timeline and budget.  The combination of design 
                acumen and project management she has perfected in her years with Shubel has proven vital to any job.<br /><br />
                
                Her roles as Principal Designer and Vice President of the company are essential to the accomplished achievements of Stephen Shubel, Inc.<br /><br />

            </p>
            
        </div>
    </div>
</div>

    

