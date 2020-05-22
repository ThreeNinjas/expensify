import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('Should set default state', () => {
     const state = expensesReducer(undefined, {type: '@INIT'})
     expect(state).toEqual([])
})

test('Should remove expense by id', () => {
     const action = {
         type: 'REMOVE_EXPENSE',
         id: expenses[1].id
     }
     const state = expensesReducer(expenses, action)
     expect(state).toEqual([expenses[0], expenses[2]])
})

test('Should not remove expense if id is not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add an expense', () => {
     const action = {
         type: 'ADD_EXPENSE',
         expense: {
            id: 5,
            description: 'Shoes',
            note: '',
            amount: 4950,
            createdAt: 10
         }
     }
     const state = expensesReducer(expenses, action)
     expect(state).toEqual([...expenses, action.expense])
})

test('should edit an expense', () => {
    const description = 'Mortgage'
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            description
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[1].description).toBe(description)
})

test('should not edit an expense if expense not found', () => {
    const description = 'Bugs'
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})