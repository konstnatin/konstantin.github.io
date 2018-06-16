<?php

$to="demo@email.com";/*Your Email*/

$subject="Message from the website";

$date=date("l, F jS, Y");
$time=date("h:i A");

$type=$_REQUEST['type'];
$name=$_REQUEST['name'];
$email=$_REQUEST['email'];
$subject=$_REQUEST['subject'];
$message=$_REQUEST['message'];

$msg  = "";
$msg .= "Message sent from website on date:  $date, hour: $time.\n";
$msg .= "Email: $email\n";


if($name == "" && $type == 'contact') {
	echo "<div class='alert alert-danger'>
		<a class='close' data-dismiss='alert'>×</a>
		<strong>Warning!</strong> Please fill the Name field.
	</div>";

} else if($email=="") {
	echo "<div class='alert alert-danger'>
		<a class='close' data-dismiss='alert'>×</a>
		<strong>Warning!</strong> Please fill the Email field.
	</div>";

} else if($message == "" && $type == 'contact') {
	echo "<div class='alert alert-danger'>
		<a class='close' data-dismiss='alert'>×</a>
		<strong>Warning!</strong> Please fill the Message field.
	</div>";

} else {
	mail($to,$subject,$msg,"From:".$email);
	echo "<div class='alert alert-success'>
		<a class='close' data-dismiss='alert'>×</a>
		<strong>Thank you!</strong>
	</div>";
}

?>
