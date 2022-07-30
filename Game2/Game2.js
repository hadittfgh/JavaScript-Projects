const message = document.getElementById("message");
const button = document.querySelector("button");
const input = document.querySelector("input").value;
const answers = ["Thanks","Maybe","I don't know", "Yes", "No"];
button.addEventListener("click",showMessage) ;
function showMessage(){
    let rand = Math.floor(Math.random()*answers.length);
    console.log(rand);
    message.innerHTML = input + answers[rand];
    input.value = "";
}