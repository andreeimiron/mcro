'use strict'

// read existing todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    try { 
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }
}

// save the todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// remove a todo from the list
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// update the value of completed todo
const updateTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if (todo) {
        todo.completed = !todo.completed
    }
}

// generate the DOM structure for a todo
const generateTodoDOM = (todo) => {
    const todoElem = document.createElement('label')
    const containerEl = document.createElement('div')
    const textElem = document.createElement('span')
    const checkbox = document.createElement('input')
    const button = document.createElement('button')

    // setup checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    containerEl.appendChild(checkbox)
    checkbox.addEventListener('change', () => {
        updateTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    // setup todo text
    textElem.textContent = todo.text
    containerEl.appendChild(textElem)

    // setup container
    todoElem.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoElem.appendChild(containerEl)

    // setup remove button
    button.textContent = 'remove'
    button.classList.add('button', 'button--text')
    todoElem.appendChild(button)
    button.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoElem
}

const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h3')
    const text = incompleteTodos.length === 1 ? 'todo' : 'todos'
    summary.classList.add('list-title')
    summary.textContent = `You have ${incompleteTodos.length} ${text} left.`

    return summary
}

// render application notes
const renderTodos = (todos, filters) => {
    const todoEl = document.querySelector('#todos')

    let filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter((todo) => {
        return !todo.completed
    })

    todoEl.innerHTML = ''
    todoEl.appendChild(generateSummaryDOM(incompleteTodos))

    if (filteredTodos.length > 0) {
        filteredTodos.forEach((todo) => {
            todoEl.appendChild(generateTodoDOM(todo))
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'No todos to show'
        emptyMessage.classList.add('empty-message')
        todoEl.appendChild(emptyMessage)
    }
}
