<?php

require_once($_SERVER['DOCUMENT_ROOT'] . '/includes/head.php');

$head = new Head('Error');

$head->close();

$body = new Body();
$body->lower();
?>
<style>

#body-lower {
	height: 700px;
}
</style>
<p style="width:500px;text-align:center;font-family:Helvetica, Arial;position:absolute;top:50%;left:50%;margin:0px 0px 0px -250px;">Unfortunately, 
		your current browser is too old to render this page.  Please either 
		<a href="http://windows.microsoft.com/en-US/internet-explorer/download-ie" style="color:#06F">update your browser</a> or 
		use a more current browser. We apologize for the inconvenience.</p>