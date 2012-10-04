<?php
/*DISPLAY ALL SUBSCRIBED EMAILS AND NAME*/

//require_once($_SERVER['DOCUMENT_ROOT'] . '/application/portfolio/' . $_GET['page'] . '/index.php');
require_once($_SERVER['DOCUMENT_ROOT'] . '/includes/head.php');
require_once($_SERVER['DOCUMENT_ROOT'] . '/includes/db_functions.php');

$db = new Db();
$db->select();

$db->execute();

echo "<div style='float:left;clear:both;width:150px;font-weight:bold'>NAME</div>";
echo "<div style='float:left;font-weight:bold;'>EMAIL</div>";

while($row = $db->result->fetch_array()){
		echo "<div style='float:left;clear:both;width:150px'>" . $row['name'] . "</div>";
		echo "<div style='float:left;'>" . $row['email'] . "</div>";
}
