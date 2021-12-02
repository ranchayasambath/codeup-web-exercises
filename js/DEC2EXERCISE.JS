//Exercise:
/* function parking(input){

    let spot = 0;
    console.log(`There are ${input} parking spots.`)

    for (let i = input; i > 0; i--){
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
let parkingSpots = 20
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
};
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
/*let i=0;
do{
    console.log("loop through numbers by 2: ", i); /*i++;i++; */ i=i+2;
//} while(i <=50);
//-----------------------------------------------------------------------------------------