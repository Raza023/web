<div class="container">
    <div class="row" style="margin: 30px 0px 30px 0px;">
        <div class = "col-md-8">
            <h1>Recent tweets</h1>
            <hr>
            <?php displayTweets("mytimeline"); ?>
        </div>
        <div class="col-md-4">
            <?php displaySearchTweets(); ?>
            <hr>
            <?php displayTweetBox(); ?>
        </div>
    </div>
</div>