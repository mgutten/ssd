<?php

$folder = $_SERVER['DOCUMENT_ROOT'] . $_POST['folder'];
$files = array();



if($handle = opendir($folder)){
	
		while(false !== ($name = readdir($handle))){
			//format eg /images/press/01/press_cover_01.jpg
			array_push($files, $_POST['folder'].'/'.$name);
		}
		
}

sort($files);


echo json_encode($files);
			