
//1.Write a function that accepts the top three bowling scores and returns the average.

function averageScore(s1,s2,s3){
    return((s1+s2+s3)/3);
}
console.log((averageScore(250,280,300)));
//2.Write a function that accepts the best score and returns true
// if its divisible by 3 or 5 and false if it’s not

function bestScore(x){
    if(x%3 ==0 || x%5 ==0){
        return true;
    }else{
        return false;
    }
}
console.log(bestScore(15));
//3.Write a function that accepts the name of the bowling place (“ThEbEsTbOwLiNgPlAcEever”)
// and returns it in all lower case BONUS: return it with a space between each word
//BONUS: write a function that returns “TheBestBowlingPlaceEver” and return it all lowercase with a space between each word

function makeLower(x){
    let name="ThEbEsTbOwLiNgPlAcEever";
    return(name.split("").join(" ")).toLowerCase();
}
console.log(makeLower());

//4.Given these variables: let score = 109; let name = “bowling Is Fun”;
// let isBowlingFun = true; let players = [“tom”, “jerry”, “Garfield”];
// Write a function that returns the type of each of the variables (call the function once per variable);

var score = 109;
var name = "bowling Is Fun";
var isBowlingFun = true;
var players = ["tom", "jerry", "Garfield"];

function typeOfVariables(x) {
    if(x==score){
        return(typeof score);
    }else if(x==name){
        return (typeof name);
    }else if(x==isBowlingFun) {
        return (typeof isBowlingFun);
    }else if(x==players){
        return (typeof players);
    }
}
console.log(typeOfVariables(name));
console.log(typeOfVariables(score));
console.log(typeOfVariables(isBowlingFun));
console.log(typeOfVariables(players));

//5.Write a function that executes all of the above functions
function allFunctionExecute() {
    console.log(averageScore(250, 260, 300));
    console.log(bestScore(15));
    console.log(typeOfVariables(name));
    console.log(typeOfVariables(score));
    console.log(typeOfVariables(isBowlingFun));
    console.log(typeOfVariables(players));
}
allFunctionExecute();

//6.Copy and execute the following functions, and find the Error: (Hint: try console logging the result)
//let myFunction (firstName, lastName)
// return firstName + lastName; };
//function thatsNotMyName(name){
// if(name = "Laura"){
// return "that's me!, I'm " + "name"}
// } else {
// return "that's not my name"
// }

function myFunction(firstName,lastName)
//replaced "let" with "function"
{
    return(firstName + lastName);
//deleted the extra semi colon after lastName.
}
console.log(myFunction("ranchaya"," sambath"));

function thatsNotMyName(name) {
    if (name = "Laura") {
//Deleted the quotations for name. Moving the extra curly bracket to the end of the function.
        return "that's me!, I'm " + name;
    } else {
        return "that's not my name"
    }
}
console.log(thatsNotMyName("Laura"));
