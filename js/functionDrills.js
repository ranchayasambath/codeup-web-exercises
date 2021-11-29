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
//Make invert Sign Function
function invertSign(number) {
    if (number > 0) {
        return (number * -1);
    } else if (number < 0) {
        return (number * -1);
        }else{
        return false;
    }
    }
console.log(invertSign("no"));
//Make degreesToRadians(number):
function degreesToRadians(number){
    return(number* Math.PI/180);
}
console.log(degreesToRadians(180));
//Make radiansToDegree(number):
function radiansToDegree(number){
    return(number*180/Math.PI);
}
console.log(radiansToDegree(3.141592653589793));
//Make a function isBlank(input):
function isBlank(input) {
    if (input.includes(" ")) {
        return "Has Space.";
    } else if (input.includes("\n")) {
        return "Has New line.";
    } else if (input.includes("\t")) {
        return "Has Tab.";
    }
}
console.log(isBlank("hello\tworld"));
//Make a function trim(string):
function trim(string){
   let tString=string.trim();
   return(tString);
   //return(string);
}
console.log(trim(" hello world"));
//Make function that returns if both value the same:
function areEqual(input1,input2){
    if (input1==input2)
    {
        return true;
    }else{
        return false;
    }
}
console.log(areEqual(1,"1"));
//Make function that returns if both value and data are the same:
function areIdenticle(input1,input2){
    if(input1===input2){
        return true;
    }else{
        return false;
    }
}
console.log(areIdenticle(1,"1"));
//Make a function with flipped boolean:
function not(input){
    return(!input);
}
console.log(not(false));
//Make a function that negate the negation:
function noNot(input){
    return(!!input);
}
console.log(noNot(true));
//Make a function that returns the logical operation of AND:
function and(predicate1,predicate2){
    return(predicate1 && predicate2);
}
console.log(and(true,false));
//Make a function that returns the logical operation of OR:
function or(predicate1,predicate2){
    return(predicate1 || predicate2);
}
console.log(or(true,false));
//Make a function that reverses a string:
function reverseString(string){
  return(string.split("").reverse().join(""));
}
console.log(reverseString("apple pie"));
//Make Absolute Value function:
function absoluteValue(number){
    return(Math.abs(number));
}
console.log(absoluteValue(-6));
//Make roll dice function:
function rollDice(sides){
    return(Math.floor(Math.random()*(sides)+1));
}
console.log(rollDice(6));

//SIMPLE FUNCTION DRILLS

//1.Make a function called returnTwo() that returns the number 2 when called
//Test this function with console.log(returnTwo()):
function returnTwo(){
    return(2);
}
console.log(returnTwo());
//2.Make a function called sayHowdy() which console.logs the string “Howdy!”
// Test this function by directly calling sayHowdy()
function sayHowdy(){
    return("Howdy!");
}
console.log(sayHowdy());
//3.Make a function called returnName() that returns the string of your name
// Test this function with console.log(returnName())
function returnName(){
    return("Jack");
}
console.log(returnName());
//4.Make a function called addThree() which takes in a number input and returns the number plus 3.
// Test this function with console.log(addThree(5))
function addThree(i){
    return(i+3);
}
console.log(addThree(2));
//5.Make a function called sayString() which returns the string input passed in.
// Test this function with console.log(sayString('codeup'))
function sayString(str){
    return("Hello, "+str);
}
console.log(sayString("codeup"));
//Write a function called identity(input) that takes in an argument called input and returns that input.
function identity(input){
    return("force is meaningless "+ input);
}
console.log(identity("without skill."));
//Write a function called getRandomNumber(min, max)
// that returns a random number between min and max values sent to that function call.
function getRandomNumber(min,max){
 return(Math.floor(Math.random()*(max-min+1)+min));
}
console.log(getRandomNumber(10,20));
//Write a function called first(input) that returns the first character in the provided string.
function first(input){
   /// return(input[0]);
    return(input.slice(0,1));
}
console.log(first("Jesus"));
//Write a function called last(input) that returns the last character of a string
function last(input){
    return(input.slice(-1));
}
console.log(last("Jesus"));
//Write a function called rest(input) that returns everything but the first character of a string.
function rest(input){
    return(input.slice(1,-1));
}
console.log(rest("Jesus"));
//Write a function called reverse(input) that takes a string and returns it reversed.
function reverse(input){
    return(input.split("").reverse().join(""));
}
console.log(reverse("Jesus"));
//Write a function called isNumeric(input) that takes an input and returns a boolean if the input is numeric.
function isNumberic(input){
    if (isNaN(input)){
        return false;
    }else{
        return true;
    }
}
console.log(isNumberic("hello"));
console.log(isNumberic(1));
//Write a function called count(input) that takes in a string and returns the number of characters.
function count(input){
    return(input.length);
}
console.log(count("Jesus"));
//Write a function called add(a, b) that returns the sum of a and b
function add(a,b){
    return(a+b);
}
console.log(add(5,11));
//Write a function called subtract(a, b) that return the difference between the two inputs.
function subract(a,b){
    return(a-b);
}
console.log(subract(100,50));
//Write multiply(a, b) function that returns the product
function multiply(a,b){
    return(a*b);
}
console.log(multiply(10,20));
//Write a divide(numerator, denominator) function that returns a divided by b
function divide(a,b){
    return(a/b);
}
console.log(divide(100,10));
//Write a remainder(number, divisor) function that returns the remainder left over when dividing number by the divisor
function remainder(a,b){
    return(a%b);
}
console.log(remainder(10,3));
//Write the function square(a) that takes in a number and returns the number multiplied by itself.
function square(a){
    return(a*a);
}
console.log(square(10));
//Write a function called sumOfSquares(a, b)
// that uses only your add() function and your square function and not + or * operators
function sumOfSquare(a,b){
    return square(add(a,b));
}
console.log(sumOfSquare(10,10));
//Write a function called doMath(operator, a, b) that takes 3 parameters. The
//first parameter is the name of the math function you want to apply. a and b
// are the two numbers to run that function on.
function doMath(operator,a ,b){
    return eval(a+operator+b);
    //The "eval" function was useful.
}
console.log(doMath("*",5,4));

//Even More Function Bonuses
//1.Create a function that will return how many whitespace characters are at the beginning and end of a string.
function wSpace(str){
    return(str.length - str.trim().length);
}
console.log(wSpace("  Hello "));
//2.Create a function that takes in two string inputs.
//If the second string input is present in the first,
// return the first input string with the second input string removed from it.
//If the second string input is present multiple times in the first,
// the second string will only be removed where it first occurs in the first string.
//If the second string input is not present in the first,
//return the first string as entered in the function.
function twoStrings(str1,str2){
    if(str2==str2.includes(str1)){
        return(str1-str2);
    }
    console.log(twoStrings("this is", " this is a test"));
}