function reverseString(str){
    return(str.split("").reverse().join(""));
}
console.log(reverseString("HELLO WORLD"));

function grades(num) {
    if (num >= 90) {
        return ("A");
    } else if (num >= 80 && num <= 90) {
        return ("B");
    } else if (num >= 70 && num <=80) {
        return ("C");
    } else if (num>=60 && num <=70) {
        return ("D");
    }else{
        return("F");
    }
}
console.log(grades(0));
// it runs perfectly without && statements. (Theory of why is >= (or equal to)  acts as a ceiling that prevents it
//from being read as the code passes down.)


let num= 90;
var ask= prompt("Whats did you get on the test?");
ask === num ? alert("Congratulations you got an A!"): alert("Sorry you didnt get an A.")