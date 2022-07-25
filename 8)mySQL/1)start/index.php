<?php 

// Watch this video to make your xampp mysql secure:
// https://youtu.be/QKYgOxGY3ZQ

// mysql_connect() (dont use this one it's depricated.)


//msqli_connect(serverName,serName,Password,DBName);
mysqli_connect("127.0.0.1:3307","root","Qwerty-123","users");

$errors = mysqli_connect_error();

if(!$errors)   //checks if it's empty or not. [!string is same as string==""]
{
    echo "Connected to database successfully!";
}
else
{
    echo "There was an error connecting to db.";   
}


?>


