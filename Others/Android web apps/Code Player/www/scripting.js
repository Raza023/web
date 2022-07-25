$(document).ready(function () {
    function updateOutput()
    {
        $("iframe").contents().find("html").html("<html><head><style>"+$("#cssarea").val()+"</style></head><body>"+$("#htmlarea").val()+"</body></html>");
        document.getElementById("outputarea").contentWindow.eval($("#jsarea").val());
    }

    $(".togglebtn").hover(function () {
        // over
        $(this).addClass("highlightBtn");
        //$(this).css("background-color", "grey");
    }, function () {
        // out
        $(this).removeClass("highlightBtn");
        //$(this).css("background-color", "#EEEEEE");
    }
    );
    $(".togglebtn").click(function () {
        $(this).toggleClass("active");
        $(this).removeClass("highlightBtn");

        
        let panelid = $(this).attr("id")+"area";
        //$("#"+panelid).toggle();
        $("#"+panelid).toggleClass("hidden");

        let numOfPanels = 4 - $(".hidden").length;   //kitna panels hain jin par hidden nahi ha.
        $(".panel").width(($(window).width())/numOfPanels - 5);
    });

    $(".panel").height($(window).height() - $("#header").height() - 15);
    $(".panel").width(($(window).width())/2 - 5);


    updateOutput();
    $("textarea").on('change keyup paste', function () {
        updateOutput();
    });

});