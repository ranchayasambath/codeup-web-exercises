//Not working?!
let showMultiplicationTable = /*prompt("enter your number");*/10
for (let i = 1; i <= 10; i++) {
    console.log(showMultiplicationTable + "x" + i + "=" + (showMultiplicationTable * i));
}
// function showMultiplicationTable(x){
//     for (let i = 1; i <= 10; i++) {
//         console.log(x  + "x" + i + "=" + x * i);
//     }
// }
// showMultiplicationTable(4);
//------------------------------------------------
for (let i = 1; i < 10; i++) {
    var rando = Math.floor(Math.random() * (200 - 20) + 20);
    if (rando % 2 == 0) {
        console.log(rando + " is even");
    } else {
        console.log(rando + " is odd");
    }
}
//-----------------------------------------------
// for (let i = 1; i <=9; i++){
//     let end = [];
// for (let j= 0; j <=i; j++){
//     end.push("");
// }
// console.log(end.join(i));
// }
//-----------------------------------------------------------
for (let i = 1; i <=9; i++){
    let end = "";
    for (let j= 0; j <=i; j++){
        end+=i;
    }
    console.log(end);
}
//-------------------------------------------------
for (i = 100; i >= 5; i -= 5) {
        console.log(i);
}
//--------------------------------------------------