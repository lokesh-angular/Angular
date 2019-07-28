function Summation(sumArr:number[]):number 
{  
    var sum:number = 0;
    for (var i = 0; i < sumArr.length; i++) {
        sum += sumArr[i];
    }

    return sum; 
} 

var sumArr:number[] = [23, 6, 7, 4, 5, 7];
console.log("Input: " + sumArr.join(" "));

var summation:number;
summation = Summation(sumArr);
console.log("Output: Addition is " + summation);