'use strict'

// const todos = [{
//     text: 'Todo first 1',
//     completed: false
// }, {
//     text: 'Todo second 2',
//     completed: true
// }, {
//     text: 'Todo third 3',
//     completed: false
// }, {
//     text: 'Todo 4 sunday',
//     completed: true
// }, {
//     text: 'Todo 5 moday',
//     completed: false
// }]

// const p = document.querySelectorAll('p')

// p.forEach(function (p) {
//     if (p.textContent.includes('abc')) {
//         p.remove()
//     }
// })

/*
const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
})

const text = document.createElement('h3')
text.textContent = `You have ${incompleteTodos.length} todos left.`
document.querySelector('body').appendChild(text)

incompleteTodos.forEach(function (t) {
    const p = document.createElement('p')
    p.textContent = t.text
    document.querySelector('body').appendChild(p)
})

*/

// listen for new todo
/*
document.querySelector('#add-todo').addEventListener('click', function (e) {
    e.target.textContent = 'The button was clicked'
    console.log('new todo')
})


document.querySelector('#new-todo-text').addEventListener('input', function (e) {
    console.log(e.target.value)
})
*/

let todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters)

document.querySelector('#search-todo').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#add-todo').addEventListener('submit', (e) => {
    const text = e.target.elements.todoText.value.trim()
    e.preventDefault()

    if (text.length > 0) {
        todos.push({
            id: uuidv4(),
            text: text,
            completed: false
        })
        saveTodos(todos)
        renderTodos(todos, filters)
        e.target.elements.todoText.value = ''
    }
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})
