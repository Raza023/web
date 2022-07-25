<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Twitter</title>
    <link rel="stylesheet" href="./bootstrap/css/bootstrap.min.css">
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"> -->
    <link rel="stylesheet" href="./styles.css">
    <!-- <script src="https://kit.fontawesome.com/b9dafe9401.js" crossorigin="anonymous"></script> -->
    <script src="./icons/icon.js"></script>
    <style>
        #toggleBtn{
            margin-right: 20px;
        }
        .active{
            border: 1px solid white;
            border-radius: 15px; 
        }
        .fa-twitter
        {
            color: white;
            font-size: xx-large;
        }
    </style>
</head>
<body>
<nav class="navbar navbar-expand-lg" style="background-color: blue;">
    <div class="container-fluid">
        <a class="navbar-brand" href="http://localhost/php/11)twitterClone/" style="color:white;"><i class="fa-brands fa-twitter"></i> Twitter</a>
        <button style="color: lightblue; background-color: white;" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link" aria-current="page" href="?page=timeline" style="color:white;">Your timeline</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" aria-current="page" href="?page=yourtweets" style="color:white;">Your tweets</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" aria-current="page" href="?page=publicprofiles" style="color:white;">Public profiles</a>
                </li>
            </ul>
            <div class="d-flex">
                <?php if(isset($_COOKIE['email'])) { ?>
                    <a class="btn btn-danger" href="logout.php?function=logout">Logout</a>
                <?php } else { ?>
                    <button class="btn btn-success" data-bs-toggle="modal" data-name="Login/Signup" data-bs-target="#exampleModal">Login/Signup</button>
                <?php } ?>
            </div>
        </div>
    </div>
</nav>
