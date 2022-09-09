<?php

$con = new mysqli('localhost', 'root', '', 'quiz');
if(isset($_POST['email']))
{
    	$name = $_POST['name'];
    	$email = $_POST['email'];
    	$rating = $_POST['rating'];
		$visit = $_POST['visit'];
    	$comment = $_POST['comment'];

	$sql = "insert into feed_back(name, email, rating, visit, comment) values('$name', '$email', '$rating', '$visit', '$comment')";
    
	if(mysqli_query($con, $sql))
	{
    		echo "Thank you for your Review.";
	}
	else
	{
    		echo "ERROR: Could not able to execute $sql. ". mysqli_error($con);
	}
}
?>
