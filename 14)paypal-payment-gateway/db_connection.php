<?php 

$db_conn = mysqli_connect("your_host_name","your_user_name","your_pswd","your_db_name");
// Check connection
if($db_conn === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
error_reporting(E_ALL);
ini_set('display_errors','Off');

?>