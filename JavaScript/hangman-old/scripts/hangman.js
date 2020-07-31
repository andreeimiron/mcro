// HTTP (Hypertext Transfer Protocol)
// Request - what do we wnt to do
// Respone what was actually done
class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessed = []
        this.status = 'playing'
    }

    calculateStatus() {
        const finished = this.word.every((letter) => this.guessed.includes(letter) || letter === ' ')

        if (this.remainingGuesses <= 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }

    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed'){
            return `Nice try! The word was "${this.word.join('')}"`
        } else {
            return `Great work! You guessed the word!`
        }
    }

    get puzzle() {
        let puzzle = ''

        this.word.forEach((letter) => {
            if (this.guessed.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })

        return puzzle
    }

    makeGuess(letter){
        letter = letter.toLowerCase()
        const isUnique = !this.guessed.includes(letter)
        const isBadGuess = !this.word.includes(letter)

        if(this.status !== 'playing') {
            return
        }

        if (isUnique) {
            this.guessed.push(letter)
        }

        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }

        this.calculateStatus()
    }
}

// const Hangman = function (word, remainingGuesses) {
//     this.word = word.toLowerCase().split('')
//     this.remainingGuesses = remainingGuesses
//     this.guessed = []
//     this.status = 'playing'
// }

// Hangman.prototype.calculateStatus = function () {
//     const finished = this.word.every((letter) => {
//         return this.guessed.includes(letter)
//     })

//     // const unguessed = this.word.filter((letter) => {
//     //     return !this.guessed.includes(letter)
//     // })
//     // const finished = unguessed.length === 0

//     // let finished = true
//     // this.word.forEach((letter) => {
//     //     if (!this.guessed.includes(letter)) {
//     //         finished = false
//     //     }
//     // })

//     if (this.remainingGuesses <= 0) {
//         this.status = 'failed'
//     } else if (finished) {
//         this.status = 'finished'
//     } else {
//         this.status = 'playing'
//     }
// }

// Hangman.prototype.getStatusMessage = function () {
//     if (this.status === 'playing') {
//         return `Guesses left: ${this.remainingGuesses}`
//     } else if (this.status === 'failed'){
//         return `Nice try! The word was "${this.word.join('')}"`
//     } else {
//         return `Great work! You guessed the word!`
//     }
// }

// Hangman.prototype.getPuzzle = function () {
//     let puzzle = ''

//     this.word.forEach((letter) => {
//         if (this.guessed.includes(letter) || letter === ' ') {
//             puzzle += letter
//         } else {
//             puzzle += '*'
//         }
//     })

//     return puzzle
// }

// Hangman.prototype.makeGuess = function (letter) {
//     letter = letter.toLowerCase()
//     const isUnique = !this.guessed.includes(letter)
//     const isBadGuess = !this.word.includes(letter)

//     if(this.status !== 'playing') {
//         return
//     }

//     if (isUnique) {
//         this.guessed.push(letter)
//     }

//     if (isUnique && isBadGuess) {
//         this.remainingGuesses--
//     }

//     this.calculateStatus()
// }