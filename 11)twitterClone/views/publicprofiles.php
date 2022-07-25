<div class="container">
    <div class="row" style="margin: 30px 0px 30px 0px;">
        <div class = "col-md-8">

            <?php 
            if(array_key_exists("userid",$_GET))
            {
                if($_GET["userid"])
                {
                    displayTweets($_GET["userid"]);
                }
            }
            else
            {
                echo "<h1>Active Users</h1>
                <hr>";
                displayUsers();
            }
            
            ?>

        </div>
        <div class="col-md-4">
            <?php displaySearchTweets(); ?>
            <hr>
            <?php displayTweetBox(); ?>
        </div>
    </div>
</div>
