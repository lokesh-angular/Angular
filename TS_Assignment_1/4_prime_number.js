function ChkPrime(no) {
    var isPrime = true;
    for (var i = 2; i <= no / 2; i++) {
        if (no % i == 0) {
            isPrime = false;
            return false;
        }
    }
    return isPrime;
}
var no = 11;
console.log("Input: " + no);
var primeNumber;
primeNumber = ChkPrime(no);
if (primeNumber) {
    console.log("Output: It is prime number");
}
else {
    console.log("Output: It is not prime number");
}
console.log("**************************************");
var no = 12;
console.log("Input: " + no);
var primeNumber;
primeNumber = ChkPrime(no);
if (primeNumber) {
    console.log("Output: It is prime number");
}
else {
    console.log("Output: It is not prime number");
}
