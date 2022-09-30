<?php

$errorMsg = "";
$successMsg = "";

include("connection.php");

if(isset($_COOKIE['email']))
{
    //session is set
    $Message = "Welcome back ".$_COOKIE["email"];
    header("Location: notes.php?Message=".$Message);
}

if($_POST)
{   
    if(array_key_exists("submit",$_POST))
    {
        if($_POST["email"]=="")
        {
            $errorMsg .= 'The email is required<br>';
        }
        if($_POST["password"]=="")
        {
            $errorMsg .= 'The password is required<br>';
        }
        if ($_POST["email"]!="" && !filter_var($_POST["email"], FILTER_VALIDATE_EMAIL))
        {
            $errorMsg .= "This Email is invalid";
        }
        if($errorMsg != "")
        {
            $errorMsg = '<p class="alert alert-danger" role="alert"><b>There were error(s) in your form: </b><br>'.$errorMsg.'</p>';
        }
        else
        {
            $query = "SELECT * FROM diary WHERE EMAIL = '".mysqli_real_escape_string($conn,$_POST["email"])."'";    
            //echo $query."<br>";
            $result = mysqli_query($conn,$query);
            if($result)
            {
                if(mysqli_num_rows($result)>=1)
                {
                    $errorMsg .= '<p class="alert alert-danger" role="alert"><b>Email has already been taken! Try using another one.</b></p>';
                }
                else
                {
                    $query = "INSERT INTO `diary` (`email`,`password`) VALUES('".mysqli_real_escape_string($conn,$_POST["email"])."','".mysqli_real_escape_string($conn,$_POST["password"])."')";
                    if($result = mysqli_query($conn,$query))
                    {
                        $recentlyInsertedID = mysqli_insert_id($conn);
                        $query = "UPDATE `diary` SET `password` = '".md5(md5($recentlyInsertedID).$_POST["password"])."' WHERE `id` = '".$recentlyInsertedID."' LIMIT 1";
                        if($result = mysqli_query($conn,$query))
                        {
                            $successMsg .= '<p class="alert alert-success" role="alert"><b>'.mysqli_affected_rows($conn).' row(s) has been inserted. Sccessfully signed up!</b></p>';
                        }
                        else
                        {
                            $errorMsg .= '<p class="alert alert-danger" role="alert"><b>Error in signing up! Try after some time.</b></p>';
                        }
                    }
                    else
                    {
                        $errorMsg .= '<p class="alert alert-danger" role="alert"><b>Error in signing up! Try after some time.</b></p>';
                    }
                }
            }
            else
            {
                $errorMsg .= '<p class="alert alert-danger" role="alert"><b>Error in signing up! Try after some time.</b></p>';
            }
        }
    }
    else if($_POST)
    {
        $errorMsg .= '<p class="alert alert-danger" role="alert"><b>There was an error in submitting form</b></p>';
    }
}
?>


<?php include("header.php") ?>

    <div class="container verticalCenter">
        <h1 style="text-align:center; color:blue;">Sign up Form</h1>

        <div class="row">
            <div class="col"></div>
            <div class="col-lg-5">
                <div id="show"><?php echo $errorMsg.$successMsg; ?></div>
            </div>
            <div class="col"></div>
        </div>

        <form class="g-3" method="post">
            <div class="row">
                <div class="col"></div>
                <div class="col-lg-5">
                    <label for="email" class="form-label pretty">Email</label>
                    <input type="email" name="email" class="form-control" id="email" placeholder="Enter your email">
                </div>
                <div class="col"></div>
            </div>
            <div class="row">
                <div class="col"></div>
                <div class="col-lg-5">
                    <label for="password" class="form-label pretty">Password</label>
                    <input type="password" name="password" class="form-control" id="password">
                </div>
                <div class="col"></div>
            </div>
            <br>
            <div class="row">
                <div class="col"></div>
                <div class="col-lg-5">
                    <button type="submit" name="submit" class="btn btn-primary">Sign up</button>
                </div>
                <div class="col"></div>
            </div>
        </form>

        <div class="row">
            <div class="col"></div>
            <div class="col-lg-5">
                <small class = "pretty">Already have an account? </small> <a class="atag" href="login.php">Log in</a>
            </div>
            <div class="col"></div>
        </div>

    </div>

<?php include("footer.php") ?>