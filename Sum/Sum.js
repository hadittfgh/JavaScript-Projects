var Result = document.getElementById("Result");

function Sum() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    var sum = num1 + num2;
    console.log("Result : " + sum);
    Result.innerHTML = sum;
}

var sumBtn = document.getElementById("sumBtn");
sumBtn.addEventListener("click", showMessage)
function showMessage(){
    var parent = document.getElementById("parent");
    var par = document.createElement("p");
    var node = document.createTextNode("Thanks !");
    par.appendChild(node);
    parent.appendChild(par);
}
