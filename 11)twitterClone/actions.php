<?php 

include("functions.php");

if(array_key_exists("action",$_GET))
{
    if($_GET['action']=="loginSignup")
    {
        // print_r($_POST);
        $error = "";
        $errorMsg = "";
        $successMsg = "";

        if(!$_POST["email"])
        {
            $error = $error." Please enter an email.";
        }
        else
        {
            if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL))
            {
                $error = $error." Invalid email format.";
            }
        }
        if(!$_POST["password"])
        {
            $error = $error." Please enter a password.";
        }

        if($error)
        {
            echo $error;
            exit();
        }
        else
        {
            if($_POST["loginActive"]=="1")
            {
                $query = "SELECT `id` FROM people WHERE EMAIL = '".mysqli_real_escape_string($conn,$_POST["email"])."'";    
                //echo $query."<br>";
                $result = mysqli_query($conn,$query);
                if($result)
                {
                    if(mysqli_num_rows($result)>=1)   //means email exists.
                    {
                        $row = mysqli_fetch_array($result);
                        $myID = $row["id"];

                        $query = "SELECT * FROM people WHERE email = '".mysqli_real_escape_string($conn,$_POST["email"])."' AND password = '".mysqli_real_escape_string($conn,md5(md5($myID).$_POST["password"]))."'";
                        if($result = mysqli_query($conn,$query))
                        {
                            if(mysqli_num_rows($result)>=1)   //means email exists.
                            {
                                setcookie("id",$myID,time()+60*60*24*30);   //cookie will expire after a month.
                                setcookie("email",$_POST["email"],time()+60*60*24*30);   //cookie will expire after a month.
                                $successMsg .= '<p class="alert alert-success" role="alert"><b>Successfully logged in!</b></p>';
                            }
                            else
                            {
                                $errorMsg .= '<p class="alert alert-danger" role="alert"><b>Email or Password is incorrect</b></p>';
                            }
                        }
                        else
                        {
                            $errorMsg .= '<p class="alert alert-danger" role="alert">There was an error in executing query!</p>';
                        }
                    }
                    else
                    {
                        $errorMsg .= '<p class="alert alert-danger" role="alert"><b>There is no accont with that email.</b></p>';
                    }
                }
                else
                {
                    $errorMsg .= '<p class="alert alert-danger" role="alert"><b>Error in log in! Try after some time.</b></p>';
                }
            }
            else
            {
                $query = "SELECT * FROM people WHERE email = '".mysqli_real_escape_string($conn,$_POST["email"])."'";
                $result = mysqli_query($conn,$query);

                if($result)
                {
                    if(mysqli_num_rows($result)>=1)   //means email already exists.
                    {
                        $errorMsg .= '<p class="alert alert-danger" role="alert">This email has already been taken. Try using another one.</p>';
                    }
                    else
                    {
                        $query = "INSERT INTO `people` (`email`, `password`) values ('".mysqli_real_escape_string($conn,$_POST["email"])."','".mysqli_real_escape_string($conn,$_POST["password"])."')";
                        if($result = mysqli_query($conn,$query))
                        {
                            $recentlyInsertedID = mysqli_insert_id($conn);
                            $query = "UPDATE `people` SET `password` = '".md5(md5($recentlyInsertedID).$_POST["password"])."' WHERE `id` = '".$recentlyInsertedID."' LIMIT 1";
                            if($result = mysqli_query($conn,$query))
                            {
                                setcookie("id",$recentlyInsertedID,time()+60*60*24*30);   //cookie will expire after a month.
                                setcookie("email",$_POST["email"],time()+60*60*24*30);   //cookie will expire after a month.
                                $successMsg .= '<p class="alert alert-success" role="alert"><b>'.mysqli_affected_rows($conn).' row(s) has been inserted. Sccessfully signed up!</b></p>';
                            }
                            else
                            {
                                $errorMsg .= '<p class="alert alert-danger" role="alert"><b>Error in signing up! Try after some time.</b></p>';
                            }
                        }
                        else
                        {
                            $errorMsg .= '<p class="alert alert-danger" role="alert">There was an error in executing the sql query. Cant add this email again because its unique.</p>';
                        }
                    }
                }
                else
                {
                    $errorMsg .= '<p class="alert alert-danger" role="alert">There was an error in executing query!</p>';
                }
            }

            if($errorMsg)
            {
                echo $errorMsg;
                exit();
            }
            else
            {
                echo $successMsg;
            }
        }
    }
    if($_GET["action"]=="toggleFollow")
    {
        // print_r($_POST["userID"]);
        $query = "SELECT * FROM  isfollowing WHERE follower=".mysqli_real_escape_string($conn,$_COOKIE["id"])." AND following=".mysqli_real_escape_string($conn,$_POST["userID"])." LIMIT 1";
        $result = mysqli_query($conn,$query);
        // echo $query;
        if($result)
        {
            $row = mysqli_fetch_assoc($result);
            if(mysqli_num_rows($result)>=1)   //already follows
            {
                $delquery = "DELETE FROM isfollowing WHERE id=".mysqli_real_escape_string($conn,$row["id"])." LIMIT 1";
                if($result = mysqli_query($conn,$delquery))
                {
                    echo "0";    //unfollows
                }
                else
                {
                    echo "There was an error in executing query.";
                }
            }
            else //not follows (now follow)
            {
                $insertquery = "INSERT INTO isfollowing (follower , following) VALUES(".mysqli_real_escape_string($conn,$_COOKIE["id"]).",".mysqli_real_escape_string($conn,$_POST["userID"]).")";
                if($result = mysqli_query($conn,$insertquery))
                {
                    echo "1";    //follows
                }
                else
                {
                    echo "There was an error in executing query.";
                }
            }
        }
        else
        {
            echo "There was an error in executing query.";
        }
    }
    if($_GET["action"]=="postTweet")
    {
        // print_r($_POST["tweet"]);
        if(strlen($_POST["tweet"])==0)
        {
            echo "empty";
        }
        else if (strlen($_POST["tweet"])>=10000)
        {
            echo "too big";
        }
        else 
        {
            if(array_key_exists("id",$_COOKIE))
            {
                $query = "INSERT INTO `tweets` (`tweet`, `userid`, `datetime`) values ('".$_POST["tweet"]."',".$_COOKIE['id'].",NOW())";
                if($result = mysqli_query($conn,$query))
                {
                    echo "posted";
                }
                else
                {
                    echo "There was an error in executing the sql query.";
                }
            }
            else
            {
                echo "login require";
            }
        }
    }
}


?>