<?php
/* AJAX CALL TO ADD NAME AND EMAIL TO SUBSCRIBER DB */

require_once($_SERVER['DOCUMENT_ROOT'] . '/includes/db_functions.php');

$name = $_POST['name'];
$email = $_POST['email'];

$db = new Db();
$db->insert('subscribers',array('id'=>'',
									'name'=>$name,
									'email'=>$email,
									'subscribed'=>true));
									
$db->execute();

$to = $email;
$subject = 'Thank You For Subscribing';
$message = '<html><body>
				<table>
					<tr><td>Thank you for subscribing.</td></tr>
					<tr><td>  We will keep you updated with the latest in our line of products.</td></tr>
					</table>
					</body>
					</html>';
$headers = 'From: info@stephenshubel.com' . "\r\n" .
			'Reply-To: do-not-reply@stephenshubel.com' . "\r\n" .
			"MIME-Version: 1.0" . "\r\n" .
    		"Content-type: text/html; charset=iso-8859-1" . "\r\n"; 

mail($to, $subject, $message, $headers);


header('location: /products?sub=true');