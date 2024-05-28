const page = document.querySelector("#page");
let type, params;

restorePage();

const elementSelect = {
    title: [
        'headerType',
        'color',
        'content',
        'fontSize',
        'widthSize',
        'heightSize',
        'borderSize',
        'colorBorder',
        'borderStyle',
        'borderRadius'
    ],
    p: [
        'fontSize',
        'color',
        'content',
        'widthSize',
        'heightSize',
        'borderSize',
        'colorBorder',
        'borderStyle',
        'borderRadius'

    ],
    input: [
        'inputType',
        'fontSize',
        'color',
        'content',
        'widthSize',
        'heightSize',
        'borderRadius'
    ],
    button: [
        'fontSize',
        'color',
        'content',
        'widthSize',
        'heightSize',
        'borderRadius'
    ],
};

function bgChange(elem) {
    page.style.backgroundColor = elem.value;
    savePage();
}

function paddingChange(elem) {
    page.style.padding = elem.value + 'px';
    savePage();
}
function widthChange(elem) {
    page.style.width = elem.value + 'px';
    savePage();
}
function heightChange(elem) {
    page.style.height = elem.value + 'px';
    savePage();
}


function pageToShow(id, elem) {
    document.querySelector('nav a.active').classList.remove('active');
    elem.classList.add('active');

    document.querySelector('#panelSide>div.show').classList.remove('show');
    document.getElementById(id).classList.add('show');
}

function typeSelect(selectElem) {
    type = selectElem.value;
    params = elementSelect[type];

    // הסתרת כל האלמנטים המוצגים
    const divs = document.querySelectorAll('#params>div');

    for (const div of divs) {
        div.classList.remove('show');
    }

    // הצגת האלמטים הנצרכים
    for (const param of params) {
        document.getElementById(param).classList.add('show');
    }
}

function add() {
    // שם התגית כברירת מחדל זה הסוג
    let tagName = type;

    // אם הסוג הוא כותרת, שם התגית לפי מה שהמשתמש בחר
    if (type === 'title') {
        tagName = document.querySelector('#headerType select').value;
    }

    // יצירת אלמנט חדש
    const elem = document.createElement(tagName);

    const inputType = document.querySelector('#inputType select').value;
    const fontSize = document.querySelector('#fontSize input').value;
    const widthSize = document.querySelector('#widthSize input').value;
    const heightSize = document.querySelector('#heightSize input').value;
    const borderSize = document.querySelector('#borderSize input').value;
    const borderColor = document.querySelector('#colorBorder input').value;
    const borderStyle = document.querySelector('#borderStyle select').value;
    const borderRadius = document.querySelector('#borderRadius input').value;
    const color = document.querySelector('#color input').value;
    const content = document.querySelector('#content input').value;

    for (const param of params) {
        if (param === 'inputType') {
            elem.type = inputType;
        } else if (param === 'fontSize') {
            elem.style.fontSize = fontSize + 'px';
        } else if (param === 'widthSize') {
            elem.style.width = widthSize + 'px';
        } else if (param === 'heightSize') {
            elem.style.height = heightSize + 'px';
        } else if (param === 'borderSize') {
            elem.style.borderWidth = borderSize + 'px';
        } else if (param === 'colorBorder') {
            elem.style.borderColor = borderColor;
        } else if (param === 'borderStyle') {
            elem.style.borderStyle = borderStyle;
        } else if (param === 'borderRadius') {
            elem.style.borderRadius = borderRadius + '%';
        } else if (param === 'color') {
            elem.style.color = color;
        } else if (param === 'content') {
            if (type === 'input') {
                elem.value = content;
            } else {
                elem.innerHTML = content;
            }
        }
    }

    page.appendChild(elem);
    savePage();
}

function savePage() {
    localStorage.style = page.attributes.style?.value;
    localStorage.page = page.innerHTML;
}

function restorePage() {
    page.innerHTML = localStorage.page || '';
    page.setAttribute('style', localStorage.style || '');
}

page.addEventListener('input', savePage);

function removeAll() {
    page.innerHTML = '';
    savePage();
}