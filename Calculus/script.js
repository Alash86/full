const board = document.querySelector("#board");
let val = document.querySelector("#nums").value;
let operator = document.querySelector("#oper").value;
let randomOne = Math.floor((Math.random() * 10) + 1);
let randomTwo = Math.floor((Math.random() * 10) + 1);;


const tasks = document.querySelector(".tasks");


function randomize() {
    randomOne = Math.floor((Math.random() * 10) + 1);
    randomTwo = Math.floor((Math.random() * 10) + 1);

}
function choose() {
    val = document.querySelector("#nums").value;
    operator = document.querySelector("#oper").value;
}

function calculate() {
    let result = 0;
    switch (val) {
        case '1-10': randomOne, randomTwo; break;
        case '1-100': randomOne *= 10, randomTwo *= 10; break;
        case '1-1000': randomOne *= 100, randomTwo *= 100; break;
        case '1-10000': randomOne *= 1000, randomTwo *= 1000; break;
    }

    switch (operator) {
        case '+': result = `התוצאה היא: ${randomOne + randomTwo} = ${randomOne} + ${randomTwo} `; break;
        case '-': result = `התוצאה היא: ${randomOne - randomTwo} = ${randomOne} - ${randomTwo} `; break;
        case '*': result = `התוצאה היא: ${randomOne * randomTwo} = ${randomOne} * ${randomTwo} `; break;
        case '/': result = `התוצאה היא: ${randomOne / randomTwo} = ${randomOne} / ${randomTwo} `; break;
    }
    document.querySelector("#res").innerText = result;
}
// פונקציה להוספת אלמנטים
function newTask(value = '') {
    // יצירת אלמנט חדש
    const li = document.createElement('li');

    // הוספת האלמנט לתור הרשימה
    tasks.appendChild(li);

    // השמת התוכן של המשימה לאלמנט החדש
    const div = document.createElement('div');

    // מאפשרים למשתמש לערוך את התוכן של האלמנט
    div.contentEditable = true;
    div.innerHTML = value;
    li.appendChild(div);

    // יצירת לחצן מחיקה
    const btn = document.createElement('button');
    btn.innerHTML = 'x';

    // יצירת אירוע - כל לחיצה על הלחצן תפעיל את הפונקציה של המחיקה
    btn.addEventListener('click', function () {
        const isAllowed = confirm(`האם אתה בטוח כי ברצונך למחוק את ${div.innerHTML}?`);

        if (isAllowed) {
            li.remove();
        }

        saveTasks();
    });

    li.appendChild(btn);

    div.addEventListener('input', saveTasks);
}

function saveTasks() {
    const list = document.querySelectorAll('.tasks li');
    const arr = [];

    for (const li of list) {
        const name = li.querySelector('div').innerText.trim();

        if (name) {
            arr.push(name);
        }
    }

    localStorage.setItem('tasks', JSON.stringify(arr));
}

function initialData() {
    if (localStorage.tasks) {
        const tasks = JSON.parse(localStorage.tasks);

        for (const task of tasks) {
            newTask(task);
        }
    }
}