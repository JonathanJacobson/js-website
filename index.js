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
    document.getElementById("myAgeLabel").innerHTML = "Happy Birthday, you are " + age + " years old!";

    let x = Math.PI;
    let y = Math.sqrt(16);
    
}
