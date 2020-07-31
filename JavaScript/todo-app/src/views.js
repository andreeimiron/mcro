import { getFilters } from './filters'
import { getTodos, updateTodo, removeTodo } from './todos'

// render application notes
const renderTodos = () => {
    const todoEl = document.querySelector('#todos')
    const { searchText, hideCompleted } = getFilters()

    let filteredTodos = getTodos().filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(searchText.toLowerCase())
        const hideCompletedMatch = !hideCompleted || !todo.completed
        
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

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
        renderTodos()
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
        renderTodos()
    })

    return todoElem
}

// generate summary DOM structure for incomplete todos
const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h3')
    const text = incompleteTodos.length === 1 ? 'todo' : 'todos'
    summary.classList.add('list-title')
    summary.textContent = `You have ${incompleteTodos.length} ${text} left.`

    return summary
}

export { renderTodos, generateSummaryDOM, generateTodoDOM }