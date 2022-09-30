<?php 

$conn = mysqli_connect("127.0.0.1:3307","root","Qwerty-123","users");

if(mysqli_connect_error())
{
    die("There was an error in connecting to the database.");    //if there is an error skip remaing script.
}


$query = "INSERT INTO `user` (`email` , `password`) values ('e@gmail.com','egmail')";
//$query = "INSERT INTO user(email , password) values ('e@gmail.com','egmail')";      //same as above.
if($result = mysqli_query($conn,$query))
{
    //echo $result."<br>";                //returning true(1)  (query executed successfully).
    echo mysqli_affected_rows($conn);
    echo " row(s) has been inserted successfully!<br>";
}
else
{
    echo "There was an error in executing the sql query. Can't add this email again because it's unique.<br>";  //we can use die here as well.
}

$query = "UPDATE `user` SET `password`='d@gmail' WHERE `email`='d@lums.com' LIMIT 1";
//$query = "UPDATE user SET password='newPassword' WHERE email='b@gmail.com' LIMIT 1";      //same as above. LIMIT 1 MEANS ONLY UPDATE 1 ROW.
if($result = mysqli_query($conn,$query))
{
    //echo $result."<br>";                //returning true (query executed successfully).
    echo mysqli_affected_rows($conn);
    echo " row(s) has been updated successfully!<br>";
}
else
{
    echo "There was an error in executing the sql query.<br>";  //we can use die here as well.
}

$query = "DELETE FROM `user` WHERE `email`='c@gmail.com' LIMIT 1";
if($result = mysqli_query($conn,$query))
{
    //echo $result."<br>";                //returning true (query executed successfully).
    echo mysqli_affected_rows($conn);
    echo "row(s) has been deleted successfully!<br>";
}
else
{
    echo "There was an error in executing the sql query.<br>";  //we can use die here as well.
}



?>