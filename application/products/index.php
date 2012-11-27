<?php

require_once($_SERVER['DOCUMENT_ROOT'] . '/includes/head.php');

$head = new Head('Products');

$head->close();

$body = new Body();
$body->lower();
?>


<img src='/images/products/back.jpg' class='img-back' />

	
    <div id='products-container'>
    
        <div class='body-text-back' id='products-text'>
            
                <p class='body-text text larger-line' style='text-align:center'>
                    We're excitedly working on a new product line.</br>
                    Please <span class='underline red' id='subscribe'>subscribe</span> to our mailing list.
                    <!--<span class='larger-text'>P</span>LEASE <span class='underline red' title='Coming soon'>SUBSCRIBE</span> TO OUR MAILING LIST.-->
                </p>
                
        </div>
        
        <div id='subscribe-container'>
        	<form action="/products/subscribe.php" method="post" onsubmit="return validate('subscribe-form');" id='subscribe-form'>
                <span class='subscribe-inner-container'>
                    <input type='text' class='subscribe-input text' name='name'  />
                    <p class='text'>Name:</p>
                </span>
                <span class='subscribe-inner-container'>
                    <input type='text' class='subscribe-input text' name='email'  />
                    <p class='text'>Email:</p>
                </span>
                <span class='subscribe-inner-container'>
          	  		<input type='image' src="/images/products/submit.jpg" class='subscribe-input-submit'/>
             	</span>
           </form>
        </div>
        
   </div>
   
<?php
	//if get var is set to true
	if(!empty($_GET['sub'])){
?>

<div id="subscribe-success" class='text'>
    <p>Your email has been added to the mailing list.</p></br>
    <span class='underline'>{Close}</span>
</div>

<?php
	
	}
		
