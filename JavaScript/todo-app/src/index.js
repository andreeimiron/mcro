import { createTodo, loadTodos } from './todos'
import { setFilters } from './filters'
import { renderTodos } from './views'


// Set up form submission handler

renderTodos()

document.querySelector('#search-todo').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderTodos()
})

document.querySelector('#add-todo').addEventListener('submit', (e) => {
    const text = e.target.elements.todoText.value.trim()
    e.preventDefault()

    if (text.length > 0) {
        createTodo(text)
        renderTodos()
        e.target.elements.todoText.value = ''
    }
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    setFilters({
        hideCompleted: e.target.checked
    })
    renderTodos()
})

window.addEventListener('storage', (e) => {
    if (e.key === 'todos') {
        loadTodos()
        renderTodos()
    }
})