const message = document.getElementById("message");
const guessInput = document.getElementById("guessInput");
const startBtn = document.getElementById("startBtn");
let gamePlay = false;
let word = "";
let wordRand = "";
const answers = ["Hadi", "Helen", "Mahdi", "Erfan", "Sama"];
let guessTimes = 0;

startBtn.addEventListener("click", Game);

function Game() {
    if (!gamePlay) {
        guessInput.classList.toggle("visually-hidden");
        startBtn.innerHTML = "Guess";
        gamePlay = true;
        wordRand = createWord().join("");
        message.innerHTML = wordRand;
        guessTimes = 0;
    } else {
        guessTimes++;
        let guess = guessInput.value;
        if (guess == word) {
            message.innerHTML = "You can guess -" + word + "- in " + guessTimes + " times";
            startBtn.innerHTML = "restart";
            guessInput.classList.toggle("visually-hidden");
            guessInput.value = "";
            gamePlay = false;
        }else{
            message.innerHTML = wordRand + "<br>"  + "Guess times : " + guessTimes +  "<br>" + "Thats was wrong . Try again!";
        }
    }

    function createWord() {
        let rand = Math.floor(Math.random() * answers.length);
        word = answers[rand];
        let wordArrayRand = randInWord(word.split(""));
        return wordArrayRand;
    }

    function randInWord(arr) {
        for (var i = 0; i < arr.length; i++) {
            let temp = arr[i];
            let j = Math.floor(Math.random() * (arr.length + 1));
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    }
}