<?php
setcookie("email","",time()-60*60);    //cookie expired an hour ago :)

// Include URL for Login page to login again.
header("Location: login.php");
exit;
?>