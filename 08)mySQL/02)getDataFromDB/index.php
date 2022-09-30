<?php 

$conn = mysqli_connect("127.0.0.1:3307","root","Qwerty-123","users");

if(mysqli_connect_error())
{
    die("There was an error in connecting to the database.");    //if there is an error skip remaing script.
}

$query = "SELECT * FROM user";

if($result = mysqli_query($conn,$query))
{
    $row = mysqli_fetch_array($result);         //to fetch first row.
    $sameRow = mysqli_fetch_row($result);       //same as above.
    print_r($row);
    echo "<br>";
    echo $row[0]." ".$row[1]." ".$row[2]."<br>"; 
    echo $row["id"]." ".$row["email"]." ".$row["password"]."<br>";   //we can get data in this way as well.
    echo "<br>";
    print_r($sameRow);
    echo "<br>";
    echo $sameRow[0]." ".$sameRow[1]." ".$sameRow[2]."<br>";
    echo "<br>";

    $result = mysqli_query($conn,$query);     //getting data again fromm database.
    $rows = mysqli_fetch_all($result);        //to fetch all rows.

    echo "<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>EMAIL</th>
            <th>PASSWORD</th>
        </tr>
    </thead>
    <tbody>";
        foreach($rows as $r)
        {
            echo"<tr>
                    <td>".$r[0]."</td>
                    <td>".$r[1]."</td>
                    <td>".$r[2]."</td>
                <tr>";
        }
    echo "</tbody>
    <table>";
}
else
{
    echo "There was an error in executing the sql query.";  //we can use die here as well.
}

?>