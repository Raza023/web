<?php 
    include("included.php");
    echo "<hr>";
    echo "<h1>Content from other website like https://example.com/</hr>";
    echo file_get_contents("https://example.com/");
?>