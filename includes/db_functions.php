<?php

class Db {
	
	/* test environment */
	var $username = 'root';
	var $password = '';
	var $db = 'ssd';
	
	/* production environment
	var $username = 'stephe80_ssd';
	var $password = '1950cocolulu';
	var $db = 'stephe80_ssd';*/
	var $con;
	var $query;
	var $num_rows;
	
	function __construct() {
			//set paths from bootstrap.php
			
			$this->con = new MySQLi('localhost',$this->username,$this->password,$this->db);
			
	}
	
	//insert info into table with table_name and column_array
	function insert($table_name,$column_array){
		
		/* column array format is array('column_name'=>'value','column_name'=>'value')*/
		$query = 'INSERT INTO ' . $table_name . ' (';

		//if we have a multi dimensional array, then we are inserting
		//several values to same table
		if(!empty($column_array[0]) && is_array($column_array[0])){
			$last = end(array_keys($column_array[0]));
			
			//create column name paren
			foreach($column_array[0] as $key=>$val){
				$query .= $key;
				
				if($key != $last)
					$query .= ',';
			}
			
			$query .= ') VALUES ';
			
			//create values statement
			for($i = 0; $i < count($column_array); $i++){
				
				//open current value set
				$query .= '(';
				foreach($column_array[$i] as $key=>$val){
					
					//if $val contains CURDATE or NULL no quotes around
					if(strpos($val,'CURDATE') !== false || 
						strpos($val,'NULL') !== false ||
						strpos($val, '()') !== false ||
						strpos($val, '@tid') !== false)
						$query .= $val;
					else
						$query .= "'" . $val . "'";
					
					if($key != $last)
						$query .= ',';
				}
				//close current value set and append comma
				$query .= ')';
				if($i != (count($column_array)-1))
					$query .= ',';
			}
		}				
		else{					
		
		$val_addition = '';
		$last = end(array_keys($column_array));
		
		//loop through column array and create proper insert
		//statement for single row
		foreach($column_array as $key=>$val){
			$query .= $key;
			
			//if $val contains CURDATE or NULL no quotes around
			if(strpos($val,'CURDATE') !== false || 
				strpos($val,'NULL') !== false ||
				strpos($val, '()') !== false ||
				strpos($val, '@tid') !== false)
				$val_addition .= $val;
			else
				$val_addition .= "'" . $val . "'";
			
			if($key !== $last){
				$query .= ',';
				$val_addition .= ',';
			}

		}
		
		$query .= ') VALUES (' . $val_addition . ')';
		
		}
		
		//prevent duplicate emails
		$query .= ' ON DUPLICATE KEY UPDATE name = "' . $column_array["name"] . '", subscribed = "1";';
		
		$this->query .= $query;

	}
	
	//select all subscribed people
	function select() {
		$query = 'SELECT * FROM `subscribers`';
		
		$this->query = $query;
	}
	
	//update rows of $table_name with associative array
	function update($table_name, $email, $and_statement = '') {
		
		$query = 'UPDATE ' . $table_name . ' SET ';
		
		/*
		$last = end(array_keys($column_array));
		
		foreach($column_array as $key=>$val){
			
			//no quotes for mysql functions like CURDATE()
			if(strpos($val,'()') !== false)
				$query .= $key . ' = ' . $val;
			else
				$query .= $key . ' = "' . $val . '"';
			
			if($key != $last) 
				$query .= ',';
			
		}
		*/
		
		$query .= '`subscribed` = 0';
		
		$query .= ' WHERE email = "' . $email . '"';
		
		if($and_statement != '')
			$query .= ' ' . $and_statement;
		
		$query .= ';';
		
		$this->query .= $query;
	}
	
	function execute() {
		if(substr_count($this->query,';') > 1)
			$this->result = $this->con->multi_query($this->query);
		else
			$this->result = $this->con->query($this->query);
				
		$this->query = '';
		
	}	
	

}
