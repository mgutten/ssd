<?php
session_start();
$url = array();

class General {
	var $url = array('contact'=>'/contact',
						'credits'=>'/credits',
						'products'=>'/products',
						'video'=>'/video',
						'press'=>'/press',
						'portfolio'=>'/portfolio',
						'by project'=>'/portfolio',
						'by room'=>'/portfolio/room',
						'about'=>'/about',
						'bios'=>'/about',
						'firm'=>'/about/firm',
						'home'=>'/');
						
							
}

class Head extends General {
//class to create the head section of a page (including 
//stylesheets and scripts)
	
	var $script = array("jquery-1.8.min","base");
	var $style= array('base');
	var $title;
	var $title_css;

	
		function __construct($title) {
				date_default_timezone_set('America/Los_Angeles');
				
				//set title for page
				$this->title = $title;
				
				//echo up to <head> of doc
				echo "<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>\n<html xmlns='http://www.w3.org/1999/xhtml'>\n<head>\n";
			
				
				//define meta tags, adding title to keywords
				$meta_desc = 'Stephen Shubel Design, Inc., a San Francisco firm, specializes in high-end residential interiors, with over thirty years of experience in interior architecture and interior decorating.';
				$meta_key = 'Stephen Shubel, Stephen Shubel Design, San Francisco Interior Design';
									
					
				//echo base <meta>, styles, scripts
				echo "<meta http-equiv='Content-Type' name='description' content='".$meta_desc."'  />\n<meta http-equiv='Content-Type' name='keywords' content='".$meta_key."'  />\n";
				
				echo "<link rel='icon' href='/favicon.ico' type='image/x-icon'> 
						<link rel='shortcut icon' href='/favicon.ico' type='image/x-icon'> ";
						
				echo $this->style($this->style);
				echo $this->script($this->script);
				
		}
			
				
		//create stylesheet links
		function style($style_array) {
				
				
				if (is_array($style_array)) {
					
						//loop through array and create stylesheet links
						foreach($style_array as $value) {
								//replace spaces for underscores
								$value = str_replace(' ','_',$value);
								//test if this is an external link
								$pos = strpos($value,'http');
								
								
								if($pos===false)
									return "<link rel='stylesheet' href='/css/" . $value . ".css?1.0' media='screen' />\n";
								else
									return "<link rel='stylesheet' href='".$value.".css?1.0' media='screen' />\n";
								
								
						}
				}
				else {
						//replace spaces for underscores
						$style_array = str_replace(' ','_',$style_array);
						//test if this is an external link
						$pos = strpos($style_array,'http');
							if($pos===false)
									return "<link rel='stylesheet' href='/css/" . $style_array . ".css?1.0' media='screen' />\n";
								else
									return "<link rel='stylesheet' href='" . $style_array . ".css?1.0' media='screen' />\n";
				}
				
		}
		
		//create script links
		function script($script_array) {
				
				$block = '';
				
				if (is_array($script_array)) {
					
						//loop through array and create script links
						foreach($script_array as $value) {
								
								//replace spaces for underscores
								$value = str_replace(' ','_',$value);
								//test if external link
								$pos = strpos($value,'http');
								
								if($pos===false)
									$block .= "<script type='text/javascript' src='/js/".$value.".js?1.01'></script>\n";
								else
									$block .= "<script type='text/javascript' src='" . $value . ".js?1.01'></script>\n";
															
						}
				}
				else {
						//test if external link
						$pos = strpos($script_array,'http');
						//replace spaces for underscores
						$script_array = str_replace(' ','_',$script_array);
						
						if($pos===false)
								$block .= "<script type='text/javascript' src='/js/".$script_array.".js?1.01'></script>\n";
						else
								$block .= " <script type='text/javascript' src='".$script_array.".js?1.01'></script>\n";
				}
				
				return $block;
			
		}
		
		
		function close() {
				
				//show title
				$block = "<title>Stephen Shubel | $this->title</title>\n";
				
				//close <head> section
				$block .= "</head>";
				
				echo $block;
				
		}
}

class Navigation extends General {
	
	var $logo = '/images/nav/logo.png';
	var $navigation = array('contact',
								'credits',
								'products',
								'video',
								'press',
								'portfolio'=>array('portfolio',
													'by project',
													'by room'),
								'about'=>array('about',
												'bios',
												'firm')
								);
	
	//return image location for logo
	function logo() {
		
		return $this->logo;
	}
	
	/*function to create nav
		$nav_array = array('title'=>array('first',
											'second',
											'third')
		LOCATIONS ARE STORED IN "GENERAL" CLASS
	*/
	function nav($nav_array) {
				
		$block = '';
		
		if(is_array($nav_array)){
			
			//hack to access key of array (use count = 0 where array[0] is main name of dropdown
			$count = 0;
			foreach($nav_array as $val) {
				
				$class = 'text nav';
				
				//if current page is in this navigation, bold nav
				if(strpos($_SERVER['PHP_SELF'],$val) !== false)
					$class .= '-bold';
				
				//first round through open dropdown containers
				if($count == 0){
					$block .= "<a href='" . $this->url[$val] . "' class='{$class} dropdown' id='nav-{$val}'>" . strtoupper($val) . "</a>";
						
					$block .= "<div class='dropdown-outer'>
									<div class='dropdown-inner' id='$val'>";	
									
					$count++;
					continue;
				}
				
				$class = 'nav-dropdown nav';
				
				//if currently on this page for dropdown
				if($_SERVER['REQUEST_URI'] == $this->url[$val])
					$class .= '-bold';	
												
				$block .= "<a href='" . $this->url[$val] . "' class='$class'>" . strtoupper($val) . "</a>";
						
				
			}
			
			$block .= "</div></div>";
			
			
			return $block;
		}
		else {
			
			$class = 'text nav';
			
			//if current page is in this navigation, bold nav
			if(strpos($_SERVER['PHP_SELF'],$nav_array) !== false)
				$class .= '-bold';
			
			return "<a href='" . $this->url[$nav_array] . "' class='{$class}' id='nav-{$nav_array}'>" . strtoupper($nav_array) . "</a>\n";
		}
	}
	
	//create navigation
	function create() {
		
		echo "<a href='" . $this->url['home'] . "'><img src='" . $this->logo() . "' id='logo' /></a>\n";
		
		foreach($this->navigation as $val) {
				
				echo $this->nav($val);
		}
		
		
	}
		
}


//create body of page
class Body extends General {
	
	//default value is false where there are no arrows, so fill space with empty div
	var $arrows = false;
	var $closed = false;
	
	//initiate body and create navigation
	function __construct($arrows = false) {
		
		$this->arrows = $arrows;
		
		echo "<body>\n";
		
		echo "<div id='body'>";
		
		$nav = new Navigation();
		$nav->create();
		
	}
	
	//open lower body (below navigation)
	function lower() {
		
		echo "<div class='arrow-container'>";
		
		if($this->arrows == 'true'){
			/*
			$next = (is_dir($_SERVER['DOCUMENT_ROOT'] . '/images/portfolio/' . ($this->cur_url + 1)) ? $this->cur_url + 1 : 2);
			$prev = (is_dir($_SERVER['DOCUMENT_ROOT'] . '/images/portfolio/' . ($this->cur_url - 1)) ? $this->cur_url - 1 : 4);
			*/
			
			echo "<img src='/images/arrows/last_arrow.jpg' id='last-arrow' class='arrow' />";
		}
			
		echo "</div>";
		
		echo "<div id='body-lower'>";
		
		
		
	}
	
	//close lower body
	function close() {
		
		echo "</div>";
		
		echo "<div class='arrow-container' id='next-arrow-container'>";
		
		if($this->arrows == 'true')
			echo "<img src='/images/arrows/next_arrow.jpg' id='next-arrow' class='arrow'/>";
			
		echo "</div>";
		
		echo "<span id='copyright' class='text'>&copy; " . date('Y') . " STEPHEN SHUBEL, INC.</span>";
		
		$this->closed = true;
		


	}
	
	//on page destruct, close body tag and html tag
	function __destruct() {
		
		//if body hasn't been closed yet
		if(!$this->closed)
			$this->close();
		
		echo "</div><div id='background'></div></body>\n</html>";
	}
}

class Slideshow {
	
	function create() {
		
		echo "<div class='animate-slide-outermost'>
					<div class='animate-slide-outer'>
					</div>
				</div>";
				
		echo "<div class='x'></div>";
	}
	
}