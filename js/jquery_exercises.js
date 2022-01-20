"user strict";

$(document).ready(function(){
    // alert( 'The DOM has finished loading!' );
});
// var hello = $("#hello").html();
// alert(hello);
// var world = $("#world").html();
// alert(world);

// $(".codeup").css({"border":"solid 1px", "color": "red"});

// $("li").css("font-size","20px");

// $("h1").css({"border":"solid 1px", "color":"blue", "background-color":"orange" });
// $("p").css({"border":"solid 1px", "color":"blue", "background-color":"orange" });
// $("li").css({"border":"solid 1px", "color":"blue", "background-color":"orange" });

$("h1,p,li").css({"border":"solid 1px", "color":"blue", "background-color":"orange" });

var heading = $("h1").html();
alert (heading);