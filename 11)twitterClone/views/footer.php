    <footer class="footer">
        <div class="container">
            <p>Copyright &copy;Raza Twitter 2022</p>
        </div>
    </footer>
 
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div id="msg"></div>
                    <form class="row g-3">
                        <input type="hidden" name="loginActive" id="loginActive" value="1" />
                        <div class="col-md-12">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" required />
                        </div>
                        <div class="col-md-12">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" required />
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <a href="#" id="toggleBtn">Sign up</a>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" id="loginSignUpBtn">Login</button>
                </div>
            </div>
        </div>
    </div>

    <script src="./jquery/jquery.min.js"></script>
    <script src="./bootstrap/js/popper.min.js"></script>
    <script src="./bootstrap/js/bootstrap.min.js"></script>
    <script src="./scripts.js"></script>
    <script>
        $("#toggleBtn").click(function (e) { 
            e.preventDefault();
            if($("#loginActive").val()=="1")
            {
                $("#loginActive").val("0");
                $("#exampleModalLabel").html("Sign up");
                $("#loginSignUpBtn").html("Sign up");
                $("#toggleBtn").html("Login");
            }
            else
            {
                $("#loginActive").val("1");
                $("#exampleModalLabel").html("Login");
                $("#loginSignUpBtn").html("Login");
                $("#toggleBtn").html("Sign up");
            }
        });

        $("#loginSignUpBtn").click(function (e) { 
            e.preventDefault();
            $.ajax({
                type: "post",
                url: "actions.php?action=loginSignup",
                data: "email="+$("#email").val()+"&password="+$("#password").val()+"&loginActive="+$("#loginActive").val(),
                // dataType: "dataType",
                success: function (response)
                {
                    // alert(response);
                    $("#msg").html(response);
                }
            });
        });

        $(".toggleFollow").click(function (e) { 
            e.preventDefault();
            // alert($(this).attr("data-userID"));
            var theirid = $(this).attr('data-userID');
            $.ajax({
                type: "post",
                url: "actions.php?action=toggleFollow",
                data: "userID="+theirid,
                // dataType: "dataType",
                success: function (response)
                {
                    // alert(response);
                    if (response=="1")
                    {
                        $("a[data-userID="+theirid+"]").html("Unfollow");
                    }
                    else if(response=="0")
                    {
                        $("a[data-userID="+theirid+"]").html("Follow");
                    }
                    else
                    {
                        alert("response");
                    }
                }
            });
        });

        $("#postTweetBtn").click(function (e) { 
            e.preventDefault();
            $mytweet = $("#myTextbox").val();
            $.ajax({
                type: "post",
                url: "actions.php?action=postTweet",
                data: "tweet="+$mytweet,
                // dataType: "dataType",
                success: function (response) {
                    //alert(response);
                    if(response == "empty")
                    {
                        $("#showTweetResponse").html('<p class="alert alert-danger" role="alert">Tweet is empty. Could not post it.</p>');
                    }
                    else if(response == "too big")
                    {
                        $("#showTweetResponse").html('<p class="alert alert-danger" role="alert">Tweet is too big. Could not post it.</p>');
                    }
                    else if(response == "posted")
                    {
                        $("#showTweetResponse").html('<p class="alert alert-success" role="alert">Tweet posted successfully!</p>');
                    }
                    else if(response=="login require")
                    {
                        $("#showTweetResponse").html('<p class="alert alert-danger" role="alert">You must have to log in first to post a tweet.</p>');   
                    }
                    else
                    {
                        $("#showTweetResponse").html('<p class="alert alert-danger" role="alert">Error in posting tweets! Could not post it.</p>');
                    }
                }
            });
        });
    </script>
</body>

</html>