<?php
/* AJAX CALL TO ADD NAME AND EMAIL TO SUBSCRIBER DB */

require_once($_SERVER['DOCUMENT_ROOT'] . '/includes/db_functions.php');

$email = $_POST['email'];

$db = new Db();
$db->update('subscribers',$email);
									
$db->execute();


if($db->con->affected_rows > 0)
	echo "You have been unsubscribed. <a href='/' alt='Go back'>";
else
	echo "An error occured:  <strong>" . $email . "</strong> could not be found.  Please try again. <a href='/unsubscribe' alt='Go back'>";
?>


    <button>Back</button>
</a>