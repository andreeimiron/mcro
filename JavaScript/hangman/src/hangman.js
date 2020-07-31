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
            // this.guessed = [...this.guessed, letter]
        }

        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }

        this.calculateStatus()
    }
}

export { Hangman as default }