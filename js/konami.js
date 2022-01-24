"use strict";

$(document).keyup(function(event){
    console.log(event.keyCode);
});
    var input = "";
    var key = '3838404037393739666513';
    $(document).on('keydown', function(event) {

        if (key.indexOf(input)){
            if(key.indexOf(input)!== key){
                input = ("");
            }
        }
        input = input + (event.which);
        console.log(input);
        if (input === key) {
            alert("You unlocked 30 Lives");
            $("#game").html('<iframe id="game" src="https://www.retrogames.cc/embed/16841-contra-usa.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>')
            $("body").css("background-color", "black");
            $(document).off();
        }});




