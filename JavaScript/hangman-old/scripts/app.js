// Primitive values: string, number, boolean, null, undefined

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype ->> null
// function: myFunc --> Function.prototype --> Object.prototype ->> null
// String: myString --> String.prototype --> Object.prototype ->> null
// Number: myNumber --> Number.prototype --> Object.prototype ->> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype ->> null

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game

// puzzleEl.textContent = game.puzzle
// guessesEl.textContent = game.statusMessage

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

// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }).catch((error) => {
//     console.log(error)
// })

// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }, () => {
//     console.log(`Error: ${err}`)
// })

// getCountry('US').then((country) => {
//     console.log(country.name)
// }, () => {
//     console.log(`Error: ${err}`)
// })

// getCountry('US').then((country) => {
//     console.log(country.name)
// }).catch((error) => {
//     console.log(error)
// })

// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//     if (response.status === 200) {
//         return response.json()
//     } else {
//         throw new Error('Unabke to fetch the puzzle')
//     }
// }).then((data) => {
//     console.log(data.puzzle)
// }).catch((error) => {
//     console.log(error)
// })

// getCurrentCountry().then((country) => {
//     console.log(`Current country: ${country.name}`)
// }).catch((error) => {
//     console.log(error)
// })

// getLocation().then((location) => {
//     console.log(`City: ${location.city}\nRegion: ${location.region}\nCountry: ${location.country}`)
//     return getCountry(location.country)
// }).then((country) => {
//     console.log(country.name)
// }).catch((error) => {
//     console.log(error)
// })