function ChkPrime(no:number):boolean
{
    var isPrime:boolean = true;
    for (var i = 2; i <= no / 2 ; i++) {
        if (no % i == 0) {
            isPrime = false;
            return false;
        }
    }

    return isPrime;
} 

var no:number = 11;
console.log("Input: " + no);

var primeNumber:boolean;
primeNumber = ChkPrime(no);
if (primeNumber) {
    console.log("Output: It is prime number");
} else {
    console.log("Output: It is not prime number");
}

console.log("**************************************");

var no:number = 12;
console.log("Input: " + no);

var primeNumber:boolean;
primeNumber = ChkPrime(no);
if (primeNumber) {
    console.log("Output: It is prime number");
} else {
    console.log("Output: It is not prime number");
}