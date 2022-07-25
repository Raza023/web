<?php 
$name = "Hassan";
if($name == "Hassan")
{
    echo "Hello ".$name;
}
else
{
    echo "I don't know you!";
}

echo "<br>";
echo "<br>";

$marks = 1015;
if($name = "Hassan" && $marks >= 1000)
{
    echo "You are eligible to take admission.";
}
else
{
    echo "You are not eligible to take admission at PUCIT.";
}

echo "<br>";
echo "<br>";

$isHafiz = false;
if($marks >= 1000 || $isHafiz)
{
    echo "You are eligible to take admission.";
}
else if($marks >= 700 && $marks < 1000)
{
    echo "You need to pass your entry test to take admission";
}
else
{
    echo "You are not eligible to take admission at PUCIT.";
}

?>