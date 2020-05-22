import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('Should set up removeExpense action object', () => {
     const action = removeExpense({id: '123abc'})
     expect(action).toEqual({
         type: 'REMOVE_EXPENSE',
         id: '123abc'
     })
})

test('Should call editExpense and whatnot', () => {
     const action = editExpense('123abc', {note: 'new note'})
     expect(action).toEqual({
         id: '123abc',
         type: 'EDIT_EXPENSE',
         updates: {
             note: 'new note'
         }
     })
})

test('Should setup addExpense action object with provided values', () => {
     const expenseData = {
         description: "rent",
         amount: 109500,
         createdAt: 1000,
         note: 'This was a test. You failed.'
     }
     const action = addExpense(expenseData)
     expect(action).toEqual({
         type: 'ADD_EXPENSE',
         expense: {
             ...expenseData,
             id: expect.any(String)
         }
     })
})

test('Should set up addExpense action object with default values', () => {
     const action = addExpense()
     expect(action).toEqual({
         type: 'ADD_EXPENSE',
         expense: {
             description: '',
             amount: 0,
             createdAt: 0,
             note: '',
             id: expect.any(String)
         }
     })
})