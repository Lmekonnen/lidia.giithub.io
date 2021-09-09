//1. Determine what this Javascript code will print out (without running it):
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {     //(8,9,10)
    var x = 10;
    document.write(x); 				//i (x=10)
    document.write(a); 				//ii (a=8)

    var f = function (a, b, c) {  			//(8,9,10)
        b = a;		                      	        //b=8
        document.write(b); 	                       //iii (b=8)
        b = c; 		                            	// b=10
        var x = 5;
    }

    f(a, b, c); 					//f(8,9,10)
    document.write(b); 				//iv (b=9)
}
c(8, 9, 10);
document.write(b);				//v (b=10)
document.write(x);				//vi (x=1)


//Ans: 	
// c(8, 9, 10); -> 10  //i 
//                 8  //ii
//                 8  //iii
//                 9  //iv            
// document.write(b); -> 10
// document.write(x); -> 1

// 2. What is the difference between a method and function?
    //    * Functions and methods are the same in JavaScript, but a method is a function, 
    //      which is a property of an object. A function can be called directly by its name but 
    //      methods are called by its object name and its method name using dot notation or square bracket notation.

// 3. What does 'this' refer to when used in a Java method?
    //    * ‘this’ refers to the current object in a method or in a constructor.
// 4. What does 'this' refer to when used in a JavaScript method?
    //    * It has different values depending on where it is used:
    //      IN METHOD: It refers to owner object
    //      ALONE: It refers to global object
    //      IN A FUCNTION: It refers to global object
    //      IN AN EVENT: It refers to the element that recieved the event.

// 5. What does 'this' refer to when used in a JavaScript constructor function?
    //    * ‘this’ keyword refers to the instance of the constructor

// 6. Assume object x is the prototype for object y in Javascript. Object x has a method f( ) containing keyword 'this'. When f is called by x.f( ), what does 'this' refer to?
    //    * This - refers to x

// 7. What is a free variable in JavaScript?
    //    * Free variable referred to a function that neither it's parameters nor local variable.
    //      There are lexical scope where a closure is created and free variable is used in JavaScript.

// 8. Create an object that has properties with name = "fred" and major="music" and a property that is a function that takes 2 numbers and returns the smallest of the two, or the square of the two if they are equal.
let obj = {
    name: "fred",
    major: "music",
    smallestOfTwo: function (a, b) {
        if (a > b) {
            return b;
        }
        else if (a == b) {
            return a * a;
        }
        else {
            return a;
        }
    }
};
// 9. Write Javascript code for creating three Employee objects using the "new" keyword and a constructor function.
// Employee objects have the following fields: name, salary, position.
function Employee(name, salary, position) {
    this.name = name;
    this.salary = salary;
    this.position = position;
}
var emp1 = new Employee("Jhon", 9000, "Manager");
var emp2 = new Employee("Ronaldo", 8000, "Supervisor");
var emp3 = new Employee("Muller", 5000, "Software Engineer");
// 10. Write a Javascript function that takes any number of input arguments and returns the product of the arguments.
function productOfArguments() {
    let i;
    let productResult = 1;
    for (i = 0; i < arguments.length; ++i) {
        productResult *= arguments[i];
    }
    return productResult;
};

// 11. Write an arrow function that returns the maximum of its three input arguments
var maxOfThree = (a, b, c) => {
    let max = Math.max(a, b);
    return Math.max(c, max);
};


