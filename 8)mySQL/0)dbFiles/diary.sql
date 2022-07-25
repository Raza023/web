-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Jul 17, 2022 at 09:11 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `users`
--

-- --------------------------------------------------------

--
-- Table structure for table `diary`
--

CREATE TABLE `diary` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `note` varchar(10000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `diary`
--

INSERT INTO `diary` (`id`, `email`, `password`, `note`) VALUES
(1, 'kamran@gmail.com', 'f51d6ce535e559332c58461032c93db4', ''),
(2, 'raza@gmail.com', 'e6d808b2dbfee66dab851acf60e34634', ''),
(3, 'ali@gmail.com', 'e616b31d4beda2217c439ad49b052780', 'I tried so hard and got so far but in the end, it doesn\'t even matter.'),
(4, 'hassan@gmail.com', '8bf39535616b5d6d4904fb98898aeb6f', 'https://www.wallpaperflare.com/digital-art-artwork-illustration-retrowave-synthwave-vaporwave-wallpaper-yhnex\n\n<?php\n\n//For more info:\n//visit: https://github.com/PHPMailer/PHPMailer  (get PHPMailer from here)\n//and https://stackoverflow.com/questions/5335273/how-can-i-send-an-email-using-php\n\n//Import PHPMailer classes into the global namespace\n//These must be at the top of your script, not inside a function\nuse PHPMailer\\PHPMailer\\PHPMailer;\nuse PHPMailer\\PHPMailer\\Exception;\nuse PHPMailer\\PHPMailer\\SMTP;\n\nrequire \'PHPMailer/src/Exception.php\';\nrequire \'PHPMailer/src/PHPMailer.php\';\nrequire \'PHPMailer/src/SMTP.php\';\n\n\n$result = array();\n\nif($_GET)                        // checks if it has some keys => values or not (empty or not).\n{\n    if(array_key_exists(\"message\",$_GET)&&array_key_exists(\"subject\",$_GET)&&array_key_exists(\"from\",$_GET)&&array_key_exists(\"to\",$_GET))\n    {\n        //Create an instance; passing `true` enables exceptions.\n        $mail = new PHPMailer(true);\n\n        try \n        {\n            //Server settings\n            //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                    //Enable verbose debug output\n            $mail->isSMTP();                                            //Send using SMTP\n            $mail->Host       = \'ssl://smtp.gmail.com\';                 //Set the SMTP server to send through or it can be (smtp.gmail.com)\n            $mail->SMTPAuth   = true;                                   //Enable SMTP authentication\n            $mail->Username   = \'imhraza023@gmail.com\';                 //SMTP username\n            $mail->Password   = \'cqwzfzauywtqiezl\';                     //SMTP password\n            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption\n            $mail->Port       = 465;                //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`\n\n\n            //Recipients\n            $mail->setFrom(\'imhraza023@gmail.com\');\n            $mail->addAddress($_GET[\"to\"]);                           //Add a recipient\n            //$mail->addAddress(\'ellen@example.com\',\'Ellen Mark\');       //Name is optional\n            //$mail->addReplyTo(\'info@example.com\', \'Information\');\n            //$mail->addCC(\'cc@example.com\');\n            //$mail->addBCC(\'bcc@example.com\');\n\n            //Attachments\n            //$mail->addAttachment(\'images/GDSC.jpg\');         //Add attachments\n            //$mail->addAttachment(\'images/GDSC.jpg\', \'memory.jpg\');    //Optional rename image\n\n            //Content\n            $mail->isHTML(true);                                  //Set email format to HTML\n            $mail->Subject = $_GET[\"subject\"].\" - \".$_GET[\"from\"];\n            $mail->Body    = \'<p style=\"color: blue\"><b>\'.$_POST[\"message\"].\'</b></p><p>Regards,<br>Hassan Raza</p>\';\n            $mail->AltBody = \'This is the body in plain text for non-HTML mail clients\';\n\n            $mail->send();\n            echo \'<p>Message has been sent</p>\';\n        } \n        catch (Exception $e)\n        {\n            echo \"Message could not be sent. Mailer Error: {$mail->ErrorInfo}\";\n        }\n    }\n}\n\n\n//https://stackoverflow.com/questions/1678214/javascript-how-do-i-create-jsonp\n$data = \'{}\'; // json string\n\nif(array_key_exists(\'callback\', $_GET)){\n\n    header(\'Content-Type: text/javascript; charset=utf8\');\n    header(\'Access-Control-Allow-Origin: http://www.example.com/\');\n    header(\'Access-Control-Max-Age: 3628800\');\n    header(\'Access-Control-Allow-Methods: GET, POST, PUT, DELETE\');\n\n    $callback = $_GET[\'callback\'];\n    echo $callback.\'(\'.$data.\');\';\n\n}else{\n    // normal JSON string\n    header(\'Content-Type: application/json; charset=utf8\');\n\n    echo $data;\n}\n\n\n?>\n'),
(5, 'hussain@gmail.com', '57f9ca087b68175b56867a5d8de043f5', ''),
(6, 'qasim@gmail.com', '9e24f26db4a67ed7ca03ba7ffa23e416', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `diary`
--
ALTER TABLE `diary`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uniq` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `diary`
--
ALTER TABLE `diary`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
