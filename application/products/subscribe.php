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