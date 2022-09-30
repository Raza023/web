$(document).ready(function () {
    // ready is used because we want all of jQuery  to be executed after page is being loaded.
    //shortcut for $(document).ready(function () {});     is    $(function () {});

    //console.log($);                 //to see jQuery installed or not.
    //console.log(jQuery);            //to see jQuery installed or not.
    //console.log("We are using jQuery.");   //to consle anything.

    /*----------------------------------------syntax-------------------------------------------------- */
    //$('selector').action();
    //$('p').click();
    //$('#id').hide();
    //$('.class').click();

    /*---------------------------------tere are three types of selectors-----------------------------------*/
    //1) element selector     $('p').click();    selects all that elements
    // $('h1').click(function(){      //click action
    //     $(this).hide();                             //to hide this h1.
    //     console.log("You clicked on h1", this);        //this will print out html line you clicked on.
    // });
    //$("*").click();            //automatically clicks on all elements when page loaded.
    //$("h1#second").click();    //automatically clicks on h1 with id #second when page loaded.
    //$("h1.odd").click();       //automatically clicks on h1 with class .odd when page loaded.
    //$("h1:first").click();     //automatically clicks on first available h1 when page loaded.

    //2) id selector          $('#id').hide();   selects only that id
    // $("#second").click(function () {
    //     console.log($("#second").html());
    // });

    //3) class selector       $('.class').click();
    // $(".odd").click(function () {
    //     console.log("this is odd line.");
    // });

    /*-----------------------------------Events in JQuery------------------------------- */

    /*----------------------------------A) Mouse events:---------------------------------*/

    //1) click
    //$('p').click();    //automatically clicks on all h1 elements when page loaded.
    // $('h1').click(function(){      //click action
    //     console.log("You clicked on h1",this); //this will print out html line you clicked on.
    // });

    //2) dblclick
    // $('h1').dblclick(function(){      //click action
    //     console.log("You double clicked on h1",this); //this will print out html line you double clicked on.
    // });

    //3) mouseenter  (when you enter in element content. it's different from hover. Hover is when you enter in element.)
    // $("h1").mouseenter(function () {
    //     console.log("You entered in h1",this); //this will print out html line.
    // });

    //4) mouseleave (when you leave element content.)
    // $("h1").mouseleave(function () {
    //     console.log("You left h1",this); //this will print out html line.
    // });

    //5) mousedown (when you click any button.)
    // $("h1").mousedown(function () {
    //     console.log("You right or left clicked on h1",this); //this will print out html line.
    // });

    //6) mouseup (jab button dubana ka baad chora jese hi.)
    // $("h1").mouseup(function () {
    //     console.log("You recently clicked on h1",this); //this will print out html line.
    // });

    //7) hover
    // $("h1").hover(function () {     //it takes two parameters as functions.(hover over,hover out)
    //         // over
    //         console.log("you hover over.",this);
    //     }, function () {
    //         // out
    //         console.log("you hover out",this);
    //     }
    // );

    //8) on event
    // $("h1").on('click', function () {
    //     console.log("You clicked on h1",this); //this will print out html.
    // });

    //9) on multiple event
    // $("h1").on({
    //     click: function () {
    //         console.log("You clicked on h1", this); //this will print out html.
    //     },
    //     mouseenter: function () {
    //         console.log("You entered h1", this); //this will print out html.
    //     },
    //     mouseleave: function () {
    //         console.log("You left h1", this); //this will print out html.
    //     }
    // });

    //B) Keyboard events:
    //1) keypress
    //2) keydown
    //3) keyup

    //C) Form events:
    //1) submit
    //2) change
    //3) focus
    //4) blur

    //D) document/window events
    //1) load
    //2) resize
    //3) scroll
    //4) unload


    /*------------------------------------------------hide/show-----------------------------------------------------*/
    $("#hs").click(function () {
        $("p#hdsh").hide(1000, function () {
            console.log("hidden");
        });
        $("p#hdsh").show(1000, function () {
            console.log("shown");
        });
    });

    /*-----------------------------------------toggle --------------------------------------*/
    $("#toggle").click(function () {
        $("p#hdsh").toggle(1000, function () {
            console.log("toggled");
        });
    });

    /*-----------------------------------------Fading--------------------------------------*/
    $("#fin").click(function () {
        $("h4").fadeIn(function () {
            console.log("faded in");
        });
    });
    $("#fout").click(function () {
        $("h4").fadeOut(function () {
            console.log("faded out");
        });
    });
    $("#ftoggle").click(function () {
        $("h4").fadeToggle(function () {
            console.log("faded");
        });
    });
    $("#fto").click(function () {
        $("h4").fadeTo(1000, 0.5, function () {
            console.log("fadded to 0.5 opaccity");
        });
    });
    $("#fto2").click(function () {
        $("h4").fadeTo(1000, 1, function () {
            console.log("fadded to 1 opaccity");
        });
    });

    /*----------------------------------------Sliding--------------------------------------- */
    $("#sup").click(function () {
        $("p#sliding").slideUp(1000, function () {
            console.log("slided up");
        });
    });
    $("#sdown").click(function () {
        $("p#sliding").slideDown(1000, function () {
            console.log("slided down");
        });
    });
    $("#stoggle").click(function () {
        $("p#sliding").slideToggle(1000, function () {
            console.log("slided");
        });
    });

    /*-----------------------------------------Animation-------------------------------------------- */
    $("#anim").click(function () {
        $("p#animtext").animate({ opacity: 0.3, width: "50%" }, 1000, function () {
            console.log("animated");
        });
        $("p#animtext").animate({ opacity: 1.0, width: "100%" }, 1000, function () {
            console.log("animated");
        });
    });

    /*----------------------------------getting content------------------------------------ */

    //console.log($("html").html());  //innerHTML
    //console.log($("html").text());  //innerText
    //console.log($("#name").val());  //value of input field.
    //$("#name").empty();           //form value empty.
    //$("p#animtext").empty();      //innerText remove.
    //$("p#animtext").remove();     //element remove.

    /*--------------------------------class handling----------------------------------- */

    $("#addc").click(function () {
        $("#classtext").addClass('myclass');         //add myclass from that element
    });
    $("#remc").click(function () {
        $("#classtext").removeClass('myclass');      //remove myclass from that element
    });
    $("#togc").click(function () {
        $("#classtext").toggleClass('myclass');      //toggle myclass(add/remove) from that element with same function.
    });

    /*-----------------------------------getting style------------------------------------- */
    
    console.log($("#animtext").css("color"));
    $("#animtext").css("color", "red");

    /*-------------------------------------Ajax----------------------------------------- */

    $.get("https://code.jquery.com/jquery-3.6.0.js",
        function (data, textStatus, jqXHR) {
            alert(data);
        }
    );

    $.get("https://code.jquery.com/jquery-3.6.0.js",
        function (data, textStatus, jqXHR) {
            alert(textStatus);
        }
    );

    var data = {name:"hassan",age:21};
    console.log(typeof(data));
    // $.post("https://code.jquery.com/jquery-3.6.0.js", data,     //not allowed to send data here.
    //     function (data, textStatus, jqXHR) {
    //         alert(textStatus);
    //     }
    // );

});
