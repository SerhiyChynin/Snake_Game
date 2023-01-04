const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const ground = new Image();
// ground.src = "img/ground.png";

const foodImg = new Image();
foodImg.src = "img/Food_2.png";

let box = 32;

let score = 0;

let food = {
    x: Math.floor((Math.random() * 15 + 1)) * box,
    y: Math.floor((Math.random() * 15 + 1)) * box,
}

let snake = []
snake[0] = {
    x: 7 * box,
    y: 8 * box,
    
}



document.addEventListener('keydown', direction);
let dir;
function direction(e) {
    if (e.keyCode == 37 && dir != 'right')
        dir = 'left';
    else if (e.keyCode == 38 && dir != 'down')
        dir = 'up';
    else if (e.keyCode == 39 && dir != 'left')
        dir = 'right';
    else if (e.keyCode == 40 && dir != 'up')
        dir = 'down';
}



function drawGame() {
     ctx.drawImage(ground, 0, 0)
     ctx.drawImage(foodImg, food.x, food.y)
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = 'orange';
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }

    ctx.fillStyle = 'white';
    ctx.font = '50px Arial';
    ctx.fillText(score, box * 2.5, box * 1.7);
    

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    snake.pop();
 
    if (dir == 'left') snakeX -= box;
    if (dir == 'right') snakeX += box;
    if (dir == 'up') snakeY -= box;
    if (dir == 'down') snakeY += box;

    let newHead = {
        x: snakeX,
        y: snakeY
    };
    

    snake.unshift(newHead);
}


let game = setInterval(drawGame, 100);