<?php 

//search for twitter api endpoints    //https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-statuses-update
//read https://www.sla99.fr/wp-content/uploads/2018/02/codebird.php_.txt
//go to dev.twitter.com/rest/public
//access stdClass object (standard class) elements with ->
//display favorite tweets and text.
//display html form of tweets using oembed

require "vendor/autoload.php";
use Abraham\TwitterOAuth\TwitterOAuth;

//Robs secret keys.
// $consumerkey = "dZ52MCrsr9T7ZZ0e3xJrBaQVS";
// $consumersecret = "nyZy9jEzSv0IA9M4QaGrlaUBHHHP0DuqA1uIkFPR4ATpDid5iE";
// $accesstoken = "703174801402138626-G6mNl13RXKKKBl2KwXl8icXUD4JqAlA";
// $accesstokensecret = "j5x1CwDReoTYRxummy2YivGMgP37q2pefPt9ry2tMMomO";

//my secret keys.
$consumerkey = "vymnCaPzet44zeMPNOTDQfW4P";
$consumersecret = "d56TWrtfd6qv0ceRerSw1T8tAv4qFfxWpw8xScnV7bi7LxrqAS";
$accesstoken = "1396866076223418373-SCtRgFEFzdK60fOTVy6I9FdTGzOSdq";
$accesstokensecret = "QX0R1Xskf42R0NvbdegISdLMxUYQjPFpUxuvfImBERZTP";

//https://twitter.com/rob49079966 (using api of this account).

$connection = new TwitterOAuth($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);    
$content = $connection->get("account/verify_credentials");

//$statues = $connection->post("statuses/update", ["status" => "hello world"]);

$statuses = $connection->get("statuses/home_timeline", ["count" => 25, "exclude_replies" => true]);
//$statuses = $connection->get("statuses/user_timeline", ["count" => 25, "exclude_replies" => true]);

foreach($statuses as $tweet)
{
    //print_r($tweet);
    if($tweet->favorite_count >= 1)
    {
        echo "Likes: ";
        print_r($tweet->favorite_count);
        echo "<br>Text: ";
        print_r($tweet->text);
        echo "<br>Html: <br>";
        $htmlTweet = $connection->get("statuses/oembed", ["id" => $tweet->id]);            //https://oembed.com/  for more details
        print_r($htmlTweet->html);
        echo "<br>";
    }
}

?>