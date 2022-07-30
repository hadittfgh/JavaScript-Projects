var result = document.getElementById("result");

function Check(){
    var inputNumber = document.getElementById("inputNumber").value;
    inputNumber = parseInt(inputNumber);
    console.log(inputNumber);
    try{
        if (inputNumber == ""){
            throw "is empty";
        }
        if (isNaN(inputNumber)){
            throw "isn't number"
        }
        if (inputNumber < 5){
            throw "is low";
        }
        if (inputNumber > 10){
            throw "is high";
        }
        if (inputNumber >= 5 && inputNumber <= 10 ){
            throw "is true";
        }
    }
    catch(err){
        result.innerHTML = "Input  " + err; 
    }
    finally{
        document.getElementById("inputNumber").value = "";
    }
}