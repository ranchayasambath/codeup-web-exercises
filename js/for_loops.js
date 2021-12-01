//Not working?!
function showMultiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        result = (i * num);
    }
    console.log(showMultiplicationTable(9));
}
    for (let i = 1; i <= 10; i++) {
        var num1 = Math.floor(Math.random() * (200 - 20) + 20);
        if (num1 % 2 == 0) {
            console.log(num1 + " is even");
        } else console.log(num1 + " is odd");
    }
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= i; j++) {
            console.log(i);
        }
    }
    for (i = 100; i >= 5; i -= 5) {
        console.log(i);
    }
