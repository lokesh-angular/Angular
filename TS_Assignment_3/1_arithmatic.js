var Arithmetic = /** @class */ (function () {
    function Arithmetic(Number1, Number2) {
        this.Number1 = Number1;
        this.Number2 = Number2;
    }
    Arithmetic.prototype.Addition = function () {
        var Result = this.Number1 + this.Number2;
        console.log("Addition of " + this.Number1 + " and " + this.Number2 + " is : " + Result);
    };
    Arithmetic.prototype.Subtraction = function () {
        var Result = this.Number1 - this.Number2;
        console.log("Subtraction of " + this.Number1 + " and " + this.Number2 + " is : " + Result);
    };
    Arithmetic.prototype.Multiplication = function () {
        var Result = this.Number1 * this.Number2;
        console.log("Multiplication of " + this.Number1 + " and " + this.Number2 + " is : " + Result);
    };
    Arithmetic.prototype.Division = function () {
        var Result = this.Number1 / this.Number2;
        console.log("Division of " + this.Number1 + " and " + this.Number2 + " is : " + Result);
    };
    return Arithmetic;
}());
// Create object of above class
var obj = new Arithmetic(20, 10);
obj.Addition();
obj.Subtraction();
obj.Multiplication();
obj.Division();
var obj1 = new Arithmetic(40, 20);
obj1.Addition();
obj1.Subtraction();
obj1.Multiplication();
obj1.Division();
