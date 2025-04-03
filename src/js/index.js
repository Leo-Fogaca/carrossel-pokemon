const leftBtn = document.getElementById('left-btn')
const rightBtn = document.getElementById('right-btn')

const pokeCards = document.querySelectorAll('.pokemon-card')

let cardNumber = 0

rightBtn.addEventListener('click', () => {
    if(cardNumber >= pokeCards.length - 1) {
        return;
    }

    pokeCards[cardNumber].classList.remove('selected')

    cardNumber++

    pokeCards[cardNumber].classList.add('selected')
    
})

leftBtn.addEventListener('click', () => {
    if(cardNumber === 0) {
        return;
    }

    pokeCards[cardNumber].classList.remove('selected')

    cardNumber--

    pokeCards[cardNumber].classList.add('selected')
})