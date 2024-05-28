const board = document.querySelector("#board");
const width = 70;
const height = 60;
const divs = [];
let turn = Math.floor(Math.random() * 2) + 1;
let one = 'blue';
let two = 'green';
const rows = height / 10
const cols = width / 10
let win1 = 0;
let win2 = 0;
player1 = document.querySelector('#player1 span');
player2 = document.querySelector('#player2 span');



function createBoard() {
    board.style.gridTemplateColumns = `repeat(${width / 10}, 1fr)`;

    for (let i = 0; i < (width * height / 100); i++) {
        const div = document.createElement("div");
        board.appendChild(div);
        divs.push(div);
    }

    win1 = localStorage ? (localStorage.getItem('one') || 0) : 0;
    player1.innerText = win1;
    win2 = localStorage ? (localStorage.getItem('two') || 0) : 0;
    player2.innerText = win2;
}

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

    for (let i = 0; i < divs.length - 3; i++) {
        if (divs[i].style.backgroundColor === one && divs[i + 1].style.backgroundColor === one && divs[i + 2].style.backgroundColor === one && divs[i + 3].style.backgroundColor === one) {
            gameover(one);
        }
        if (divs[i].style.backgroundColor === two && divs[i + 1].style.backgroundColor === two && divs[i + 2].style.backgroundColor === two && divs[i + 3].style.backgroundColor === two) {
            gameover(two);
        }


    }

    for (let j = 0; j < divs.length - 3 * (width / 10); j++) {
        if (divs[j].style.backgroundColor === one && divs[j + (width / 10)].style.backgroundColor === one && divs[j + 2 * (width / 10)].style.backgroundColor === one && divs[j + 3 * (width / 10)].style.backgroundColor === one) {
            gameover(one);
        }
        if (divs[j].style.backgroundColor === two && divs[j + (width / 10)].style.backgroundColor === two && divs[j + 2 * (width / 10)].style.backgroundColor === two && divs[j + 3 * (width / 10)].style.backgroundColor === two) {
            gameover(two);
        }


    }
    for (let e = 0; e < divs.length - 3 * 8; e++) {
        if (divs[e].style.backgroundColor === one && divs[e + 8].style.backgroundColor === one && divs[e + 2 * 8].style.backgroundColor === one && divs[e + 3 * 8].style.backgroundColor === one) {
            gameover(one);
        }
        if (divs[e].style.backgroundColor === two && divs[e + 8].style.backgroundColor === two && divs[e + 2 * 8].style.backgroundColor === two && divs[e + 3 * 8].style.backgroundColor === two) {
            gameover(two);
        }

    }
    for (let f = 0; f < divs.length - 3 * 6; f++) {
        if (divs[f].style.backgroundColor === one && divs[f + 6].style.backgroundColor === one && divs[f + 2 * 6].style.backgroundColor === one && divs[f + 3 * 6].style.backgroundColor === one) {
            gameover(one);
        }
        if (divs[f].style.backgroundColor === two && divs[f + 6].style.backgroundColor === two && divs[f + 2 * 6].style.backgroundColor === two && divs[f + 3 * 6].style.backgroundColor === two) {
            gameover(two);
        }

    }
}

function gameover(color) {

    setTimeout(() => { alert(`game over ${color} win`) }, 100);
    if (color === 'blue') {
        win1++;
        document.querySelector('#player1 span').innerText = win1;
    }
    else if (color === 'green') {
        win2++;
        document.querySelector('#player2 span').innerText = win2;
    }

    divs.forEach(div => {
        setTimeout(() => { div.style.backgroundColor = 'white' }, 1000 * 2);
    })

    if (turn === 2) {
        turn = 1;
    }
    else if (turn === 1) {
        turn = 2;
    }

    localStorage.setItem('one', win1);
    localStorage.setItem('two', win2);

}
function reset() {
    win1 = 0;
    win2 = 0;
    player1.innerText = win1;
    player2.innerText = win2;
    localStorage.setItem('one', win1);
    localStorage.setItem('two', win2);

}