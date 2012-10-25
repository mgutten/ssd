<?php
/* AJAX CALL TO ADD NAME AND EMAIL TO SUBSCRIBER DB */

require_once($_SERVER['DOCUMENT_ROOT'] . '/includes/db_functions.php');

$email = $_GET['email'];

$db = new Db();
$db->update('subscribers',$email);
									
$db->execute();

echo "You have been unsubscribed.";