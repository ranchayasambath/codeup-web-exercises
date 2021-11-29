// Erstwhile, the legislature determined that being at the bar is not necessary in order to be served, but all the remaining conditions are still valid
// Change the expression assigned to cashOnHand to make isAtBar optional  while still requiring the remaining values to be true
/*
let isAtBar = true;
let bac = .07;
let age = 21;
let cashOnHand = 5.00;


let canHaveADrink = ((isAtBar || !isAtBar) && bac < .08 && age >= 21 && cashOnHand >= 5.00) // true && false && true && true --> false

if (canHaveADrink){ // true or false
    console.log("Have a brewski my dude!");
}else{ // it was not true
    console.log("Sorry buddy, no brew for u");
}
*/
/*function GoodToFly(){
    let cloudy=false;
    let planes = 0;
        if ((cloudy=false) && (planes <10)){
        console.log("today is a good day to fly!")
        }else{
        console.log("today is NOT a good day to fly!")
    }
}
GoodToFly(planes=9); <-- Doesn't work*/
function GoodToFly(Cloudy , Planes){
    if (!Cloudy && Planes <10) {
        console.log("today is a good day to fly!")
    }else{
        console.log("today is NOT a good day to fly!")
    }
}
GoodToFly(Cloudy=false, Planes=9); //Works!!

function add(first,second){
    return (first+second);
}
console.log(add(first=1,second=2));

function minus(first,second){
    return (first-second);
}
console.log(minus(first=2,second=1));

function multiply(first,second){
    return (first*second);
}
console.log(multiply(first=3,second=4));

function divide(first,second){
    return (first+second);
}
console.log(divide(first=6,second=3));

function remainder(first,second){
    return (first%second);
}
console.log(remainder(first=6,second=3))


