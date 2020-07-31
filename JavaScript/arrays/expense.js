const account = {
    name: 'Alex',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let sum = 0

        this.expenses.forEach(function (expense) {
            sum = sum + expense.amount
        })

        return `${this.name} has $${this.sum} expenses.`
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getBalance: function () {
        let sum = 0

        this.income.forEach(function (income) {
            sum = sum + income.amount
        })

        this.expenses.forEach(function (expense) {
            sum = sum - expense.amount
        })

        return `${this.name} has a balance of $${this.sum}.`
    }
}

account.addExpense('rent', 950)
account.addExpense('coffee', 5)

account.addIncome('pfa', 2000)

console.log(account)
console.log(account.getAccountSummary())
console.log(account.getBalance())