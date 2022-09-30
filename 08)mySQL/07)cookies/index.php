<?php 

$errorMsg = "";
$successMsg = "";

// print_r($_POST);
// echo "<br>";

$conn = mysqli_connect("127.0.0.1:3307","root","Qwerty-123","users");

if(mysqli_connect_error())
{
    echo mysqli_connect_error()."<br>";
    //$errorMsg .= '<p class="alert alert-danger" role="alert">There was an error in creating connection!</p>';
    die('There was an error in creating connection!<br>');
}

if(isset($_COOKIE['email']))
{
    //session is set
    $Message = "Welcome back ".$_COOKIE["email"];
    header("Location: cookie.php?Message=".$Message);
}

if($_POST)
{
    if(array_key_exists("name",$_POST) && array_key_exists("email",$_POST) && array_key_exists("password",$_POST))
    {
        if($_POST["email"]=="")
        {
            $errorMsg .= 'The email is required<br>';
        }
        if($_POST["name"]=="")
        {
            $errorMsg .= 'The name is required<br>';
        }
        if($_POST["password"]=="")
        {
            $errorMsg .= 'password is required<br>';
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
            $query = "SELECT * FROM user WHERE email = '".mysqli_real_escape_string($conn,$_POST["email"])."'";
            $result = mysqli_query($conn,$query);

            if($result)
            {
                if(mysqli_num_rows($result)>=1)   //means email already exists.
                {
                    $errorMsg .= '<p class="alert alert-danger" role="alert">This email has already been taken. Try using another one.</p>';
                }
                else
                {
                    $query = "INSERT INTO `user` (`name`, `email`, `password`) values ('".mysqli_real_escape_string($conn,$_POST["name"])."','".mysqli_real_escape_string($conn,$_POST["email"])."','".mysqli_real_escape_string($conn,$_POST["password"])."')";
                    
                    if($result = mysqli_query($conn,$query))
                    {
                        //echo $result."<br>";                //returning true(1)  (query executed successfully).
                        $successMsg .= '<p class="alert alert-success" role="alert"><b>'.mysqli_affected_rows($conn).' row(s) has been inserted. Successfully Signed up!</b></p>';
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
    }
}

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up Form</title>
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
</head>

<body style="background-color:lightgray;">

    <div class="container">
        <h1 style="text-align:center; color:blue;">Sign Up Form</h1>
        <div id="show"><?php echo $errorMsg.$successMsg; ?></div>
        <form class="row g-3" method="post">
        <div class="col-md-12">
                <label for="name" class="form-label">Name</label>
                <input type="text" name="name" class="form-control" id="name">
            </div>
            <div class="col-md-12">
                <label for="email" class="form-label">Email</label>
                <input type="email" name="email" class="form-control" id="email" placeholder="Enter your email">
            </div>
            <div class="col-12">
                <label for="password" class="form-label">Password</label>
                <input type="password" name="password" class="form-control" id="password">
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Sign Up</button>
            </div>
        </form>
        <br>
        <p>Already have an account? <a href="login.php">Log in</a></p>
        
    </div>

    <script src="jquery/jquery.min.js"></script>
    <script src="bootstrap/js/popper.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>
</body>

</html>