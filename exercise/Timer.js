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

alert(y(2, 3)); //6
//3. Write functions booyah1 and booyah2 so that in both cases below, an alert box comes up after 2 seconds that says “BOOYAH!” 
function booyah1() {
    alert("BOOYAH!");
}

function booyah2() {
    alert("BOOYAH!");
}
setTimeout(booyah1, 2000);
// setTimeout(booyah2(), 2000);
//4. What is "Unobtrusive Javascript"? What is the practical application of Unobtrusive Javascript (and the reasons for using it)?
//   Unobtrusive Javascript is 



