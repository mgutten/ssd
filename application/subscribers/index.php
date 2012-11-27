<?php
/*DISPLAY ALL SUBSCRIBED EMAILS AND NAME*/

//require_once($_SERVER['DOCUMENT_ROOT'] . '/application/portfolio/' . $_GET['page'] . '/index.php');
require_once($_SERVER['DOCUMENT_ROOT'] . '/includes/head.php');
require_once($_SERVER['DOCUMENT_ROOT'] . '/includes/db_functions.php');

$db = new Db();
$db->select();

$db->execute();

$subscribed = array();

echo "<div style='float:left;clear:both;width:250px;font-weight:bold'>NAME</div>";
echo "<div style='float:left;font-weight:bold;width:250px;'>EMAIL</div>";
echo "<div style='float:left;font-weight:bold;'>SUBSCRIBED</div>";

while($row = $db->result->fetch_array()){
		echo "<div style='float:left;clear:both;width:250px'>" . $row['name'] . "</div>";
		echo "<div style='float:left;width:250px;'>" . $row['email'] . "</div>";
		echo "<div style='float:left;'>" . ($row['subscribed'] > 0 ? 'Yes' : 'No') . "</div>";
		
		if($row['subscribed'] > 0)
			array_push($subscribed,$row['email']);
}
?>


<div style='float:left;clear:both;margin:30px 0px 0px 0px;width:500px;'>
Copyable list of subscribed emails:
</div>
<div style='float:left;clear:both;margin:10px 0px 0px 0px;width:500px;'>

<?php
	foreach($subscribed as $val){
		
		echo $val;
		
		if($val == end($subscribed))
			continue;
		
		echo ', ';
	}
	
?>
    
</div>
