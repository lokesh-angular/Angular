function Area(radious, PI) {
    var area;
    if (PI == undefined) {
        PI = 3.14;
    }
    area = radious * radious * PI;
    return area;
}
var areaOfCircle;
console.log("Input: " + 5);
console.log("Taking default value of PI");
areaOfCircle = Area(5);
console.log("Area of circle is " + areaOfCircle);
console.log("************************************");
console.log("Input: " + 5);
console.log("Taking value of PI as 6.28 in 2nd parameter");
areaOfCircle = Area(5, 6.28);
console.log("Area of circle is " + areaOfCircle);
