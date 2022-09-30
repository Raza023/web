<?php 

$weather = "";
$error = "";

if($_GET)
{
    if(array_key_exists("city",$_GET))
    {
        $city = str_replace(' ', '', $_GET["city"]);
        //$city = urlencode($_GET["city"]);     //this could work for new%20york but not inthis case.

        if($_GET["city"]=="")
        {
            $error .= "Please enter a city name.<br>";
        }
        else
        {
            $file_headers = @get_headers("https://www.weather-forecast.com/locations/".$city."/forecasts/latest");

            if($file_headers[0]== 'HTTP/1.1 404 Not Found')
            {
                $error .= "This city could not be found<br>";
            }
            else
            {
                $content = file_get_contents("https://www.weather-forecast.com/locations/".$city."/forecasts/latest");
                $first = explode('3 days):</div><p class="location-summary__text"><span class="phrase">',$content);
                if(sizeof($first)>1)
                {
                    //echo $first[1];
                    $second=strstr($first[1],'</span></p></div><div class="location-summary__item location-summary__item--js is-truncated"><div class="location-summary__heading-with-ext"><h2 class="location-summary__heading">',true);
                    if($second!="")
                    {
                        $weather = $weather.$second.'<br>';
                        //echo $second;
                    }
                    else
                    {
                        $error .= "This city could not be found.<br>";
                    }
                }
                else
                {
                    $error .= "This city could not be found.<br>";
                }
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
    <title>Weather Scraper</title>
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">

    <style>
        body{
            background-image: url("images/bg.jpg");
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-position: center;
            background-size: cover;
        }
        #showMsg{
            margin-top: 15px;
        }
    </style>
</head>

<body>
    <div class="container" style = "text-align:center; margin: 0;position: absolute;top: 50%;left: 50%;-ms-transform: translate(-50%, -50%);transform: translate(-50%, -50%);">
        <div class = "row">
            <h1 style = "color: #00002c;">What's The Weather?</h1>
        </div>
        <div>
            <form class="row g-3">
                <div class="col"></div>
                <div class="col-md-6">
                    <label for="city" class="form-label" style = "color: #00002c; font-size: 170%;">Enter the name of a city.</label>
                    <input type="text" class="form-control" name="city" id="city" placeholder="Eg. London, Tokyo" value = "<?php if(array_key_exists("city",$_GET)) { echo $_GET["city"]; }  ?>">
                </div>
                <div class="col"></div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Get Weather</button>
                </div>
            </form>
        </div>
        <div class="row">
            <div id="showMsg">
                <?php 
                if($weather)
                {
                    echo '<div class="alert alert-success" role="alert"><p>'.$weather.'</p></div>';
                }
                else if($error)
                {
                    echo '<div class="alert alert-danger" role="alert"><p><b>'.$error.'</b></p></div>';
                }
                ?>
            </div>
        </div>
    </div>

    <script src="jquery/jquery.min.js"></script>
    <script src="bootstrap/js/popper.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>
</body>

</html>