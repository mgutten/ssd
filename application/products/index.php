<?php

require_once($_SERVER['DOCUMENT_ROOT'] . '/includes/head.php');

$head = new Head('Products');

$head->close();

$body = new Body();
$body->lower();
?>


<img src='/images/products/back.jpg' class='img-back' />


    <div class='body-text-back' id='products-text'>
        
            <p class='body-text text larger-line' style='text-align:center'>
                We're excitedly working on a new product line.</br>
                Please <span class='underline red' id='subscribe'>subscribe</span> to our mailing list.
                <!--<span class='larger-text'>P</span>LEASE <span class='underline red' title='Coming soon'>SUBSCRIBE</span> TO OUR MAILING LIST.-->
            </p>
            
    </div>
    

<div class='subscribe-container margin-resize'>

</div>



