<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$errorMsg = "";
$successMsg = "";

//print_r($_POST);

if($_POST)
{   
    if(array_key_exists("email",$_POST) && array_key_exists("subject",$_POST) && array_key_exists("body",$_POST))
    {
        if($_POST["email"]=="")
        {
            $errorMsg .= 'The email is required<br>';
        }
        if($_POST["subject"]=="")
        {
            $errorMsg .= 'The subject is required<br>';
        }
        if($_POST["body"]=="")
        {
            $errorMsg .= 'The message is required<br>';
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
            //Create an instance; passing `true` enables exceptions.
            $mail = new PHPMailer(true);

            try 
            {
                //Server settings
                //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                    //Enable verbose debug output
                $mail->isSMTP();                                            //Send using SMTP
                $mail->Host       = 'ssl://smtp.gmail.com';                 //Set the SMTP server to send through or it can be (smtp.gmail.com)
                $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
                $mail->Username   = 'imhraza023@gmail.com';                 //SMTP username
                $mail->Password   = 'cqwzfzauywtqiezl';                     //SMTP password
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
                $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`


                //Recipients
                $mail->setFrom('imhraza023@gmail.com');
                $mail->addAddress('hr770735@gmail.com');                     //Add a recipient
                //$mail->addAddress('ellen@example.com','Ellen Mark');       //Name is optional
                //$mail->addReplyTo('info@example.com', 'Information');
                //$mail->addCC('cc@example.com');
                //$mail->addBCC('bcc@example.com');

                //Attachments
                //$mail->addAttachment('images/GDSC.jpg');         //Add attachments
                //$mail->addAttachment('images/GDSC.jpg', 'memory.jpg');    //Optional rename image

                //Content
                $mail->isHTML(true);                                  //Set email format to HTML
                $mail->Subject = $_POST["subject"]." - ".$_POST["email"];
                $mail->Body    = '<p style="color: blue"><b>'.$_POST["body"].'</b></p>';
                $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

                $mail->send();
                $successMsg .= '<p class="alert alert-success" role="alert"><b>Message has been sent successfully.!</b></p>';
            } 
            catch (Exception $e)
            {
                $errorMsg .= '<p class="alert alert-danger" role="alert">Message could not be sent. Mailer Error: {$mail->ErrorInfo}</p>';
            }
        }
    }
    else if($_POST)
    {
        $errorMsg .= '<p class="alert alert-danger" role="alert"><b>There was an error in submitting form</b></p>';
    }
}


?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cantact Form</title>
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
</head>

<body style="background-color:lightgray;">

    <div class="container">
        <h1 style="text-align:center; color:blue;">Contact Form</h1>
        <div id="show"><?php echo $errorMsg.$successMsg; ?></div>
        <form class="row g-3" method="post">
            <div class="col-md-6">
                <label for="email" class="form-label">Email</label>
                <input type="email" name="email" class="form-control" id="email" placeholder="Enter your email">
            </div>
            <div class="col-md-6">
                <label for="subject" class="form-label">Subject</label>
                <input type="text" name="subject" class="form-control" id="subject">
            </div>
            <div class="col-12">
                <label for="body" class="form-label">Message</label>
                <textarea class="form-control" name="body" id="body" cols="30" rows="10"></textarea>
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Send</button>
            </div>
        </form>
    </div>

    <script src="jquery/jquery.min.js"></script>
    <script src="bootstrap/js/popper.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>

    <script>
        $(function () {
            function isEmail(email)
            {
                var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                return regex.test(email);
            }
            $("form").submit(function (e){
                var error="";
                var success="";

                //no need of jQuery validation this time.
                // if($("#email").val()=="")
                // {
                //     error += 'Email is required<br>';
                // }
                // if($("#subject").val()=="")
                // {
                //     error += 'Subject is required<br>';
                // }
                // if($("#body").val()=="")
                // {
                //     error += 'Message is required<br>';
                // }
                // if($("#email").val()!="" && !isEmail($("#email").val()))
                // {
                //     error += 'Email is invalid<br>';
                // }

                if(error=="")
                {
                    return true;
                }
                else
                {
                    $("#show").html('<p class="alert alert-danger" role="alert"><b>There were error(s) in your form: </b><br>'+error+'</p>');
                    return false;
                }
            });
            // $("form").on('submit', function ()
            // {
            //     $("#show").html('<p class="alert alert-success" role="alert">'+success+'</p>');
            // });
        });
    </script>
</body>

</html>