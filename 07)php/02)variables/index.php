<?php

// simple variable
echo "<h1 style='text-align:center;'>Simple Variables</h1>";
$name = "Hassan Raza";
echo $name;
echo "<p>$name</p>";
echo "My name is $name"; 
echo "<br>";

// string concatination
echo "<h1 style='text-align:center;'>string concatination</h1>";
$str1 = "This is first part";
$str2 = "of a sentence";
echo "<br>";
echo $str1.$str2;
echo "<br>";
echo $str1." ".$str2;
echo "<br>";

//calculations
echo "<h1 style='text-align:center;'>Calculations</h1>";
$num =45;
$cal = $num*31/97+4;
echo "$cal";

echo "<br>";
echo "<br>";

//boolean
echo "<h1 style='text-align:center;'>Boolean</h1>";
$myBool = true;
echo $myBool;

echo "<br>";

$myBool = false;
echo $myBool;    //displays noting for false.

echo "<h1 style='text-align:center;'>Variable as variable name.</h1>";
$vname = "name";
echo $$vname;

?>

<!-- <html>here</html> -->