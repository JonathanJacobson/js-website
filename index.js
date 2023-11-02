//console.log("I love golf");

/*
var age;
var x, y;
let yourName = "Jono";

yourName = window.prompt("What is your name?");

x = window.prompt("Give me ONE number?");
y = window.prompt("Give me ANOTHER number?");
age = parseInt(x) * parseInt(y);
window.alert(yourName + " age is: " + age);

document.getElementById("p1").innerHTML = "Hello, " + yourName;
document.getElementById("p2").innerHTML = "You are, " + age;
document.getElementById("p3").innerHTML = "Hello, " + x;
*/
let username;

var age;

let x, y;

document.getElementById("myButton").onclick = function() {
    username = document.getElementById("myText").value;
    document.getElementById("myLabel").innerHTML = "Hello " + username;
    age = document.getElementById("myAge").value;
    console.log(typeof age);
    age = Number(age);
    console.log(typeof age);
    age += 1;
    //document.getElementById("myAgeLabel").innerHTML = "Happy Birthday, you are " + age + " years old!";

    let x = -3.14;

    let xa = -3.14;
    let xb = -5;
    let xc = 9;
    let xd = 200;
    let maximum;
    let minimum;

    x = Math.abs(x);
    //x = Math.round(x);
    //x = Math.floor(x);
    //x = Math.ceil(x)
    //x = Math.pow(x, 2);
    //x = Math.sqrt(x);
    x = Math.PI;

    let y = Math.sqrt(16);
    bb = myFunction(3, 2)
    age = bb;
    maximum = Math.max(xa, xb, xc, xd);
    minimum = Math.min(xa, xb, xc, xd);
    //document.getElementById("myAgeLabel").innerHTML = "Happy Birthday, you are " + age + " years old!";
    //document.getElementById("myAgeLabel").innerHTML = "The answer is " + x + " !";
    //document.getElementById("myAgeLabel").innerHTML = "The maximum answer is " + maximum + " !";
    //document.getElementById("myAgeLabel").innerHTML = "The minimum answer is " + minimum + " !";
    document.getElementById("myAgeLabel").innerHTML = "PI is " + x + " !";
}

document.getElementById("solveHypotenuseButton").onclick = function() {
    side1 = document.getElementById("side1").value;
    side2 = document.getElementById("side2").value;
    side3 = solveHypotenuse (side1, side2);

    document.getElementById("sideC").innerHTML = "Answer Side C " + side3;
}

function myFunction (a, b)
{
    x = a * b;
    return x;
}

function solveHypotenuse (a, b)
{
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    return c;
}
