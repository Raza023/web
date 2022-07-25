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
            $query = "SELECT `id` FROM diary WHERE EMAIL = '".mysqli_real_escape_string($conn,$_POST["email"])."'";    
            //echo $query."<br>";
            $result = mysqli_query($conn,$query);
            if($result)
            {
                if(mysqli_num_rows($result)>=1)   //means email exists.
                {
                    $row = mysqli_fetch_array($result);
                    $myID = $row["id"];

                    $query = "SELECT * FROM diary WHERE email = '".mysqli_real_escape_string($conn,$_POST["email"])."' AND password = '".mysqli_real_escape_string($conn,md5(md5($myID).$_POST["password"]))."'";
                    if($result = mysqli_query($conn,$query))
                    {
                        if(mysqli_num_rows($result)>=1)   //means email exists.
                        {
                            if(array_key_exists("check", $_POST) )
                            {
                                if($_POST["check"]=='1')
                                {
                                    setcookie("email",$_POST["email"],time()+60*60*24*30);   //cookie will expire after a month.
                                    $successMsg .= '<p class="alert alert-success" role="alert"><b>Successfully logged in!</b></p>';
                                    $Message = urlencode("Successfully logged in!");
                                    header("Location:notes.php?Message=".$Message);
                                    die;
                                }
                                else
                                {
                                    $errorMsg .= '<p class="alert alert-danger" role="alert"><b>checkbox error.</b></p>';
                                }
                            }
                            else
                            {
                                setcookie("email",$_POST["email"],time()+60*60);   //cookie will expire after an hour.
                                $successMsg .= '<p class="alert alert-success" role="alert"><b>Successfully logged in!</b></p>';
                                $Message = urlencode("Successfully logged in!");
                                header("Location:notes.php?Message=".$Message);
                                die;
                            }
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
    }
    else if($_POST)
    {
        $errorMsg .= '<p class="alert alert-danger" role="alert"><b>There was an error in submitting form</b></p>';
    }
}
?>


<?php include("header.php") ?>

    <div class="container verticalCenter">
        <h1 style="text-align:center; color:blue;">Log in Form</h1>
        
        <?php
            if(isset($_GET['Message']))
            {
                echo '
                <div class="row">
                    <div class="col"></div>
                    <div class="col-lg-5">
                        <p class="alert alert-danger" role="alert"><b>'.$_GET['Message'].'</b></p>
                    </div>
                    <div class="col"></div>
                </div>
                ';
            }
        ?>

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
                    <input type="checkbox" name="check" id="check" value=1>
                    <label for="check" class="pretty">Stay logged in</label>
                </div>
                <div class="col"></div>
            </div>
            <br>
            <div class="row">
                <div class="col"></div>
                <div class="col-lg-5">
                    <button type="submit" name="submit" class="btn btn-primary">Log in</button>
                </div>
                <div class="col"></div>
            </div>
        </form>

        <div class="row">
            <div class="col"></div>
            <div class="col-lg-5">
                <small class="pretty">Don't have an account? </small><a class="atag" href="index.php">Sign up</a>
            </div>
            <div class="col"></div>
        </div>
    </div>

<?php include("footer.php") ?>