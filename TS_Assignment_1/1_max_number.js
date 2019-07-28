function Maximum(no1, no2, no3) {
    var maxNo = no1;
    if (no2 > maxNo) {
        maxNo = no2;
    }
    if (no3 > maxNo) {
        maxNo = no3;
    }
    return maxNo;
}
console.log("Input: 23 89 6");
var maxNumber;
maxNumber = Maximum(23, 89, 6);
console.log("Output: Maximum number is " + maxNumber);
