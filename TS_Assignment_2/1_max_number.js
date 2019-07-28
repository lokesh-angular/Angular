function Maximum(maxNumberArr) {
    var maxNo = 0;
    for (var i = 0; i < maxNumberArr.length; i++) {
        if (maxNumberArr[i] > maxNo) {
            maxNo = maxNumberArr[i];
        }
    }
    return maxNo;
}
var maxNumberArr = [23, 89, 6, 29, 56, 45, 77, 32];
console.log("Input: " + maxNumberArr.join(" "));
var maxNumber;
maxNumber = Maximum(maxNumberArr);
console.log("Output: Maximum number is " + maxNumber);
