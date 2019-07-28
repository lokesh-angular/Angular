function ChkString(str) {
    var isSubString;
    isSubString = str.indexOf("Marvellous");
    console.log(isSubString);
    return isSubString;
}
var str = "Pune Kothrud Marvellous Infosystems";
console.log("Input: " + str);
var substr;
substr = ChkString(str);
if (substr != -1) {
    console.log("String contains Marvellous in it.");
}
else {
    console.log("String does not contains Marvellous in it.");
}
console.log("**************************************");
var str = "Pune Kothrud Infosystems";
console.log("Input: " + str);
var substr;
substr = ChkString(str);
if (substr != -1) {
    console.log("String contains Marvellous in it.");
}
else {
    console.log("String does not contains Marvellous in it.");
}
