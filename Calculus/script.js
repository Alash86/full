const board = document.querySelector("#board");
let val = document.querySelector("#nums").value;
let operator = document.querySelector("#oper").value;
let randomOne
let randomTwo
let total
let result = '';
const task = document.querySelector('#res');
const ol = document.createElement('ol');
let point = 0;
task.appendChild(ol);



function calculate() {
    val = document.querySelector("#nums").value;
    operator = document.querySelector("#oper").value;
    task.style.display = "none";
    switch (val) {
        case '1-10':
            randomOne = Math.floor(Math.random() * 10) + 1;
            randomTwo = Math.floor(Math.random() * 10) + 1; break
        case '1-100':
            randomOne = Math.floor(Math.random() * 100) + 1;
            randomTwo = Math.floor(Math.random() * 100) + 1; break
        case '1-1000':
            randomOne = Math.floor(Math.random() * 1000) + 1;
            randomTwo = Math.floor(Math.random() * 1000) + 1; break
        case '1-10000':
            randomOne = Math.floor(Math.random() * 10000) + 1;
            randomTwo = Math.floor(Math.random() * 10000) + 1; break
    }

    switch (operator) {
        case '+':
            test = ` Question is : ${randomOne} + ${randomTwo} `;
            total = randomOne + randomTwo;
            result = `Answer : ${randomOne} + ${randomTwo} = ${total} `; break;
        case '-':
            test = `Question is : ${randomOne} - ${randomTwo} `;
            total = randomOne - randomTwo;
            result = `Answer : ${randomOne} - ${randomTwo} = ${total} `; break;
        case '*':
            test = `Question is : ${randomOne} * ${randomTwo} `;
            total = randomOne * randomTwo;
            result = `Answer : ${randomOne} * ${randomTwo} = ${total} `; break;
        case '/':
            test = `Question is : ${randomOne} /${randomTwo} `;
            total = randomOne / randomTwo;
            result = `Answer : ${randomOne} / ${randomTwo} = ${total} `; break;
    }

    document.querySelector("#test").innerText = test;

    const li = document.createElement('li');
    ol.appendChild(li);


    const div = document.createElement('div');
    div.innerHTML = result;
    li.appendChild(div);

    const btn = document.createElement('button');
    li.appendChild(btn);
    btn.innerHTML = 'x'; // יצירת אירוע - כל לחיצה על הלחצן תפעיל את הפונקציה של המחיקה
    btn.addEventListener('click', function () {
        const isAllowed = confirm(`האם אתה בטוח כי ברצונך למחוק את ${div.innerHTML}?`); if (isAllowed) {
            li.remove()
            saveTests();

        }
    })


}
function checkRes() {
    answer = document.querySelector("#answer").value;
    if (answer === '' || answer === undefined) {
        alert('אנא הכנס תשובה')
        return;
    }
    else if (answer == total) {
        alert('התשובה נכונה')
        point++
        answer = '';

    } else {
        alert('התשובה לא נכונה')
        answer = '';
    }
    task.style.display = "block";
    document.querySelector("#points").innerText = `Correct answers is : ${point}`;
    localStorage.x = point;
    saveTests()
}

function saveTests() {
    const arr = [];
    const list = document.querySelectorAll('#res ol li');
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
    point = localStorage.x;
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
            li.remove()
            saveTests();

        }
    });
}

function resetPoint() {
    localStorage.x = 0;
    point = 0;
    document.querySelector("#points").innerText = `Correct answers is : ${point}`;
}