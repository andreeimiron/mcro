const calculateAverage = (thing, ...numbers) => {
    // return (numOne + numTwo) / 2
    let sum = 0
    numbers.forEach((num) => sum += num)
    const average = sum / numbers.length
    return `Average ${thing} = ${average}`
} 

console.log(calculateAverage('grade', 0, 100,80, 30,8))

const printTeam = (team, coach, ...players) => {
    console.log(`Team: ${team}`)
    console.log(`Coach: ${coach}`)
    console.log(`Players: ${players.join(', ')}`)
}

const team = {
    name: 'team',
    coach: 'coach',
    players: ['a', 'b', 'c', 'd']
}

printTeam(team.name, team.coach, ...team.players)

let cities = ['a', 'b', 'c', 'd']
const citiesCopy = [...cities]
cities = [...cities, 'e']

console.log(cities)
console.log(citiesCopy)

let house = {
    bedrooms: 2,
    bathrooms: 1.5,
    yearBuilt: 2017
}

let newHouse = {
    basement: true,
    ...house,
    bedrooms: 3
}

newHouse.yearBuilt = 2020

console.log(house)
console.log(newHouse)

let person = {
    name: 'Andrei',
    age: 20
}

let location = {
    city: 'Cluj-Napoca',
    country: 'Romania'
}

let details = {
    ...person,
    ...location
}

console.log(details)

const todo = {
    id: 'dfadfasfa',
    text: 'pay the bills',
    completed: false
}

// const text = todo.text
// const completed = todo.completed

const printTodo = ({ text, completed }) => {
    console.log(`${text}: ${completed}`)
}
printTodo(todo)

const { text:todoText, completed, other = 'no details', ...others } = todo

console.log(todoText)
console.log(completed)
console.log(other)
console.log(others)

const age = [65, 0, 13, 21]
const [firstAge, ...otherAges] = age

console.log(firstAge)
console.log(otherAges)