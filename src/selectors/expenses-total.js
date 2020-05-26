export default (expenses) => {
     /*
    map returns just the amount
    reduce takes each amount and keeps a running sum, to which it adds
    each value, starting at 0
    */
    return expenses
    .map((expense) => expense.amount)
    .reduce((sum, value) => sum + value, 0)
}