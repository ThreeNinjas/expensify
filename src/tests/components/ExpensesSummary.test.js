import React from 'react'
import {shallow} from 'enzyme'
import expenses from '../fixtures/expenses'
import {ExpensesSummary} from '../../components/ExpensesSummary'

test('should correctly render ExpenesSummary with one expense', () => {
     const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>)
     expect(wrapper).toMatchSnapshot()
})

test('should correctly render ExpenesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={235234313234313}/>)
    expect(wrapper).toMatchSnapshot()
})