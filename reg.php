<?php

$con = new mysqli('localhost', 'root', '', 'quiz');
if(isset($_POST['email']) && isset($_POST['password']))
{
    	$fname = $_POST['fname'];
    	$mname = $_POST['mname'];
    	$lname = $_POST['lname'];
	
    	$course = $_POST['course'];
	$gender = $_POST['gender'];
	$num = $_POST['num'];
    	$addr = $_POST['addr'];

    	$email = $_POST['email'];
    	$password = $_POST['password'];

	$sql = "insert into reg(fname, mname, lname, course, gender, num, addr, email, password) values('$fname', '$mname', '$lname', '$course', '$gender', '$num', '$addr', '$email', '$password')";
    
	if(mysqli_query($con, $sql))
	{
    		echo "Candidate added successfully.";
	} 
	else
	{
    		echo "ERROR: Could not able to execute $sql. ". mysqli_error($con);
	}
}
?>
