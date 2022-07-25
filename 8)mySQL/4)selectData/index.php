<?php 

$conn = mysqli_connect("127.0.0.1:3307","root","Qwerty-123","users");

if(mysqli_connect_error())
{
    echo mysqli_connect_error()."<br>";
    die ("There was an error in your sql connection!");
}

$query = "SELECT * FROM user";
echo $query."<br>";
$result = mysqli_query($conn,$query);
if($result)
{
    // $rows = mysqli_fetch_all($result);
    // print_r($rows);
    // echo "<br>";
    // foreach($rows as $row)
    // {
    //     echo $row[0]."&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;".$row[1]."&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;".$row[2]."<br>";
    // }

    while($row = mysqli_fetch_array($result))   //it's the best one and much more easy way to get data.
    {
        print_r($row);
        echo "<br>";
    }
}
else
{
    echo "No data found!";
}

echo "<hr>";

$query = "SELECT * FROM user WHERE EMAIL LIKE '%GMAIL%'";     //it's not case sensitive.
echo $query."<br>";
$result = mysqli_query($conn,$query);
if($result)
{
    while($row = mysqli_fetch_array($result))   //it's the best one and much more easy way to get data.
    {
        print_r($row);
        echo "<br>";
    }
}
else
{
    echo "No data found!";
}


echo "<hr>";

$query = "SELECT * FROM user WHERE id >= 2";
echo $query."<br>";
$result = mysqli_query($conn,$query);
if($result)
{
    while($row = mysqli_fetch_array($result))   //it's the best one and much more easy way to get data.
    {
        print_r($row);
        echo "<br>";
    }
}
else
{
    echo "No data found!";
}

echo "<hr>";

$query = "SELECT `email` FROM user";
echo $query."<br>";
$result = mysqli_query($conn,$query);
if($result)
{
    while($row = mysqli_fetch_array($result))   //it's the best one and much more easy way to get data.
    {
        print_r($row);
        echo "<br>";
    }
}
else
{
    echo "No data found!";
}

echo "<hr>";

$name = "A'Ali";
$query = "SELECT * FROM user WHERE name = '".mysqli_real_escape_string($conn,$name)."'";   //it's is used to prevent from SQL injection.
echo $query."<br>";
$result = mysqli_query($conn,$query);
if($result)
{
    while($row = mysqli_fetch_array($result))   //it's the best one and much more easy way to get data.
    {
        print_r($row);
        echo "<br>";
    }
}
else
{
    echo "No data found!";
}

?>