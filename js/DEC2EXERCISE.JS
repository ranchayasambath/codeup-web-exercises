//Exercise:
/* function parking(input){

    let spot = 0;
    console.log(`There are ${input} parking spots.`)

    while (let i = input; i > 0; i--){
        spot++
        console.log(`There are : ${spot} parking spot(s) available..`)
    }
}
parking(20); */
//--------------------------------------------------------------------------------
//while(!parked) is the same as while(parked) == parked= false;//
/*let usedSpots = 20;
while(usedSpots > 0){
    usedSpots--;
    console.log(`there are ${20- usedSpots} available.`)};*/
//--------------------------------------------------------------------------------
//BEST EXAMPLE:
/*let parkingSpots = 20
let emptyParkingSpotNum = Math.floor(Math.random() * 20)
let i = 0;;
while(i <= parkingSpots) {
    // console.log(i)
    i++
    if (i === emptyParkingSpotNum) {
        console.log("park in spot " + i)
        break;
    }
    //console.log(i)
}; */
//----------------------------------------------------------------------------------------
/*let i= 0;
while(i<=15){
    console.log("loop number: " + i);i++;
}*/

//----------------------------------------------------------------------------------------
/*let i=20;
do {
    console.log("i before ++i: ", i); i++
    console.log("i after ++i: ", i);

} while (i <=15);*/
//----------------------------------------------------------------------------------------
// loop through numbers 0 - 50 by 2s
//let i=0;
//do{
    //console.log("loop through numbers by 2: ", i); /*i++;i++; */ i=i+2;
//} while(i <=50);
//-----------------------------------------------------------------------------------------
/*let i=1
while(i <= 10){
    console.log("iteration i: " +i); i++;
} */
//------------------------------------------------------------------------------------------
/*let j=1
do{
    console.log("iteration of j: " +j);j++;
} while(j <= 10); */
//--------------------------------------------------------------------------------------------
// TODO: using prompt() and alert(), write a loop that will continue to ask for the correct password until the
// correct password is given.
/* let password = "hello";
let request = prompt ("Enter your Password");
while(request!==password) {
    alert("incorrect password");
    request = prompt("Reenter Password");
}
alert("Password Accepted"); */
//-----------------------------------------------------------------------------------------------------
//1. Starting point;
//2. Stopping point;
//3. How to iterate;
//for(let i = 0; i <= 15; i++ /* i+=3){
    //console.log("My favorite number is: " + i);
//}
// A WHILE LOOP EXAMPLE:
/* let animals = ["frogs", "dogs", "cats","horses"];
let i=0
while(i<animals.length){
    console.log("My favorite animal is: " + animals[i]); i++;
} */
/*let dozens = 0;
for (let eggs = 0; eggs <= 4; eggs++){
    dozens= eggs * 12;
    console.log("dozens : ", eggs);
    console.log("eggs ", dozens);
} */
//NESTED LOOPS
// count 1 to 5
for(let counter = 1; counter <= 5; counter++){
    console.log('First Counter: ' + counter);
    //counts from 5 to 1

    for(let counterTwo =5; counterTwo > 0 ; counterTwo--){
        console.log("Second counter: " + counterTwo);
    }
}
