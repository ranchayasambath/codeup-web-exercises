var str="bJIENsdfRAIRVIrsRFAijgRar";
var i=0;
// -------------while loop-------------
// while ( i < str.length){
//     let char = str.charAt(i);
//     if (char === char.toLowerCase()){
//         console.log(char + " is lower case.");
//     }else{
//         console.log(char + " is upper case.")
//     }i++;
// };

// ----------------- do while loop------------------
do {
    if(str.charAt(i)=== str.charAt(i).toLowerCase()){
        console.log(str.charAt(i) +" is lower case.")
    }else{
        console.log(str.charAt(i) + " is Upper case.")
    }
    i++;

}  while(i < str.length);



// --------------------- for loop-------------------
// for (let i=0 ; i< str.length; i++){
//     // var char = str.charAt(i)
//     if(str.charAt(i) === str.charAt(i).toLowerCase()){
//         console.log(str.charAt(i) + " is lower case.");
//     }else{
//         console.log(str.charAt(i) + " is Upper case.")
//     }
// };
//
