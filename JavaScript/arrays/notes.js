// const notes = ['Note 1', 'Note 2', 'Note 3']

// notes.push('Note 4')
// console.log(notes.pop())

// console.log(notes.shift())
// notes.unshift('New note')

// notes.splice(1, 1) // (start index, nb of items)
// notes.splice(1, 1, 'My new item')

// notes[2] = 'New note 3'

// notes.forEach(function (item, index) {
//     console.log(index)
//     console.log(item)
// })

// console.log(notes.length)
// console.log(notes)

const notes = [{
    title: 'Note 1',
    body: 'Description 1'
}, {
    title: 'Note 2',
    body: 'Description 2'
}, {
    title: 'Note 3',
    body: 'Description 3'
}]

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })

//     return notes[index]
// }

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const note = findNote(notes, 'Note 3')
//console.log(note)

// const index = notes.findIndex(function (note, index) {
//     console.log(note)
//     return note.title === 'note 2'
// })

// console.log(index)

const findNotes = function(notes, query) {
    return filteredNotes = notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

// const filteredNotes = notes.filter(function (note, index) {
//     const isTitleMatch = note.title.toLocaleLowerCase().includes('3')
//     const isBodyMatch = note.body.toLocaleLowerCase().includes('ions')
//     return isTitleMatch || isBodyMatch
// })

// console.log(findNotes(notes, '3'))

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return 1
        } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return -1
        } else {
            return 0
        }
    })
}


sortNotes(notes)
console.log(notes)