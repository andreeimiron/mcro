// ** prototypal inheritance
// myPerson --> Person.prototype --> Object.prototype --> null


class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }

    getBio() {
        let bio = `${this.firstName} is ${this.age}`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })
    
        return bio
    }

    set fullName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }

    getBio() {
        return `${this.fullName} is a ${this.position}`
    }

    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, likes, grade) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }

    getBio() {
        const status = this.grade >= 70 ? 'passing' : 'failing'

        return `${this.firstName} is ${status} the exam`
    }

    updateGrade(value) {
        this.grade += value
    }
}

const newMe = new Student('Andrei', 'Miron', 21, ['biking', 'teaching'], 60)
console.log(newMe.getBio())
newMe.fullName = 'Alex Mihai'
newMe.updateGrade(15)
console.log(newMe.getBio())


// const Person = function (firstName, lastName, age, likes = []) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.likes = likes
// }

// Person.prototype.getBio = function () {
//     let bio = `${this.firstName} is ${this.age}`

//     this.likes.forEach((like) => {
//         bio += ` ${this.firstName} likes ${like}.`
//     })

//     return bio
// }

// Person.prototype.setName = function (fullName) {
//     const names = fullName.split(' ')
//     this.firstName = names[0]
//     this.lastName = names[1]
// }

const me = new Employee('Andrei', 'Miron', 21, 'Programmer', ['biking', 'teaching'])
console.log(me.getBio())
console.log(me.getYearsLeft())

// const person = new Person('Alex', 'Stanciu', 21)
// console.log(person.getBio())