"use strict";

$(document).keyup(function(event){
    console.log(event.keyCode);
});
    var input = "";
    var key = '38384040373937396665';
    $(document).on('keydown', function(event) {
        input+= (event.keyCode);
        if (input === key){
            alert("Cheat Activated");
            audio.play();
            $("#game").html('<iframe id="game" src="https://www.retrogames.cc/embed/16841-contra-usa.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>')
            // document.getElementById("game").innerHTML='<iframe id="game" ' +
            //     'src="https://www.retrogames.cc/embed/16841-contra-usa.html" width="600" ' +
            //     'height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" ' +
            //     'mozallowfullscreen="true" scrolling="no"></iframe>'

        }
        if (!key.indexOf(input)) return;
        return input = ("" + event.keyCode);
    });




