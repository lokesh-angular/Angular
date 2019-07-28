function Maximum(maxNumberArr:number[]):number 
{  
    var temp:number = 0;
    for (var i = 0; i < maxNumberArr.length; i++) {
        for (var j = i + 1; j < maxNumberArr.length; j++) {
            if (maxNumberArr[i] > maxNumberArr[j]) {
                temp = maxNumberArr[i];  
                maxNumberArr[i] = maxNumberArr[j];
                maxNumberArr[j] = temp;
            }
        }
    }

    return maxNumberArr[maxNumberArr.length - 2];
} 

var maxNumberArr:number[] = [23, 89, 6, 29, 56, 45, 77, 32];
console.log("Input: " + maxNumberArr.join(" "));

var maxNumber:number;
maxNumber = Maximum(maxNumberArr);
console.log("Output: Second maximum number is " + maxNumber);