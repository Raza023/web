
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
  </head>
  <body>

    <div class="container">
      <div id="show"></div>

      <form>
        <div class="row">
          <div class="col"></div>
          <div class="col-lg-5">
            <div class="mb-3">
              <label for="area" class="form-label" style="font-weight:bold;">Enter Partial address</label>
              <input type="text" class="form-control" id="area" name="area" required/>
            </div>
            <button id="sub" type="submit" class="btn btn-primary">Get Postal Code</button>
          </div>
          <div class="col"></div>
        </div>
      </form>
      <br>
      <div id="map"></div>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
  </body>
  <script>
    $(document).ready(function () {
      $("#sub").click(function (e) { 
        e.preventDefault();            //used to stop form being submitted.
        if($("#area").val()=="")
        {
          $("#show").html('<center><p class="alert alert-danger" role="alert"><b>Please enter a address.</b></p></center>');
        }
        else
        {
          $.ajax({
            type: "get",
            url: "http://api.positionstack.com/v1/forward?access_key=f8bdc86e1f6482d46ffac07777bb2ac1&query="+$("#area").val()+"",
            success: function (response) {
              console.log(response);
              if(response["data"].length===0)
              {
                $("#show").html('<center><p class="alert alert-danger" role="alert"><b>Longitde, Latitude or Postal code not found for this place.</b></p></center>');
              }
              else
              {
                if(response["data"][0]["postal_code"]==null)
                {
                  $("#show").html('<center><p class="alert alert-success" role="alert"><b>'+response["data"][0]["name"]+' is situated in '+response["data"][0]["country"]+'. The Longitude is '+response["data"][0]["longitude"]+' and the Latitude is '+response["data"][0]["latitude"]+'</b></p></center>');
                }
                else
                {
                  $("#show").html('<center><p class="alert alert-success" role="alert"><b>'+response["data"][0]["name"]+' is situated in '+response["data"][0]["country"]+'. The Longitude is '+response["data"][0]["longitude"]+' and the Latitude is '+response["data"][0]["latitude"]+'. And the Postal code is '+response["data"][0]["postal_code"]+'</b></p></center>');
                }
                $("#map").html('<iframe width="100%" height="500px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q='+response["data"][0]["latitude"]+','+response["data"][0]["longitude"]+'&hl=es&z=14&amp;output=embed"></iframe><br /><small><a href="https://maps.google.com/maps?q=51.509648,-0.099076" style="color:#0000FF;text-align:left" target="_blank">See map bigger</a></small>');
              }
            },
            error: function(jqXHR, exception) {
              if (jqXHR.status === 0) {
                  alert('Not connect.\nVerify Network.');
              } else if (jqXHR.status == 404) {
                  alert('Requested page not found. [404]');
              } else if (jqXHR.status == 500) {
                  alert('Internal Server Error [500].');
              } else if (exception === 'parsererror') {
                  alert('Requested JSON parse failed.');
              } else if (exception === 'timeout') {
                  alert('Time out error.');
              } else if (exception === 'abort') {
                  alert('Ajax request aborted.');
              } else {
                  alert('Uncaught Error.\n' + jqXHR.responseText);
              }
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
// if (!validate_url("http://api.positionstack.com/v1/forward?access_key=f8bdc86e1f6482d46ffac07777bb2ac1&query=Lahore")) {
//   $error .= "Postal code not found :(";
// }
// else {
//   $jsonstr = file_get_contents("http://api.positionstack.com/v1/forward?access_key=f8bdc86e1f6482d46ffac07777bb2ac1&query=Lahore");
//   $obj = json_decode($jsonstr);
//   print_r($obj);
// }

// // print_r($obj);

// echo '<iframe 
// width="100%" 
// height=500px" 
// frameborder="0" 
// scrolling="no" 
// marginheight="0" 
// marginwidth="0" 
// src="https://maps.google.com/maps?q=31.520370,74.358749&hl=es&z=14&amp;output=embed"
// >
// </iframe>
// <br />
// <small>
//  <a 
//   href="https://maps.google.com/maps?q=31.520370,74.358749" 
//   style="color:#0000FF;text-align:left" 
//   target="_blank"
//  >
//    See map bigger
//  </a>
// </small>
// <a href="https://www.latlong.net/c/?lat=31.520370&long=74.358749" target="_blank">(31.520370, 74.358749)</a>';

?>

