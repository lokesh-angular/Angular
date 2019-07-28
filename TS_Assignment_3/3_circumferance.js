var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle = /** @class */ (function () {
    function Circle(Radius) {
        this.Radius = Radius;
    }
    Circle.prototype.Area = function () {
        var PI = 3.14;
        var Result = this.Radius * this.Radius * PI;
        console.log("Area of circle for radious " + this.Radius + " is : " + Result);
    };
    return Circle;
}());
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircleX.prototype.Circumference = function () {
        var PI = 3.14;
        var Result = 2 * PI * this.Radius;
        console.log("Circumference of circle for radious " + this.Radius + " is : " + Result);
    };
    return CircleX;
}(Circle));
// Create object of above class
var obj = new CircleX(5);
obj.Area();
obj.Circumference();
console.log("******************************************");
var obj1 = new CircleX(10);
obj1.Area();
obj1.Circumference();
