function Summation(sumArr) {
    var sum = 0;
    for (var i = 0; i < sumArr.length; i++) {
        sum += sumArr[i];
    }
    return sum;
}
var sumArr = [23, 6, 7, 4, 5, 7];
console.log("Input: " + sumArr.join(" "));
var summation;
summation = Summation(sumArr);
console.log("Output: Addition is " + summation);
