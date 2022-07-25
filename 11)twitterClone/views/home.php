<div class="container" style="margin-top: 30px; margin-bottom: 100px;">
    <div class="row">
        <div class = "col-md-8">
            <h1>Recent tweets</h1>
            <hr>
            <?php displayTweets("public"); ?>
        </div>
        <div class="col-md-4">
            <?php displaySearchTweets(); ?>
            <hr>
            <?php displayTweetBox(); ?>
        </div>
    </div>
</div>
