"user strict";
let i= 1;
while (i<= 65536 -1)
    console.log(i*=2);
//--------------------------------------------
var allCones = Math.floor(Math.random() * 50 +50)
do{
    var conesToPurchase = Math.floor(Math.random()*5)+1;
    if (conesToPurchase <= allCones){
        console.log(conesToPurchase + " cones sold...")
        allCones -= conesToPurchase
    } else {
        console.log("Cannot sell you" + conesToPurchase + "cones I have" + allCones + " ....")
    }
console.log(allCones)
}while(allCones > 0)
console.log("Yay! I sold all the cones!")