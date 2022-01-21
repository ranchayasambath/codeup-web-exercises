"use strict";

$(document).keyup(function(event){
    console.log(event.keyCode);
});
    var input = "";
    var key = '3838404037393739666513';
    $(document).on('keydown', function(event) {
        input = input + (event.keyCode);
        console.log(input);
        if (input === key){
            alert("You unlocked 30 Lives");
            $("#game").html('<iframe id="game" src="https://www.retrogames.cc/embed/16841-contra-usa.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>')
            $("body").css("background-color","black");
            $(document).off();
        }if(input.length > key.length){
            alert("Wrong password, Try again");
            location.reload();
        }if(input.key === "r"){
            location.reload();
        }






        // input+= (event.keyCode);
        // console.log(input)
        // if (input === key){
        //     alert("Cheat Activated");
        //     // audio.play();
        //     $("#game").html('<iframe id="game" src="https://www.retrogames.cc/embed/16841-contra-usa.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>')
        // }
        // // if the sequence of  input is not the same as the first key clear the input;
        // if (!key.indexOf(input)) return;
        // // then  return any key pressed back to an empty string
        // return input = ("" + event.keyCode);
    });




