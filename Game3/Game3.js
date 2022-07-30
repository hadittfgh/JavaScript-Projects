const gameArea = document.querySelector(".gameArea");
const button = document.querySelector("button");
const header = document.getElementById("header");
const count = 8;
let gamePlay = false;
let guessCount = 0;
let trueArray = [];
button.addEventListener("click", Game);
function Game() {
    if (!gamePlay) {
        gamePlay = true;
        button.innerHTML = "Combo Check";
        header.innerHTML = "Welcome to the Game";
        gameArea.innerHTML = "";
        trueArray = [];
        maker();
        guessCount = 0;
    } else {
        guessCount++;
        header.innerHTML = "Guess times: " + guessCount;
        let numbers = document.querySelectorAll(".numb");
        numbers.status;
        for (var i = 0; i < count; i++) {
            if (numbers[i].value == numbers[i].correct) {
                numbers[i].classList.remove("bg-warning");
                numbers[i].classList.remove("bg-info");
                numbers[i].classList.add("bg-success");
                numbers[i].status = "Right";
            } else {
                if (numbers[i].correct < numbers[i].value) {
                    numbers[i].classList.remove("bg-success");
                    numbers[i].classList.remove("bg-warning");
                    numbers[i].classList.add("bg-info");
                } else {
                    numbers[i].classList.remove("bg-success");
                    numbers[i].classList.remove("bg-info");
                    numbers[i].classList.add("bg-warning");
                }
            }
        }

        //End Condition
        for (var j = 0; j < count; j++) {
            if (numbers[j].status == "Right") {
                trueArray.push(numbers[j].value);
                console.log(trueArray);
                if (trueArray.length == count) {
                    header.innerHTML = "You solved combo in " + guessCount + " guesses";
                    gamePlay = false;
                    button.innerHTML = "restart";
                }
            }
            else {
                trueArray = [];
            }
        }

    }

    function maker() {
        for (var i = 0; i < count; i++) {
            var el = document.createElement("input");
            el.type = "number";
            el.max = 9;
            el.min = 0;
            el.value = 0;
            el.correct = Math.floor(Math.random() * 10);
            el.classList = "form-control numb mt-3";
            gameArea.append(el);
        }
    }
}