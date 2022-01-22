"use strict";

$(document).keyup(function(event){
    console.log(event.keyCode);
});
    var input = "";
    var key = '3838404037393739666513';
    $(document).on('keydown', function(event) {
        input = input + (event.keyCode);
        console.log(input);
        if (input === key) {
            alert("You unlocked 30 Lives");
            $("#game").html('<iframe id="game" src="https://www.retrogames.cc/embed/16841-contra-usa.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>')
            $("body").css("background-color", "black");
            $(document).off();

        }else{
            // if input is not within the index of key reset input back to empty string:
            if (key.search(input)){
            input= ("")
        }}});




