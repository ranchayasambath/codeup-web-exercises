function palindrome(str){
    let reversed = '';
    for(let char of str){
        reversed = char + reversed;
    }
    return reversed === str;
}

let output = palindrome('hello there');
console.log(output);