const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").src = `images/dice${randomNumber1}.png`;
document.querySelector(".img2").src = `images/dice${randomNumber2}.png`;

const resultText =
    randomNumber1 > randomNumber2
        ? "Player 1 Wins!"
        : randomNumber1 < randomNumber2
            ? "Player 2 Wins!"
            : "Draw";

document.querySelector(".container h1").textContent = resultText;
