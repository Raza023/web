<?php
if ($_GET["function"]=="logout")
{
    setcookie("id","",time()-60*60);    //cookie expired an hour ago :)
    setcookie("email","",time()-60*60);    //cookie expired an hour ago :)
    // Include URL for Login page to login again.
    header("Location: index.php");
    exit;
}
?>