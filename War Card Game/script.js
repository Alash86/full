const computer = document.querySelector('.computer-deck');
const player = document.querySelector('.player-deck');
const computerSlot = document.querySelector('.computer-card-slot');
const playerSlot = document.querySelector('.player-card-slot');
const textSlot = document.querySelector('.text');


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

computer.addEventListener('click', () => {
    dealCard();

})

player.addEventListener('click', () => {
    dealCard();

})

function dealCard() {
    const cardComputer = new Card(suits[Math.floor(Math.random() * suits.length)], cards[Math.floor(Math.random() * cards.length)])
    const cardPlayer = new Card(suits[Math.floor(Math.random() * suits.length)], cards[Math.floor(Math.random() * cards.length)])


    computerSlot.innerHTML = ''
    playerSlot.innerHTML = ''
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

}


