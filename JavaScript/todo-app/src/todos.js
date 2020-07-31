import uuidv4 from 'uuid/v4'

let todos = []

// read existing todos from localStorage
const loadTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    try { 
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }
}

// save todos to localStorage
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// expose notes from module
const getTodos = () => todos

// create a todo and add to the list
const createTodo = (text) => {
    todos.push({
        id: uuidv4(),
        text: text,
        completed: false
    })
    saveTodos()
}

// remove a todo from the list
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
        saveTodos()
    }
}

// toggle todo
const updateTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if (todo) {
        todo.completed = !todo.completed
        saveTodos()
    }
}

todos = loadTodos()

export { loadTodos, saveTodos, createTodo, removeTodo, updateTodo, getTodos }