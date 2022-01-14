var array = ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"];
result = array.filter(function(word){
    return (word.length > 3 && word.length <5)
    });
console.log(result);
