"use strict";

$(document).keyup(function(event){
    console.log(event.keyCode);
});
    var input = "";
    var key = '38384040373937396665';
    $(document).on('keydown', function (event) {
        input = input + (event.keyCode);
        if (input === key) {
            alert("Cheat Activated");
            audio.play();
        }
        if (!key.indexOf(input)) return;
        return input = ("" + event.keyCode);
    });




