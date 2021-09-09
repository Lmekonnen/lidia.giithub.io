// function alert1(){
//     alert("Hello, world!");
// } 
function alert1(){
document.getElementById("text").style.fontSize = "24pt";
}
// function alert2(){
//     alert("hi");
// }
function alert2(){
    
    // $("check").attr("checkbox");
    document.getElementById("text").style.fontWeight = "bold";
    document.getElementById("text").style.color = "green";
    document.getElementById("text").style.textDecoration = "underline";
}


//1.	What is the difference between the following 2 statements? 
setTimeout(booyah, 2000);  
//calls the function every 2 seconds.
setTimeout(booyah(), 2000);  
//calls the function boyah immediately gives error the second time it is called.
//2. What do the following 2 alerts display (answer without running the code)? 
var myfunc = function (a, x) { 
    return a * x;
     }; 
    var x = myfunc(2, 3);//6
 
    var y = myfunc; //error

    alert(x); //6
 
    alert(y(2,3)); //6
//3. Write functions booyah1 and booyah2 so that in both cases below, an alert box comes up after 2 seconds that says “BOOYAH!” 
function booyah1(){
    alert("BOOYAH!");  
}

function booyah2(){
    alert("BOOYAH!");
}
setTimeout(booyah1, 2000);
// setTimeout(booyah2(), 2000);
//4. What is "Unobtrusive Javascript"? What is the practical application of Unobtrusive Javascript (and the reasons for using it)?
//   Unobtrusive Javascript is 



//1. Determine what this Javascript code will print out (without running it):
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
                            var x = 10;
                            document.write(x);
                            document.write(a);
                            var f = function(a, b, c) {
                                                        b = a;
                                                        document.write(b);
                                                        b = c;
                                                        var x = 5;
                                                      }
                                    f(a,b,c);
                                    document.write(b);
                        }
c(8,9,10);
document.write(b);
document.write(x);
//    * 
// 2. What is the difference between a method and function?
//    * 
// 3. What does 'this' refer to when used in a Java method?
//    * 
// 4. What does 'this' refer to when used in a JavaScript method?
//    * 
// 5. What does 'this' refer to when used in a JavaScript constructor function?
//    * 
// 6. Assume object x is the prototype for object y in Javascript. Object x has a method f( ) containing keyword 'this'.
// When f is called by x.f( ), what does 'this' refer to?
//    * 
// 7. What is a free variable in JavaScript?
//    * 
// 8. Create an object that has properties with name = "fred" and major="music" and a property that is a function
// that takes 2 numbers and returns the smallest of the two, or the square of the two if they are equal.
//    * 
// 9. Write Javascript code for creating three Employee objects using the "new" keyword and a constructor function.
// Employee objects have the following fields: name, salary, position.
//    * 
// 10. Write a Javascript function that takes any number of input arguments and returns the product of the
// arguments.
//    * 
// 11. Write an arrow function that returns the maximum of its three input arguments
//    * 
    
