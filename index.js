let textEl = document.querySelector("#text-el")
let cardsEl = document.querySelector("#cards-el")
let sumEl = document.querySelector("#sum-el")
let chipsEl = document.querySelector("#chips-el")

textEl.textContent = "Play a round?"
cardsEl.textContent = "Cards: "
sumEl.textContent = "Sum: "
chipsEl.textContent = "Name: $150"

let cards = []
let sum = 0
let isAlive = false
let isBlackjack = false

function startGame() {
  isAlive = true
  isBlackjack = false
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = cards[0] + cards[1]
  renderResults()
}

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1
  if (randomCard > 10) {
    randomCard = 10
  } else if (randomCard === 1) {
    randomCard = 11
  }
  return randomCard
}

function renderResults() {
  checkStatus()
  cardsEl.textContent = "Cards: "
  cards.forEach(card => {
    cardsEl.textContent += `${card} `
  });
  sumEl.textContent = `Sum: ${sum}`
}

function drawNewCard() {
  if (isAlive && !isBlackjack) {
    let newCard = getRandomCard()
    cards.push(newCard)
    sum += newCard
    renderResults()
  }
}

function checkStatus() {
  if (sum < 21) {
    textEl.textContent = "Draw another card?"
  } else if (sum === 21) {
    textEl.textContent = "You've got a BlackJack!"
    isBlackjack = true
  } else {
    textEl.textContent = "You're OUT!"
    isAlive = false
  }
}