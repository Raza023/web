<?php 

include("connection.php");

if($_POST)
{
    if(array_key_exists("data",$_POST))
    {
        // $data = array("data" => $_POST["data"]);
        // header("Content-Type: application/json");
        // echo json_encode($data);                    //code for json response.


        //echo $_POST["data"];
        // echo $_COOKIE["email"];

        $query = "UPDATE `diary` SET `note`='".mysqli_real_escape_string($conn,$_POST["data"])."' WHERE `email`='".mysqli_real_escape_string($conn,$_COOKIE["email"])."' LIMIT 1";
        if($result = mysqli_query($conn,$query))
        {
            // do nothing
        }
        else
        {
            echo "There was an error in executing the sql query.<br>";  //we can use die here as well.
        }

        

    }
}


?>