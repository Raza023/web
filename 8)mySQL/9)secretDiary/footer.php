    <script src="jquery/jquery.min.js"></script>
    <script src="bootstrap/js/popper.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>

    <script>
        // $("textarea").on('change keyup paste', function() {   //not working well
        //     alert("changed");
        // });

        $('#text-area').bind('input propertychange', function() {
            // $.ajax({
            //     method: "POST",
            //     url: "update.php",
            //     data: { data: $("#text-area").val()}
            // }).done(function( msg ) {
            //     alert( "Data Saved: " + msg );
            // });

            $.ajax({
                type: "POST",
                url: "update.php",
                data: { data: $("#text-area").val()},
                // dataType: "json",   //for json response from server.
                dataType: "text",
                success: function (response) {
                    //alert( "Data Saved: " + response.data );    //for json response from server.
                    //alert( "Data Saved: " + response );
                }
            });

            

        });

        


        
    </script>
</body>

</html>