<?php
//get data from form  

$name = $_POST['name'];
$email= $_POST['emailaddress'];
$message= $_POST['message'];
$phoneNumber = $_POST['phoneNumber'];
$to = "benjiopia20@mail.com";
$subject = "Mail From website";
$txt ="Name = ". $name . "\r\n Phone Number = ". $phoneNumber . "\r\n  Email = " . $email . "\r\n Message =" . $message;
$headers = "From: noreply@fortuneproperties.com" . "\r\n" .
"CC:";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location: index.html");
?>