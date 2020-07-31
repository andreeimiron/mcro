const tasks = [{
    title: 'Todo 1',
    completed: false
}, {
    title: 'Todo 2',
    completed: true
}, {
    title: 'Todo 3',
    completed: false
}, {
    title: 'Todo 4',
    completed: true
}, {
    title: 'Todo 5',
    completed: false
}]

const findTask = function (tasks, taskTitle) {
    return tasks.find(function (task, index) {
        return task.title.toLowerCase() === taskTitle.toLowerCase()
    })
}

const removeTask = function (tasks, taskTitle) {
    const index = tasks.findIndex(function (task, index) {
        return task.title.toLowerCase() === taskTitle.toLowerCase()
    })

    if (index > -1) {
        tasks.splice(index, 1);
    }
}

removeTask(tasks, 'Todo 3')

// console.log(tasks)


const sortTasks = function (tasks) {
    tasks.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return 1
        } else if (a.completed && !b.completed) {
            return -1
        } else {
            return 0
        }
    })
}

sortTasks(tasks)
console.log(tasks)