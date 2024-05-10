const board = document.querySelector("#board");
let val = document.querySelector("#nums").value;
let operator = document.querySelector("#oper").value;
let randomOne
let randomTwo
let total
let result = '';
const tasks = document.querySelector(".tasks");
const task = document.querySelector('#res');
const ol = document.createElement('ol');



function calculate() {
    val = document.querySelector("#nums").value;
    operator = document.querySelector("#oper").value;
    document.querySelector("#res").style.display = "none";
    let result = 0;
    switch (val) {
        case '1-10':
            randomOne = Math.floor((Math.random() * 10) + 1);
            randomTwo = Math.floor((Math.random() * 10) + 1); break
        case '1-100':
            randomOne = Math.floor((Math.random() * 100) + 1);
            randomTwo = Math.floor((Math.random() * 100) + 1); break
        case '1-1000':
            randomOne = Math.floor((Math.random() * 1000) + 1);
            randomTwo = Math.floor((Math.random() * 1000) + 1); break
        case '1-10000':
            randomOne = Math.floor((Math.random() * 10000) + 1);
            randomTwo = Math.floor((Math.random() * 10000) + 1); break
    }

    switch (operator) {
        case '+':
            test = `Question : ${randomOne} + ${randomTwo}`;
            total = randomOne + randomTwo;
            result = `Answer : ${randomOne} + ${randomTwo} = ${total} `; break;
        case '-':
            test = `Question : ${randomOne} - ${randomTwo} `;
            total = randomOne - randomTwo;
            result = `Answer : ${randomOne} - ${randomTwo} = ${total} `; break;
        case '*':
            test = `Question : ${randomOne} * ${randomTwo} `;
            total = randomOne * randomTwo;
            result = `Answer : ${randomOne} * ${randomTwo} = ${total} `; break;
        case '/':
            test = `Question : ${randomOne} / ${randomTwo} `;
            total = randomOne / randomTwo;
            result = ` Answer : ${randomOne} / ${randomTwo} = ${total} `; break;
    }

    document.querySelector("#test").innerText = test;

    const li = document.createElement('li');
    ol.appendChild(li);
    task.appendChild(ol);

    const div = document.createElement('div');
    div.innerHTML = result;
    li.appendChild(div);

    const btn = document.createElement('button');
    li.appendChild(btn);
    btn.innerHTML = 'x';

    btn.addEventListener('click', function () {
        const isAllowed = confirm(`האם אתה בטוח כי ברצונך למחוק את ${div.innerHTML}?`); if (isAllowed) {
            li.remove();
            saveTests();
        }
    })
    saveTests()

}
function checkRes() {
    answer = document.querySelector("#answer").value;
    if (answer == total) {
        alert('התשובה נכונה')
    } else {
        alert('התשובה לא נכונה')
    }
    document.querySelector("#res").style.display = "block";

}


function saveTests() {
    const list = document.querySelectorAll('#res ol li');
    const arr = [];
    for (const li of list) {
        const name = li.querySelector('div').innerText.trim();
        if (name) {
            arr.push(name);
        }
        localStorage.setItem('tasks', JSON.stringify(arr));

    }
}
function restoreTests() {
    if (localStorage.tasks) {
        const tasks = JSON.parse(localStorage.tasks);
        for (const task of tasks) {
            newTask(task);
        }
    }
}

function newTask(task) {
    const li = document.createElement('li');
    ol.appendChild(li);
    const div = document.createElement('div');
    div.innerHTML = task;
    li.appendChild(div);
    const btn = document.createElement('button');
    li.appendChild(btn);
    btn.innerHTML = 'x';
    btn.addEventListener('click', function () {
        const isAllowed = confirm(`האם אתה בטוח כי ברצונך למחוק את ${div.innerHTML}?`);
        if (isAllowed) {
            li.remove();
        }
    });
}
