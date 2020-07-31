const square = (num) => num * num

const squareLong = (num) => {
    return num * num
}

console.log(square(5))

const people = [{
    name: 'Andrei',
    age: 21
}, {
    name: 'Alex',
    age: 23
}, {
    name: 'Lorons',
    age: 22
}]

const under30v1 = people.filter(function (person) {
    return person.age < 30
})

const under30 = people.filter((person) => person.age < 30)
console.log(under30)

const person = people.find((person) => person.age === 22)
console.log(person)

