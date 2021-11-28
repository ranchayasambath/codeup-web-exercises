//Make a function name isOdd(number):
function isOdd(number){
    return(number%2 !==0);
}
console.log(isOdd(3));
//Make a function named isEven(number):
function isEven(number){
    return(number%2 ===0);
}
console.log(isEven(4));
//Make a function named identity(input):
function identity(char){
    return(char===char);
}
console.log(identity("River Shen"));
//Make a function named isFive(input):
function isFive(input){
    return(input==5);
}
console.log(isFive(5));
//Make a function named addFive(input):
function addFive(input){
    return(input+5);
}
console.log(addFive(1));
//Make a function named isMultipleOfFive(input):
function isMultipleOfFive(input){
    return(input%5 ===0);
}
console.log(isMultipleOfFive(500));
//Make a function named isThree(input):
function isThree(input){
    return(input === 3);
}
console.log(isThree(3));
//Make a function named isMultipleOffThree(input):
function isMultipleOfThree(input){
    return(input%3 ===0);
}
console.log(isMultipleOfThree(6));
//Make a function named isMultipleOfThreeAndFive(input):
function isMultipleOfThreeAndFive(input){
    if(input%3 ===0 && input%5 ===0){
        return true;
    }else{
        return false;
    }
}
console.log(isMultipleOfThreeAndFive(15));
//Make a function named isMultipleOf(target,n):
function isMultipleOf(target,n){
    if(target%n ===0) {
        return true;
    }else{
    return false;}
}
console.log(isMultipleOf(8,2));
//Make a function named isTrue(boolean):
function isTrue(boolean){
    if (boolean==true){
        return boolean;
    }else{
}return false;
}
console.log(isTrue(true));
//Make a function named isFalse(boolean):
function isFalse(boolean){
    if(boolean==false){
        return true;
    }else{
        return false;
    }
}
console.log(isFalse(false));
//Make a function named isTruthy(input):
function isTruthy(input){
    if (input){
        return true;
    }else{
        return false;
    }
}
console.log(isTruthy(true));
//Make a function named isFalsy(input):
function isFalsy(input){
    if (!input){
        return true;
    }else{
        return false;
    }
}
console.log(isFalsy(false));
//Make a function named isVowel(letter):
function isVowel(letter){
    return("aieouAEIOU".indexOf(letter)!==-1);
}
console.log(isVowel("A"));
//Make a function named isConsonant(letter):
function isConsonant(letter){
    let cons="aieouAEIOU".indexOf(letter)==-1;
    return(cons && isNaN(letter));
}
console.log(isConsonant("b"));
//Make a function named isCapital(letter):
function isCapital(letter){
        return (letter.indexOf(letter.toUpperCase())!==-1);
}
console.log(isCapital("A"));
//Make a function named isLowerCase(letter):
function isLowercase(letter){
    return(letter.indexOf(letter.toLowerCase())!==-1);
}
console.log(isLowercase("g"));
//Make a function named hasLowerCase(string):
function hasLowerCase(string) {
    return(string.toLowerCase()== string.indexOf(string)!==-1);
}
console.log(hasLowerCase("HELLO"));
//STUCK!!!!!!!!!!!!!!!!!!!!!
//Make a function named isSpace(letter):
function isSpace(letter){
    if(letter==" "){
        return true;
    }else{
        return "Not a space character";
    }
}
console.log(isSpace("lol"));
//Make a function named isZero(letter):
function isZero(number){
    if(number===0){
        return true;
    }else{
        return "not a Zero";
    }
}
console.log(isZero(7));
//Make a function name notZero(letter):
function notZero(letter){
    if(!letter==0){
        return true;
    }else{
        return "Number is Zero"
    }
}
console.log(notZero(1));
//Make a function named lowerCase(string):
function lowerCase(string){
   let nString=string
    return(nString.toLowerCase());
}
console.log(lowerCase("HELLO"));
//Make a function named double(n):
function double(n){
    return(n*2);
}
console.log(double(4));
//Make a function named triple(n):
function triple(n){
    return(n*3);
}
console.log(triple(30));
//Make a function named quadruple(n):
function quadruple(n){
    return(n*4);
}
console.log(quadruple(60));
//Make a function named half(n):
function half(n){
    return(n/2);
}
console.log(half(100));
//Make a function named subtract(a,b):
function subtract(a,b){
    return(a-b);
}
console.log(subtract(200,50));
//Make a function named multiply(a,b):
function multiply(a,b){
    return(a*b);
}
console.log(multiply(100,50));
//Make a function named divide(a,b):
function divide(a,b){
    return(a/b);
}
console.log(divide(60,30));
//Make a function named remainder(a,b):
function remainder(a,b){
    return(a%b);
}
console.log(remainder(200,50));
//Make a function named modulo(a,b):
function modulo(a,b){
    return(a%b);
}
console.log(modulo(600,50));
//Make a function named cube(a,b):
function cube(n){
    return(n*n*n);
}
console.log(cube(20));
//Make a function named squareRoot(n):
function squareRoot(n){
    return(Math.sqrt(n));
}
console.log(squareRoot(100));
//Make a function named cubeRoo(n):
function cubeRoot(n){
    return(Math.cbrt(n));
}
console.log(cubeRoot(100));
//