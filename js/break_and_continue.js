//Prompt the user for an odd number between 1 and 50.
// Use a loop and a break statement to continue prompting the user if they enter invalid input.
let i;
let ask= prompt("Enter an Odd number 1 - 50");
for (i = 1; i<=50; i++){
    if(ask = (i%2 ==0)){
        break;}
        ask=prompt("Re enter your number");
}

