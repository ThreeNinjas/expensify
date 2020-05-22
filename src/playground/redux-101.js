import { createStore } from 'redux'

const incrementCount = ({incrementBy = 1 }= {}) => ({//destructuring with defaults!
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({decrementBy = 1 }= {}) => ({
     type: 'DECREMENT',
     decrementBy
})

const setCount = ({count}= {}) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET'
})

//The Reducer Rules
//1. Reducers are pure functions - output determined by input - standalone
//2. Never directly change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state
    }
}

const store = createStore(countReducer)

store.subscribe(() => {
    console.log(store.getState())
})


/* store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
}) */

store.dispatch(incrementCount({incrementBy: 5}))

//unsubscribe()

store.dispatch(incrementCount())

store.dispatch(decrementCount({decrementBy: 10}))

store.dispatch(decrementCount())

store.dispatch(resetCount())

store.dispatch(setCount({count:12}))

store.dispatch(resetCount())