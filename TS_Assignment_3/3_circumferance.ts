class Circle 
{ 
    Radius:number;
  
    constructor(Radius:number) 
    { 
       this.Radius = Radius;
    }  
 
    Area():void 
    { 
        var PI = 3.14;
        var Result:number = this.Radius * this.Radius * PI;
        console.log("Area of circle for radious " + this.Radius + " is : "+ Result);
    }
 }

 class CircleX extends Circle {
    Circumference():void
    {
        var PI = 3.14;
        var Result:number = 2 * PI * this.Radius;
        console.log("Circumference of circle for radious " + this.Radius + " is : "+ Result);
    }
 }

 // Create object of above class
 var obj = new CircleX(5);
 obj.Area();
 obj.Circumference();

console.log("******************************************");  

 var obj1 = new CircleX(10);
 obj1.Area();
 obj1.Circumference();