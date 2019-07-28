function ChkArmstrong(no) {
    var isArmstrong;
    var temp;
    var rem;
    var sum = 0;
    temp = no;
    while (temp != 0) {
        rem = temp % 10;
        sum = sum + (rem * rem * rem);
        temp = temp / 10;
    }
    if (sum == no) {
        isArmstrong = true;
    }
    else {
        isArmstrong = false;
    }
    return isArmstrong;
}
var no = 153;
console.log("Input: " + no);
var armstrong;
armstrong = ChkArmstrong(no);
if (armstrong) {
    console.log("Output: It is an Armstrong number");
}
else {
    console.log("Output: It is not an Armstrong number");
}
console.log("**************************************");
var no = 120;
console.log("Input: " + no);
var armstrong;
armstrong = ChkArmstrong(no);
if (armstrong) {
    console.log("Output: It is an Armstrong number");
}
else {
    console.log("Output: It is not an Armstrong number");
}
