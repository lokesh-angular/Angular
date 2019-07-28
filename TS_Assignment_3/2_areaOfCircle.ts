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
        console.log("Area of circle for radious" + this.Radius + " is : "+ Result);
    }
 }

 // Create object of above class
 var obj = new Circle(5);
 obj.Area();

 var obj1 = new Circle(10);
 obj1.Area();