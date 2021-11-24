//1
var a = 1;
console.log(a);
//1
var b = a++;
console.log(b);
//3
var c = ++a;
// what is the value of a, b, and c?
console.log(c);
//hello
var d = "hello";
console.log(d);
//false
var e = false;
console.log(e);
//NaN
d++;
console.log(d);
//1
e++;
console.log(e);
//undefined
var perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;
console.log(perplexed);
//2.7
var price = 2.7;
console.log(price);
//2.7
price.toFixed(2);
console.log(price);
//false
console.log(isNaN(0));
//false
console.log(isNaN(1));
//false
console.log(isNaN(""));
//true
console.log(isNaN("string"));
//false
console.log(isNaN("0"));
//false
console.log(isNaN("1"));
//false
console.log(isNaN("3.145"));
//false
console.log(isNaN(Number.MAX_VALUE));
//false
console.log(isNaN(Infinity));
//true
console.log(isNaN("true"));
//false
console.log(isNaN(true));
//true
console.log(isNaN("false"));
//false
console.log(isNaN(false));
// to illustrate why the isNaN() function is needed:
NaN == NaN
//false
!true
console.log(!true);
//true
!false
console.log(!false);
//true
!!true
console.log(!!true);
//false
!!false
console.log(!!false);
//false
!!0
console.log(!!0);
//false
!!-0
console.log(!!-0);
//true
!!1
console.log(!!1);
//true
!!-1
console.log(!!-1);
//true
!!0.1
console.log(!!0.1);
//true
!!"hello"
console.log(!!"hello");
//false
!!""
console.log(!!"");
//false
!!''
console.log(!!'');
//true
!!"false"
console.log(!!"false");
//true
!!"0"
console.log(!!"0");

var sample = "Hello Codeup";
//var sample2= "Students";
console.log(sample.length);
console.log(sample.toUpperCase());
console.log(sample.toLowerCase());
console.log(sample+=" Students");
console.log(sample.replace(" Students", " Class"));
console.log(sample.indexOf("c"));
console.log(sample.indexOf("C"));
console.log(sample.substring(6,12));
//let cIndex= sample.indexOf("C");
//console.log(sample.substr(cIndex, (sample.indexOf("p")+1 ) - cIndex));

var LittleMermaid= 3;
var BrotherBear=5;
var Hercules=1;
console.log("You would have to pay " + "$" +(LittleMermaid+BrotherBear+Hercules)*3);

var Amazon=380;
var Google=400;
var Facebook=350;
console.log("You weekly salary is " + "$" + ((Facebook*10)+(Google*6)+(Amazon*4)));

var nFull=true;
var nConflict=true;
if (nFull&&nConflict){
    console.log("Welcome to Class");
}else{
    console.log("Unable to Enroll");
}

var premium=true;
var nExpire=false;
var buymore=2;
if ((!nExpire && buymore>=2) || premium) {
    console.log("Qualify for product offer!")
}else{
    console.log("not qualify!")
}

var username = "codeup";
var password = 'notastrongpassword';

    if(password.length >=5){
        console.log(true);
        }else {
        console.log(false);
        {
    if (password.length <= 20) {
        console.log(true);
        } else {
        console.log(false);
        }
    if (username.trim()) {
        console.log(true);
        } else {
        console.log(false);
        }
    if (password.trim()) {
        console.log(true);
        } else {
        console.log(false);
        }
    if (password.includes(username)) {
        console.log(true);
        } else {
        console.log(false);
        }
    }
}