<?php
print_r($_GET);                            //prints our GET request.

echo "<br>";

if($_GET)                                  // checks if it has some keys => values or not (empty or not).
{
    if(array_key_exists("number",$_GET))   // checks if it has key named "number".
    {
        if(is_numeric($_GET["number"]) && $_GET["number"]>0 && $_GET["number"] == round($_GET["number"],0))   //round($num,0) everything to the right of the given place value becomes a zero (e.g., 4.3 becomes 4.0)(4 remains 4)  // we can use floor($num) as well it will do the same.
        {
            $i=2;
            $isPrime = true;
            while($i<$_GET["number"])
            {
                if($_GET["number"]%$i==0)
                {
                    $isPrime = false;
                }
                $i++;
            }
            if($isPrime)
            {
                echo $_GET["number"]." is a prime number<br>";
            }
            else
            {
                echo $_GET["number"]." is not a prime number<br>";
            }
        }
        else if($_GET["number"]=="")
        {
            echo "<p>Please enter a positive whole number</p>";
        }
        else if ($_GET)
        {
            echo "<p>Please enter a positive whole number</p>";
        }
    }
}
?>

<h1>Entere a prime number: </h1>

<!-- by default form's method="get"  -->
<form>
    <input type="text" name="number" id="num">
    <input type="submit" value="Check">
</form>


<!-- If we have another form with name="number2" it will automatically hndled.  -->
<!-- <form>
    <input type="text" name="number2" id="num">
    <input type="submit" value="Check">
</form> -->