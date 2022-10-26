console.log("Webpage is Active.");

function testFunction(){
    let x = prompt("Enter the 1st number you wish to multiply ");
    let z = prompt("Enter the 2nd number you wish to multiply ");
    let y = x * z;
    console.log("the sum of " + x ,"and " + z ,"Is " + y);
    document.getElementById("Multiplication").innerHTML = y;

}

function divFunction(){
    let a = prompt("Enter the 1st number you wish to divide. ");
    let b = prompt("Enter the 2nd number you wish to divide. ");
    let c = a / b;
    console.log("the sum of " + a ,"and " + b, "Is " + c);
    document.getElementById("division").innerHTML = c;
}

function addFunction(){
    let d = Number(prompt("Enter the 1st number you wish to add. "))
    let e = Number(prompt("Enter the 2nd number you wish to add. "))
    let f = d + e;
    console.log("the sum of " + d ,"and " + e, "Is " + f);
    document.getElementById("addition").innerHTML = f;

}
