<?php 
echo "<h1>Array</h1>";
$names = array("Hassan","Hussain","Ali","Jawad");
$names[] = "Kamran";     //appends at the last available index.
// echo "<p>$names</p>"; //it's not working because we cant convert an array to string.
print_r($names);         //we use print_r(); function to print our arrays and objects in php.


echo "<h1>Array Elements</h1>";
echo "<p>$names[0]</p>";
echo "<p>$names[1]</p>";
echo "<p>$names[2]</p>";
echo "<p>$names[3]</p>";
echo "<p>$names[4]</p>";
// echo "<p>$names[5]</p>";  //it's out of index error.


echo "<h1>Associative array</h1>";
$assoc = array();
$assoc[0] = "Pizza";
$assoc[1] = "Burger";
$assoc[5] = "Showarma";
$assoc["favourite"] = "Biryani";
print_r($assoc);


echo "<h1>Associative array initialization</h1>";
$lang = array(
    "Pakistan" => "Urdu", 
    "USA" => "English", 
    "Australia" => "English", 
    "Germany "=> "German", 
    "India" => "Hindi"
);
print_r($lang);
unset($lang["India"]);   //India is removed from the array.  :)
print_r($lang);


echo "<h1>Size of array</h1>";
echo sizeof($lang);

?>