import "core-js/stable"
import "regenerator-runtime/runtime"
import Hangman from './hangman'
import getPuzzle from './requests'
import uuidv4 from 'uuid/v4'
import validator from 'validator'


console.log(validator.isEmail('abc@def.com'))
console.log(uuidv4())

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game.statusMessage

    game.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    }) 
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game = new Hangman(puzzle, 5)
    render()
}

startGame()

document.querySelector('#reset').addEventListener('click', startGame)