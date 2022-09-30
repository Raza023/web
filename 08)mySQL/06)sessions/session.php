

<?php
    session_start();     //It should be used where ever you want to use sessions.
    if(isset($_SESSION['email'])) {
        //session is set
        echo '<h1 class="alert alert-success" role="alert">Session is set!<br>Welcome '.$_SESSION["email"].'</h1>';

    } else if(!isset($_SESSION['email'])){
        //session is not set
        $Message = "You must have to login first.";
        header("Location: login.php?Message=".$Message);
    }
?>




<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Session</title>
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
</head>

<body style="background-color:lightgray;">
    <div class="container">
        <?php
            if(isset($_GET['Message'])){
                echo '<p class="alert alert-success" role="alert"><b>'.$_GET['Message'].'</b></p>';
            }
        ?>
        <h1 style="text-align:center; color:blue;">All the content you need after login is available to you here.</h1>
        <a href="logout.php"><button id="logout" class="alert alert-danger" role="alert">Log out</button></a>
    </div>

    <script src="jquery/jquery.min.js"></script>
    <script src="bootstrap/js/popper.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>
</body>

</html>

