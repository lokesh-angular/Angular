function Fibonacci(no) {
    var no1 = 0;
    var no2 = 1;
    var no3;
    var fibonacci = [];
    for (var i = 1; i < no; i++) {
        if (i <= 1) {
            no3 = i;
        }
        else {
            no3 = no1 + no2;
            no1 = no2;
            no2 = no3;
        }
        fibonacci.push(no3);
    }
    return fibonacci;
}
var no = 21;
console.log("Input: " + no);
var fibonacciSerise;
fibonacciSerise = Fibonacci(no);
console.log("Output: " + fibonacciSerise.join(" "));
