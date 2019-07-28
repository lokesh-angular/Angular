var Circle = /** @class */ (function () {
    function Circle(Radius) {
        this.Radius = Radius;
    }
    Circle.prototype.Area = function () {
        var PI = 3.14;
        var Result = this.Radius * this.Radius * PI;
        console.log("Area of circle for radious" + this.Radius + " is : " + Result);
    };
    return Circle;
}());
// Create object of above class
var obj = new Circle(5);
obj.Area();
var obj1 = new Circle(10);
obj1.Area();
