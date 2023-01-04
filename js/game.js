const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const ground = new Image();
ground.src = "img/ground.png";

const foodImg = new Image();
foodImg.src = "img/food.png";

let box = 64;

let score = 0;

let food = {
    x: Math.floor((Math.random() * 7 + 1)) * box,
    y: Math.floor((Math.random() * 5 + 1)) * box,
}

let snake = []
snake[0] = {
    x: 4 * box,
    y: 5 * box,
    
}

function drawGame() {
     ctx.drawImage(ground, 0, 0)
     ctx.drawImage(foodImg, food.x, food.y)

}

let game = setInterval(drawGame, 100);