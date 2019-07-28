function Fibonacci(no:number)
{  
    var no1:number = 0;
    var no2:number = 1;
    var no3:number;
    var fibonacci:number[] = [];
    for (var i = 1; i < no; i++) {
        if (i <= 1) {
            no3 = i;
        } else {
            no3 = no1 + no2;    
            no1 = no2;
            no2 = no3;    
        }
        fibonacci.push(no3);
    }

    return fibonacci;
} 

var no:number = 21;
console.log("Input: " + no);

var fibonacciSerise:number[];
fibonacciSerise = Fibonacci(no);
console.log("Output: " + fibonacciSerise.join(" "));