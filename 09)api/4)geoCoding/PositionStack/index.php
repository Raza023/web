
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
  </head>
  <body>
    <div id="show"></div>
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
  </body>
  <script>
    $(document).ready(function () {
      $.ajax({
        type: "get",
        url: "http://api.positionstack.com/v1/forward?access_key=f8bdc86e1f6482d46ffac07777bb2ac1&query=London",
        success: function (response) {
          console.log(response);
          let CountryName="";
          $.each(response["data"], function (key, val) {
             if (val["latitude"]==51.509648 && val["longitude"]==-0.099076) {
              $("#show").html('<center><p class="alert alert-success" role="alert"><b>'+val["name"]+' is situated in '+val["country"]+'</b></p></center>');
             }
          });
        }
      });
    });
  </script>
</html>


<?php

// visit:  https://positionstack.com/quickstart
//my Api key: f8bdc86e1f6482d46ffac07777bb2ac1

// $msg = "";
// $error = "";

// function validate_url($url)
// {
//   $path = parse_url($url, PHP_URL_PATH);
//   $encoded_path = array_map('urlencode', explode('/', $path));
//   $url = str_replace($path, implode('/', $encoded_path), $url);

//   return filter_var($url, FILTER_VALIDATE_URL) ? true : false;
// }

// // example
// if (!validate_url("http://api.positionstack.com/v1/forward?access_key=f8bdc86e1f6482d46ffac07777bb2ac1&query=asdjkkjh")) {
//   $error .= "Postal code not found :(";
// }
// else {
//   $jsonstr = file_get_contents("http://api.positionstack.com/v1/forward?access_key=f8bdc86e1f6482d46ffac07777bb2ac1&query=asdjkkjh");
//   $obj = json_decode($jsonstr);
//   print_r($obj);
// }

// // print_r($obj);

echo '<iframe 
width="100%" 
height="500px" 
frameborder="0" 
scrolling="no" 
marginheight="0" 
marginwidth="0" 
src="https://maps.google.com/maps?q=51.509648,-0.099076&hl=es&z=14&amp;output=embed"
>
</iframe>
<br />
<small>
 <a 
  href="https://maps.google.com/maps?q=51.509648,-0.099076" 
  style="color:#0000FF;text-align:left" 
  target="_blank"
 >
   See map bigger
 </a>
</small>
<br>
<a href="https://www.latlong.net/c/?lat=51.509648&long=-0.099076" target="_blank">(51.509648, -0.099076)</a>';

?>

