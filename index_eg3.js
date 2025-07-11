/*document.getElementById("givesymbol").onclick = function() {
    marks1 = document.getElementById("marks").value;
    marks1 = Number(marks1);
    symbol1 = mark (marks1);
    document.getElementById("symbol").innerHTML = "" + symbol1;
}
*/

document.getElementById("givesymbol").onclick = function() {
    marks1 = document.getElementById("marks").value;
	cube = bob(marks1)
    document.getElementById("symbol").innerHTML = "" + cube;
	document.getElementById("myDiv").innerHTML = "" + cube;
	
}


function bob (sand){
	x = sand * 6;
	return x;
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
