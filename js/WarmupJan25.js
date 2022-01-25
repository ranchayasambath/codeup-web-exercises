// Tuesday Morning Warmup
// Write a function that returns an object displaying any number/letter that appears
// consecutively in a string of numbers.
// The object should display how many times that letter/number appears consecutively

var findDuplicates = function (s,k){
    for(let i=1, counter = 1; i <s.length; i++){
        if (s.charAt(i) === s.charAt(i-1)){
            counter++;
        }else{
            counter =1
        }if (counter === k){
            return(s);
        }
    }
}
console.log(findDuplicates("123456665"))
