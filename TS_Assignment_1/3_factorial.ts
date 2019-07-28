function DisplayFactors(no:number)
{  
    var factors:number[] = [];
    for (var i = 0; i < no; i++) {
        if (no%i == 0) {
            factors.push(i);
        }        
    }

    return factors; 
} 

var no:number = 20;
console.log("Input: " + no);

var factorsOfNumber:number[];
factorsOfNumber = DisplayFactors(no);
console.log("Output: " + factorsOfNumber.join(" "));