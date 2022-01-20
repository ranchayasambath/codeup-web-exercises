var str="bJIENsdfRAIRVIrsRFAijgRar";
var i=0;
var char="";
while (i <= str.length){
    char = str.charAt(i);
    if (char == char.toLowerCase()){
        console.log(char + " is lower case.");
    }else{
        console.log(char + " is upper case.")
    }i++;
}
