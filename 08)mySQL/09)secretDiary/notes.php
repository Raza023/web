<?php

$content="";

include("connection.php");

    if(isset($_COOKIE['email'])) {
        //cookie is set
        //echo '<h1 class="alert alert-success" role="alert">Cookie is set!<br>Welcome '.$_COOKIE["email"].'</h1>';

        $query = "SELECT * FROM `diary` WHERE EMAIL = '".mysqli_real_escape_string($conn,$_COOKIE["email"])."'";     //it's not case sensitive.
        // echo $query."<br>";
        $result = mysqli_query($conn,$query);
        if($result)
        {
            $row = mysqli_fetch_array($result);
            $content .= $row[3];
        }
        else
        {
            alert("No data found!");
        }

    } else if(!isset($_COOKIE['email'])){
        //cookie is not set
        $Message = "You must have to login first.";
        header("Location: login.php?Message=".$Message);
    }

// if(isset($_GET['Message'])){
//     echo '<p class="alert alert-success" role="alert"><b>'.$_GET['Message'].'</b></p>';
// }

include("header.php");
?>
<nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#"><b>Secret Diary</b></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul> <!--  for spacinng in between -->
            <a href="logout.php"><button id="logout" class="btn btn-danger" type="submit">Log out</button></a>
        </div>
    </div>
</nav>

<div class="container-fluid">
<textarea name="text-area" id="text-area"><?php echo $content; ?></textarea>
</div>

<?php 
include("footer.php");
?>

