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
    //Jonathan 04/12/2023
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
    side1 = Number(side1);
    side2 = document.getElementById("side2").value;
    side2 = Number(side2);
    side3 = solveHypotenuse (side1, side2);

    document.getElementById("sideC").innerHTML = "Answer Side C " + side3;
}

let count = 0;
document.getElementById("decreaseButton").onclick = function() {
    count-=1;
    document.getElementById("countLabel").innerHTML = "" + count;
}
document.getElementById("resetButton").onclick = function() {
    count = 0;
    document.getElementById("countLabel").innerHTML = "" + count;
}
document.getElementById("increaseButton").onclick = function() {
    count+=1;
    document.getElementById("countLabel").innerHTML = "" + count;
}

let l, m, n;
document.getElementById("rollButton").onclick = function() {
    l = Math.floor(Math.random() * 6) + 1;
    document.getElementById("lLabel").innerHTML = "" + l;
    m = Math.floor(Math.random() * 6) + 1;
    document.getElementById("mLabel").innerHTML = "" + m;
    n = Math.floor(Math.random() * 6) + 1;
    document.getElementById("nLabel").innerHTML = "" + n;
}

let user = "Bro Code";
let fullName, firstName, lastName;
let userLength, userChar, userIndex;
let phoneNumber = "123-456-7890";

document.getElementById("userButton").onclick = function() {
    userLength = user.length;
    fullName = user; //"Bro Code"
    userChar = user.charAt(1);
    userIndex = user.indexOf("o");
    userIndex = user.lastIndexOf("o");
    user = user.trim();
    user = user.toUpperCase();
    //user = user.toLowerCase();
    phoneNumber = phoneNumber.replaceAll("-","/");

    //firstName = fullName.slice(0, 3);
    //lastName = fullName.slice(4);

    fullName = "Snoop Dogg";
    firstName = fullName.slice(0, fullName.indexOf(" "));
    lastName = fullName.slice(fullName.indexOf(" ") + 1);

    document.getElementById("userLabel").innerHTML = "" + user;
    document.getElementById("userLabel1").innerHTML = "" + userLength;
    document.getElementById("userLabel2").innerHTML = "" + userChar;
    document.getElementById("userLabel3").innerHTML = "" + userIndex;

    document.getElementById("userLabel4").innerHTML = "" + phoneNumber;

    document.getElementById("firstName").innerHTML = "" + firstName;
    document.getElementById("lastName").innerHTML = "" + lastName;

}

let marks1;
let symbol1;

document.getElementById("givesymbol").onclick = function() {
    marks1 = document.getElementById("marks").value;
    marks1 = Number(marks1);
    symbol1 = mark (marks1);
    document.getElementById("symbol").innerHTML = "" + symbol1;

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


function mark (marks) {  
  
    let symbol = "";
    if(marks>=90){ 
        symbol = "A+ grade";
    //System.out.println("A+ grade"); 
    }
    else if(marks>=80 ){  
        symbol = "A grade";
        //System.out.println("A grade"); 
    }

    else if(marks>=70){  
        symbol = "B grade";
        //System.out.println("B grade"); 
    }
    else if(marks>=60){  
        symbol = "C grade";
        //System.out.println("C grade"); 
    }
    else if(marks>=50){  
        symbol = "D grade";
        //System.out.println("D grade");  
    }  
    else if(marks<50){  
        symbol = "fail";
        //System.out.println("fail"); 
    }
    else{ 
        symbol = "Invalid!";
        //System.out.println("Invalid!");  
    }  
    return symbol;
}  
