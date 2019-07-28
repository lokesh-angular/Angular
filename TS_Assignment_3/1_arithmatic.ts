class Arithmetic 
{ 
    Number1:number;
    Number2:number;
  
    constructor(Number1:number, Number2:number) 
    { 
       this.Number1 = Number1;
       this.Number2 = Number2;        
    }  
 
    Addition():void 
    { 
        var Result:number = this.Number1 + this.Number2;
        console.log("Addition of " + this.Number1 + " and " + this.Number2 + " is : "+ Result);
    } 

    Subtraction():void 
    { 
        var Result:number = this.Number1 - this.Number2;
        console.log("Subtraction of " + this.Number1 + " and " + this.Number2 + " is : "+ Result);
    } 

    Multiplication():void 
    { 
        var Result:number = this.Number1 * this.Number2;
        console.log("Multiplication of " + this.Number1 + " and " + this.Number2 + " is : "+ Result);
    } 

    Division():void 
    { 
        var Result:number = this.Number1 / this.Number2;
        console.log("Division of " + this.Number1 + " and " + this.Number2 + " is : "+ Result);
    } 
 }

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