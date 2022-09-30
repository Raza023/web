<?php
print_r($_POST);
if($_POST)                // checks if it has some keys => values or not (empty or not).
{
    $names = array("HASSAN","HUSSAIN","ALI","JAWAD","KAMRAN");
    if(array_key_exists("name",$_POST))   // checks if it has key named "name".
    {
        $found = false;
        foreach($names as $value)
        {
            if(strtoupper($_POST["name"])==$value)
            {
                $found = true;
            }
        }
        if($found)
        {
            echo "<p>Hi there ".$_POST["name"]."!</p>";
        }
        else
        {
            echo "<p>Wait a minute! Who are you?</p>";   
        }

    }
    else if($_POST)    //to handle other forms requests.
    {
        echo "<p>I don't know you!</p>";
    }
}
?>

<h1>What is your name?</h1>
<form method="post">
    <input type="text" name="name">
    <input type="submit" value="Check">
</form>


<!-- <form method="post">
    <input type="text" name="name2">
    <input type="submit" value="Check">
</form> -->