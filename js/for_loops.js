//Not working?!
let showMultiplicationTable = 10//prompt("enter your number") ;
for (let i = 1; i <= 10; i++) {
    console.log(showMultiplicationTable + "x" + i + "=" + (showMultiplicationTable * i));
}
//------------------------------------------------
for (let i = 1; i <= 10; i++) {
let i = Math.floor(Math.random() * (200 - 20) + 20);
 if (i % 2 == 0) {
    console.log(i + " is even");
 }else console.log(i + " is odd");
}
//-----------------------------------------------
for (let i = 1; i <=9; i++){
    let end = [];
for (let j= 0; j <=i; j++){
    end.push("");
}
console.log(end.join(i));
}
//-------------------------------------------------
for (i = 100; i >= 5; i -= 5) {
        console.log(i);
}
//--------------------------------------------------