// const age = 27
// let message

// message = age >= 18 ? 'old' : 'young'

// if ( age >= 18) {
//     message = 'old'
// } else {
//     message = 'young'
// }

// console.log(message)

const age = 27
const showPage = () => {
    return 'Showing page'
}

const showErrorPage = () => {
    return 'Showing error page'
}

let msg = age >= 21 ? showPage() : showErrorPage()
console.log(msg)

const team = ['alex', 'andrei']

msg = team.length <= 4 ? 'team size: 3' : 'to many people'
console.log(msg)