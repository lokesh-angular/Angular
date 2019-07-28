function DisplayFactors(no) {
    var factors = [];
    for (var i = 0; i < no; i++) {
        if (no % i == 0) {
            factors.push(i);
        }
    }
    return factors;
}
var no = 20;
console.log("Input: " + no);
var factorsOfNumber;
factorsOfNumber = DisplayFactors(no);
console.log("Output: " + factorsOfNumber.join(" "));
