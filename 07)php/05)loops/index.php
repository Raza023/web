<?php 
echo "<h1>For loop</h1>";
for($i=0;$i<10;$i++)
{
    echo $i."<br>";
}

echo "<hr>";

for($i=0;$i<=10;$i=$i+2)
{
    echo $i."<br>";
}

echo "<hr>";

for($i=10;$i>=0;$i--)
{
    echo $i."<br>";
}

echo "<hr>";
$names = array("Hassan","Hussain","Ali","Kamran","Jawad");
for($i=0;$i<sizeof($names);$i++)
{
    echo $names[$i]."<br>";
}

echo "<hr>";

echo "<h1>Foreach loop</h1>";
foreach($names as $key => $value)
{
    echo "Array item ".$key." is ".$value."<br>";
}

foreach($names as $key => $value)
{
    $names[$key] = $value." bhai";                  //giving new values
}

echo "<hr>";

foreach($names as $key => $value)
{
    echo "Array item ".$key." is ".$value."<br>";
}

echo "<hr>";

echo "<h1>While loop</h1>";

$foods = array("Pizza","Burger","Showarma","Biryani","Pulao","Mutton Krahi","Kubab");

$i = 0;
while($i<sizeof($foods))
{
    echo $foods[$i]."<br>";
    $i++;
}

echo "<hr>";

echo "Table of number 5<br><br>";
$i=1;
while($i<=10)
{
    echo ($i*5)."<br>";
    $i++;
}

?>