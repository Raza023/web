<?php

//For more info:
//visit: https://github.com/PHPMailer/PHPMailer  (get PHPMailer from here)
//and https://stackoverflow.com/questions/5335273/how-can-i-send-an-email-using-php

//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

//print_r($_POST);
if($_POST)                        // checks if it has some keys => values or not (empty or not).
{
    if(array_key_exists("email",$_POST))   // checks if it has key named "email".
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
            $mail->Password   = 'cqwzfzauywtqiezlrem';                  //SMTP password //watch this to get your app password  https://youtu.be/J4CtP1MBtOE
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
            $mail->addAttachment('images/GDSC.jpg', 'memory.jpg');    //Optional rename image

            //Content
            $mail->isHTML(true);                                  //Set email format to HTML
            $mail->Subject = $_POST["subject"]." - ".$_POST["email"];
            $mail->Body    = '<p style="color: blue"><b>'.$_POST["body"].'</b></p><p>Regards,<br>'.$_POST["fname"].' '.$_POST["lname"].'</p>';
            $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

            $mail->send();
            echo '<p>Message has been sent</p>';
        } 
        catch (Exception $e)
        {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    }
}
?>

<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sending Email</title>
</head>

<body>
    <form method="post">
        <label for="fname">First Name <span style="color: red">*<span></label>
        <input type="text" name="fname" id="fname" required/>
        <br>
        
        <label for="lname">Last Name <span style="color: red">*<span></label>
        <input type="text" name="lname" id="lname" required/>
        <br>
        
        <label for="email">Email <span style="color: red">*<span></label>
        <input type="email" name="email" id="email" required/>
        <!-- <h6>We will not show this to world</h6> -->
        <br>
        
        <label for="subject">Subject <span style="color: red">*<span></label>
        <input type="text" name="subject" id="subject" required/>
        <br>
        
        <label for="body">Message <span style="color: red">*<span></label>
        <textarea name="body" id="body" cols="30" rows="10" required></textarea>
        <br>

        <input type="submit" value="Send">
    </form>
</body>

</html>