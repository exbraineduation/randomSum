let numbers = document.getElementsByClassName("number");
let equation = document.getElementById("equation");
let result = document.getElementById("result");
let randomNum = document.getElementById("text");
let gameStatus = document.getElementById("gameStatus");
let again = document.getElementById("again");
let finished = false;

window.addEventListener('keypress', (e) => {
    if (!finished && !isNaN(e.key)) {
        [...numbers].forEach(number => {
            number.classList.remove("keypress");
            if (number.innerText == e.key) number.classList.add("keypress");
        });
        equation.innerHTML += (equation.innerHTML == "") ? e.key : "+" + e.key;
        result.innerHTML = Number(result.innerHTML) + Number(e.key);
        if (result.innerHTML == randomNum.innerHTML) {
            gameStatus.innerHTML = "You Are Correct!";
            finished = true;
        }
        else if (Number(result.innerHTML) > Number(randomNum.innerHTML)) {
            gameStatus.innerHTML = "You Are Wrong!";
            finished = true;
        }
    }
});
let randomNumber = () => { randomNum.innerHTML = Math.floor(Math.random() * 100); }
again.addEventListener("click", () => { location.reload() })


