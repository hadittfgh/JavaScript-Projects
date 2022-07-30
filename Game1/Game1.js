var message = document.querySelector("#message");
var buttons = document.querySelectorAll("button");
const options = ["Heads","Tails"];
var score = [0,0]
function myAlert(){
    alert("Hi Welcome to Heads and Tails Game");
}
for(var i=0; i < buttons.length; i++){
    console.log(buttons[i]);
    buttons[i].addEventListener("click",tassCoin)
}

function tassCoin(e){
    var playerChoose = e.target.innerText;
    let rand = Math.floor(Math.random()*2)
    let computerChoose = options[rand];
    console.log("Player choose : " + playerChoose);
    console.log("Computer choose : " + computerChoose);
    if (playerChoose === computerChoose){
        message.innerHTML = "Player win."
        score[0]++;
    }else{
        message.innerHTML = "Computer win."
        score[1]++;
    }
    message.innerHTML += "<br>Player score : " + score[0] + " | Computer score : " + score[1];
}
