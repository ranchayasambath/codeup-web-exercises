"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
/*function analyzeColors(input) {
    if (input =="green"){
        return (input + " Lantern: in darkest days....");
    } else if (input == "yellow"){
        return (input + " is the color of fear.");
    }else{
        return(input + " is not a lantern corp color.");
    }
}
console.log(analyzeColors("green"));*/

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
//console.log(analyzeColors(randomColor));
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
switch(colors) {
    case"red":
        return("Red is the color of rage.");
        break;
    case"blue":
        return("Blue is the color harmony.");
        break;
    default:
        return("They are part of lantern corp.");
        break;
}
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var ask =prompt("Whats your favorite lantern corp?");
switch(ask) {
    case"red":
        alert("Red is the color of rage.");
        break;
    case"blue":
        alert("Blue is the color harmony.");
        break;
    default:
        alert("They are part of lantern corp.");
        break;
}
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
var luckyNumber = Math.floor(Math.random() * 6);
function calculateTotal(luckyNumber,total){
    if(luckyNumber==0){
        return("You get no Discount!")
    }else if(luckyNumber==1){
        return("you get 10% discount " +"and your new total is "+ (total-(total*.1)));
    }else if(luckyNumber==2){
        return("you get 25% discount " +"and your new total is "+(total-(total*.25)));
    }else if(luckyNumber==3){
        return("you get 35% discount " +"and your new total is "+(total-(total*.35)));
    }else if(luckyNumber==4){
        return("you get 50% discount " +"and your new total is "+(total-(total*.5)));
    }else{
        return("You'll get everything for free");
    }
}
console.log(calculateTotal(luckyNumber,100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var askTotal=prompt("How much is your total bill?");
    if(luckyNumber===0){
        alert("You get no Discount!")
    }else if(luckyNumber===1){
        alert("you get 10% discount " +"and your new total is "+ (askTotal-(askTotal*.1)));
    }else if(luckyNumber===2){
        alert("you get 25% discount " +"and your new total is "+(askTotal-(askTotal*.25)));
    }else if(luckyNumber===3){
        alert("you get 35% discount " +"and your new total is "+(askTotal-(askTotal*.35)));
    }else if(luckyNumber===4){
        alert("you get 50% discount " +"and your new total is "+(askTotal-(askTotal*.5)));
    }
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
var ask= confirm("Would you like to enter a number?");
if (ask==true) {
    var askNum = prompt("Enter your number.");
    if (askNum % 2 == 0) {
        //alert("The number is even");
    } else if (askNum % 2 !== 0) {
        //alert("The number is not even");
    }
    //alert("The number plus 100 is " + parseInt(askNum+100);
    if (askNum > 0) {
        //alert("The number is postive.");
    } else {
        //alert("The number is negative.");
    }
    }else{
        alert ("the number is not data type.")
    }

