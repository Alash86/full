const board = document.querySelector("#board");
const width = window.screen.width < 640 ? 20 : 40; // הרוחב בהתאם לרוחב המסך
const height = 40;
const snake = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const divs = [];
let direction = 'left';
let gameEnd = false;
interval = '';

function createBoard() {
    board.style.gridTemplateColumns = `repeat(${width}, 1fr)`;

    for (let i = 0; i < width * height; i++) {
        const div = document.createElement("div");
        board.appendChild(div);
        divs.push(div);
    }

    color();
}

function color() {
    divs.forEach(div => {
        div.classList.remove("snake");
    });

    snake.forEach(x => {
        divs[x].classList.add("snake");
    });
}

function move(dir) {

    let head = snake[0];

    if (dir === 'up') {
        if (direction === 'down') {
            return;
        }

        head -= width;

        // בדיקת גבולות - אם הנחש עומד לחרוג מה-0
        if (head < 0) {

            gameOver();
            return;
        }
    } else if (dir === 'down') {
        if (direction === 'up') {
            return;
        }

        head += width;

        if (head >= width * height) {

            gameOver()
            return;
        }
    } else if (dir === 'left') {
        if (direction === 'right') {
            return;
        }

        head++;

        if (head % width === 0) {

            gameOver();
            return;
        }
    } else if (dir === 'right') {
        if (direction === 'left') {
            return;
        }

        if (head % width === 0) {

            gameOver();
            return;
        }

        head--;
    }

    direction = dir;

    snake.unshift(head);
    snake.pop();
    color();
}

window.addEventListener("keydown", ev => {
    ev.preventDefault();

    switch (ev.key) {
        case "ArrowUp": move("up"), inter(); break;
        case "ArrowRight": move("right"), inter(); break;
        case "ArrowDown": move("down"), inter(); break;
        case "ArrowLeft": move("left"), inter(); break;
    }
});

// window.addEventListener("keydown", ev => {
//     ev.preventDefault();

//     if (ev.key === "ArrowUp") {
//         move("up");
//     } else if (ev.key === "ArrowRight") {
//         move("right");
//     } else if (ev.key === "ArrowDown") {
//         move("down");
//     } else if (ev.key === "ArrowLeft") {
//         move("left");
//     }
// });

function inter() {
    const interval = setInterval(() => {
        move(direction);
    }, 100);
    if (gameEnd === true) {
        clearInterval(interval);
    }
    ev = '';
}

function gameOver() {
    alert("Game over")
    gameEnd = true;
    direction = '';
    dir = '';
}