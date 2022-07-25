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


$result = array();

// $_GET['from'] = 'imhraza023@gmail.com';
// $_GET['to'] ='hr770735@gmail.com';
// $_GET['subject'] = 'sub this';
// $_GET['message'] = 'this is some text.';

if($_GET)                        // checks if it has some keys => values or not (empty or not).
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
        $mail->Port       = 465;                //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`


        //Recipients
        $mail->setFrom('imhraza023@gmail.com');
        $mail->addAddress($_GET["to"]);                           //Add a recipient
        //$mail->addAddress('ellen@example.com','Ellen Mark');       //Name is optional
        //$mail->addReplyTo('info@example.com', 'Information');
        //$mail->addCC('cc@example.com');
        //$mail->addBCC('bcc@example.com');

        //Attachments
        //$mail->addAttachment('images/GDSC.jpg');         //Add attachments
        //$mail->addAttachment('images/GDSC.jpg', 'memory.jpg');    //Optional rename image

        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = $_GET["subject"]." - ".$_GET["from"];
        $mail->Body    = '<p style="color: blue"><b>'.$_GET["message"].'</b></p><p>Regards,<br>Hassan Raza</p>';
        $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

        $result["success"] = $mail->send();
        //echo '<p>Message has been sent</p>';
    } 
    catch (Exception $e)
    {
        $result["success"] = false;
        //echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"; 
    }
}


//https://stackoverflow.com/questions/1678214/javascript-how-do-i-create-jsonp
$data = json_encode($result); // json string

if(array_key_exists('callback', $_GET)){

    header('Content-Type: text/javascript; charset=utf8');
    header('Access-Control-Allow-Origin: http://www.example.com/');
    header('Access-Control-Max-Age: 3628800');
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

    $callback = $_GET['callback'];
    echo $callback.'('.$data.');';
}else{
    // normal JSON string
    header('Content-Type: application/json; charset=utf8');

    echo $data;
}


?>