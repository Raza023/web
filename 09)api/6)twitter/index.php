<?php 

// login to twitter.com
// >dev.twitter.com >GO TO oauth
// >apps.twitter.com >create new app >get apis and acces tokens (total 4)
// search>twitter oauth php >https://github.com/abraham/twitteroauth (download package from here).
// go to -> https://twitteroauth.com/  (documentation);
//download and install composer from https://getcomposer.org/download/
//open cmd run> composer       //to check it installed or not
// now in main directory run>  composer require abraham/twitteroauth
//Now you are good to go.

require "vendor/autoload.php";
use Abraham\TwitterOAuth\TwitterOAuth;

//Robs secret keys.
//https://twitter.com/rob49079966 (using api of this account).
$consumerkey = "dZ52MCrsr9T7ZZ0e3xJrBaQVS";
$consumersecret = "nyZy9jEzSv0IA9M4QaGrlaUBHHHP0DuqA1uIkFPR4ATpDid5iE";
$accesstoken = "703174801402138626-G6mNl13RXKKKBl2KwXl8icXUD4JqAlA";
$accesstokensecret = "j5x1CwDReoTYRxummy2YivGMgP37q2pefPt9ry2tMMomO";

//my secret keys.
// $consumerkey = "vymnCaPzet44zeMPNOTDQfW4P";
// $consumersecret = "d56TWrtfd6qv0ceRerSw1T8tAv4qFfxWpw8xScnV7bi7LxrqAS";
// $accesstoken = "1396866076223418373-SCtRgFEFzdK60fOTVy6I9FdTGzOSdq";
// $accesstokensecret = "QX0R1Xskf42R0NvbdegISdLMxUYQjPFpUxuvfImBERZTP";


$connection = new TwitterOAuth($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);           //making connection.
$content = $connection->get("account/verify_credentials");

$statues = $connection->post("statuses/update", ["status" => "Nice"]);          //posting tweet to tweeter.

// $media1 = $connection->upload('media/upload', ['media' => 'bg.jpg']);
// $media2 = $connection->upload('media/upload', ['media' => 'sunset.jpg']);
// $parameters = [
//     'status' => 'Beautiful sunset pictures!',
//     'media_ids' => implode(',', [$media1->media_id_string, $media2->media_id_string])
// ];
// $result = $connection->post('statuses/update', $parameters);

if ($connection->getLastHttpCode() == 200) {
    // Tweet posted successfully
    echo "<script>alert('Tweet posted successfully.');</script>";                                            
    $statuses = $connection->get("statuses/home_timeline", ["count" => 50, "exclude_replies" => true]);      //getting posts from tweeter.
    print_r($statuses);                                                                                      //showing tweets
} else {
    // Handle error case
    print_r($connection->getLastHttpCode());
    echo "<script>alert('There was an error in posting tweet.');</script>";
}

?>


<?php


//SIMPLE ONE

// require "twitteroauth/autoload.php";
// use Abraham\TwitterOAuth\TwitterOAuth;

// $consumerkey = "dZ52MCrsr9T7ZZ0e3xJrBaQVS";
// $consumersecret = "nyZy9jEzSv0IA9M4QaGrlaUBHHHP0DuqA1uIkFPR4ATpDid5iE";
// $accesstoken = "703174801402138626-G6mNl13RXKKKBl2KwXl8icXUD4JqAlA";
// $accesstokensecret = "j5x1CwDReoTYRxummy2YivGMgP37q2pefPt9ry2tMMomO";

// $connection = new TwitterOAuth($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);
// $content = $connection->get("account/verify_credentials");

// $statues = $connection->post("statuses/update", ["status" => "This came from my twitter app!"]);

// $statuses = $connection->get("statuses/home_timeline", ["count" => 25, "exclude_replies" => true]);
// print_r($statuses);

?>