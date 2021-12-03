//Prompt the user for an odd number between 1 and 50.
// Use a loop and a break statement to continue prompting the user if they enter invalid input.
// let i;
// let ask= prompt("Enter an Odd number 1 - 50");
// for (i = 1; i<=50; i++){
//     let even = i%2 ==0;
//     if (ask = even) {
//         break;
//     }
//     ask = prompt("Re enter your number");
//     if(ask == i%2 !==0){
//         continue;
//     }
// }
//----------------------------------------------------------------------
let even = function(ask) {
    return (ask % 2 === 0);
}

while(true) {
    var ask = prompt("Enter odd number between 1 and 50.")
    if (!even(ask) && (ask >= 1 && ask <= 50)) {
        break;
    }
}

for (let i = 1; i < 50; i+=2) {
    if(i == ask){
        console.log("Yikes! Skipping number: " + i);
        continue;
    }
        console.log("Here is an odd number: " + i);
}
//---------------------------------------------------------------------------