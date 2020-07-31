'use strict'

// const notes = [{
//     title: 'Note 1',
//     body: 'Description 1'
// }, {
//     title: 'Note 2',
//     body: 'Description 2'
// }, {
//     title: 'Note 3',
//     body: 'Description 3'
// }]

// query and remove first
// const p = document.querySelector('p')
// p.remove()

// query all and remove
// const p2 = document.querySelectorAll('p')
// p2.forEach(function (p) {
//     console.log(p.textContent)
//     p.textContent = 'asdsadsadsa'

//     // p.remove()
// })

// add new element
// const newP = document.createElement('p')
// newP.textContent = 'new paragraph'
// document.querySelector('body').appendChild(newP)


let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', (e) => {
    const id = uuidv4()
    const timestamp = moment().valueOf()
    
    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes(notes)
    //renderNotes(notes, filters)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})


// const now = moment()
// // now.minute(1)
// now.subtract(1, 'week').subtract(20, 'days')

// console.log(now.format('MMMM Do, Y'))
// console.log(now.fromNow())

// const nowTimestamp = now.valueOf()
// console.log(moment(nowTimestamp).toString())

// const newDate = moment()
// newDate.year(1999).month(9).date(16)
// console.log(newDate.format('MMM D, YYYY'))

// *** Unix Epoch - January 1st 1970 00:00:00
// const now = new Date()
// const timestamp = now.getTime()

// const myDate = new Date(timestamp)
// console.log(myDate)





// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`Day of month: ${now.getDate()}`)
// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minutes: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)

// document.querySelector('#name-form').addEventListener('submit', function (e) {
//     e.preventDefault()
//     console.log(e.target.elements.firstName.value)
//     e.target.elements.firstName.value = ''
// })



// document.querySelector('#remove-notes').addEventListener('click', function () {
//     console.log('Delete all notes')
//     document.querySelector('.note').forEach(function (note) {
//         note.remove
//     })
// })

// document.querySelector('#for-fun').addEventListener('change', function (e) {
//     console.log(e.target.checked)
// })


// ****  CRUD Local Storage

// localStorage.setItem('location', 'Romania')

// console.log(localStorage.getItem('location'))

// localStorage.removeItem('location')

// localStorage.clear()

// const user = {
//     name: 'Andrei',
//     age: 27
// }

// const userJSON = JSON.stringify(user)
// console.log(userJSON)
// localStorage.setItem('user', userJSON)

// const userJSON = localStorage.getItem('user')
// const user = JSON.parse(userJSON)
// console.log(`${user.name} is ${user.age}`)

// *** check for existing saved data


 