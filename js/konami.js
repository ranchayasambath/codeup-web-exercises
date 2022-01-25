"use strict";

$(document).keyup(function(event){
    console.log(event.keyCode);
});

    var input = "";
    var key = '3838404037393739666513';
    $(document).on('keydown', function(event) {

// check input if its equal to the first index of key
        while (key.indexOf(input)){
            // if input is outside of first index reset string.
            if(key.indexOf(input)!== key.indexOf(0)){
                input = ("");
            }
        }  input = input + (event.which);

        console.log(input);
        if (input === key) {
            alert("You have added 30 lives!");
            $("#game").html('<iframe id="game" src="https://www.retrogames.cc/embed/16841-contra-usa.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>')
            $("body").css({"background-color": "black","color":"white"});
            $("h1").html("" +
                "<span>A</span>\n" +
                "<span>r</span>\n" +
                "<span>c</span>\n" +
                "<span>a</span>\n" +
                "<span>d</span>\n" +
                "<span>e</span>\n" +
                "<span> </span>\n" +
                "<span>M</span>\n" +
                "<span>o</span>\n" +
                "<span>d</span>\n" +
                "<span>e</span>").css({"text-align":"center","font-size":"5em"}).dblclick(function(){
                $(this).fadeOut();
            });

            $(document).off();
        }});




