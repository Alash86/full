const board = document.querySelector("#board");
const width = 70;
const height = 60;
const divs = [];
let turn = Math.floor(Math.random() * 2 + 1);
let one = 'blue';
let two = 'green';

board.addEventListener("click", ev => {
    elem = ev.target;
    if (elem === board) {
        return;
    }
    if (elem.style.backgroundColor === one || elem.style.backgroundColor === two) {
        return;
    }
    checkTurn();
    if (turn === 1) {

        elem.style.backgroundColor = one;
    }
    else if (turn === 2) {
        elem.style.backgroundColor = two;

    }
    checkwinner();


});



function createBoard() {
    board.style.gridTemplateColumns = `repeat(${width / 10}, 1fr)`;

    for (let i = 0; i < (width * height / 100); i++) {
        const div = document.createElement("div");
        div.innerText = i;
        board.appendChild(div);
        divs.push(div);
    }


}

function checkTurn() {
    document.querySelector(".one").classList.remove("turn");
    document.querySelector(".two").classList.remove("turn");
    if (turn === 1) {
        document.querySelector(".one").classList.add("turn");
        turn = 2;
    } else {
        document.querySelector(".two").classList.add("turn");
        turn = 1;
    }
}

function checkwinner() {

    for (let i = 0; i < divs.length; i++) {
        if (divs[i].style.backgroundColor === one && divs[i + 1].style.backgroundColor === one && divs[i + 2].style.backgroundColor === one && divs[i + 3].style.backgroundColor === one) {
            gameover(one);
        }
        if (divs[i].style.backgroundColor === two && divs[i + 1].style.backgroundColor === two && divs[i + 2].style.backgroundColor === two && divs[i + 3].style.backgroundColor === two) {
            gameover(two);
        }


    }

    for (let j = 0; j < divs.length; j++) {
        if (divs[j].style.backgroundColor === one && divs[j + (width / 10)].style.backgroundColor === one && divs[j + 2 * (width / 10)].style.backgroundColor === one && divs[j + 3 * (width / 10)].style.backgroundColor === one) {
            gameover(one);
        }
        if (divs[j].style.backgroundColor === two && divs[j + (width / 10)].style.backgroundColor === two && divs[j + 2 * (width / 10)].style.backgroundColor === two && divs[j + 3 * (width / 10)].style.backgroundColor === two) {
            gameover(two);
        }


    }
}

function gameover(color) {

    setTimeout(() => { alert(`game over ${color} win`) }, 100);

    divs.forEach(div => {
        setTimeout(() => { div.style.backgroundColor = 'white' }, 1000 * 2);
    })

    if (turn === 2) {
        turn = 1;
    }
    else if (turn === 1) {
        turn = 2;
    }


}


