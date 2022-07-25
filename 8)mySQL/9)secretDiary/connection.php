<?php 

$conn = mysqli_connect("127.0.0.1:3307","root","Qwerty-123","users");

if(mysqli_connect_error())
{
    die("There was an error in connecting to the database.");
}

?>