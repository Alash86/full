const computer = document.querySelector('.computer-deck');
const player = document.querySelector('.player-deck');
const computerSlot = document.querySelector('.computer-card-slot');
const playerSlot = document.querySelector('.player-card-slot');
const textSlot = document.querySelector('.text');
const spanPC = document.getElementById('pcScore')
const spanPl = document.getElementById('playerScore')
let scorePl = 0
let scorePC = 0
let pcCount = computer.innerHTML;
let playerCount = player.innerHTML;

const suits = ["♠", "♣", "♥", "♦"]
const cards = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
]
const cardsValue = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14
}
const color = ['red', 'black']

class Card {
    suit;
    card;
    value;
    color
    constructor(suit, card, color) {
        this.suit = suit
        this.card = card
        this.color = color
        this.value = cardsValue[card]


    }
    getCard() {
        return `${this.card}${this.suit}`
    }
    getValue() {
        return this.value
    }
}


player.addEventListener('click', (e) => {
    e.preventDefault()
    dealCard();

})
computer.addEventListener('click', (e) => {
    e.preventDefault()
    dealCard();

})


function dealCard() {
    const cardComputer = new Card(suits[Math.floor(Math.random() * suits.length)], cards[Math.floor(Math.random() * cards.length)], color[Math.floor(Math.random() * color.length)])
    const cardPlayer = new Card(suits[Math.floor(Math.random() * suits.length)], cards[Math.floor(Math.random() * cards.length)], color[Math.floor(Math.random() * color.length)])


    const divComputer = document.createElement('div')
    const divPlayer = document.createElement('div')
    divComputer.innerHTML = cardComputer.getCard()
    divPlayer.innerHTML = cardPlayer.getCard()
    divComputer.classList.add('card');
    divPlayer.classList.add('card');
    divComputer.style.color = color[Math.floor(Math.random() * color.length)]
    divPlayer.style.color = color[Math.floor(Math.random() * color.length)]
    computerSlot.appendChild(divComputer)
    playerSlot.appendChild(divPlayer)
    let pcValue = cardComputer.getValue();
    let playerValue = cardPlayer.getValue();

    time()
    checkScore(pcValue, playerValue)

}

function time() {
    setTimeout(() => {
        computerSlot.innerHTML = '';
    }, 1.9 * 1000);
    setTimeout(() => {
        playerSlot.innerHTML = '';
    }, 1.9 * 1000);
}

function checkScore(pcValue, playerValue) {
    if (textSlot.innerHTML === ('WAR !!')) {
        if (pcValue > playerValue) {
            textSlot.innerHTML = 'computer win'
            textSlot.style.color = 'black'
            pcCount = pcCount + 5;
            playerCount = playerCount - 5;

            computer.innerHTML = pcCount;
            player.innerHTML = playerCount;
            scorePC = scorePC + 5
            spanPC.innerText = scorePC;


        } else if (pcValue < playerValue) {
            textSlot.style.color = 'black'
            textSlot.innerHTML = 'player win'
            playerCount = playerCount + 5;
            pcCount = pcCount - 5;
            player.innerHTML = playerCount;
            computer.innerHTML = pcCount;
            scorePl = scorePl + 5;
            spanPl.innerText = scorePl;

        }
        else if (pcValue == playerValue) {
            textSlot.innerHTML = 'WAR !!'
            textSlot.style.color = 'red';
            war();
        }
    } else {
        if (pcValue > playerValue) {
            textSlot.innerHTML = 'computer win'
            textSlot.style.color = 'black'
            pcCount++;
            playerCount--;

            computer.innerHTML = pcCount;
            player.innerHTML = playerCount;
            scorePC++
            spanPC.innerText = scorePC;


        } else if (pcValue < playerValue) {
            textSlot.style.color = 'black'
            textSlot.innerHTML = 'player win'
            playerCount++
            pcCount--;
            player.innerHTML = playerCount;
            computer.innerHTML = pcCount;
            scorePl++;
            spanPl.innerText = scorePl;

        }
        else if (pcValue == playerValue) {
            textSlot.innerHTML = 'WAR !!'
            textSlot.style.color = 'red';
            war();
        }
    }
    if (playerCount === 0) {
        alert(' game over Computer Won!!')
    }
    if (pcCount === 0) {
        alert(' game over Player Won!! ')
    }
}

function war() {

    const emptyDivPC = document.createElement('div');
    emptyDivPC.classList.add('empty');
    emptyDivPC.innerHTML = '3'
    const emptyDivPlayer = document.createElement('div');
    emptyDivPlayer.classList.add('empty');
    emptyDivPlayer.innerHTML = '3'

    setTimeout(() => {
        computerSlot.appendChild(emptyDivPC);
        playerSlot.appendChild(emptyDivPlayer);
    }, 1.9 * 1000)
    setTimeout(() => {
        computerSlot.innerHTML = '';
        playerSlot.innerHTML = '';
    }, 3.5 * 1000)
    setTimeout(() => {
        dealCard()
    }, 5 * 1000)






}
