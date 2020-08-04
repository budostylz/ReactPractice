/*
 
React often leverages Redux for more predictable state management via the react-redux bindings. 
These bindings give us an API that simplifies the most common interactions between React and Redux.

Provider makes it possible for Redux to pass data from the store to any React components that need it. 
It uses React’s context feature to make this work.

connect() connects a React component to the Redux store. 
The mapStateToProps() function allows us to specify which state from the store you want passed to your React component, 
while the mapDispatchToProps() function allows us to bind dispatch to action creators before they ever hit the component.
 
Source: React Course at Udacity

*/


function generateId() {
    return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
}

// App Code

//action creator constant types
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const ADD_GOAL = 'ADD_GOAL'
const REMOVE_GOAL = 'REMOVE_GOAL'
const RECEIVE_DATA = 'RECEIVE_DATA'


//action creators
function addTodoAction(todo) {
    return {
        type: ADD_TODO,
        todo,
    }
}

function removeTodoAction(id) {
    return {
        type: REMOVE_TODO,
        id,
    }
}

function toggleTodoAction(id) {
    return {
        type: TOGGLE_TODO,
        id,
    }
}

function addGoalAction(goal) {
    return {
        type: ADD_GOAL,
        goal,
    }
}

function removeGoalAction(id) {
    return {
        type: REMOVE_GOAL,
        id,
    }
}

function receiveDataAction(todos, goals) {
    return {
        type: RECEIVE_DATA,
        todos,
        goals
    }
}

function handleAddTodo(name, cb) {
    return (dispatch) => {
        return API.saveTodo(name)
            .then((todo) => {
                dispatch(addTodoAction(todo))
                cb()
            })
            .catch(() => {
                alert('There was an error. Try again.')
            })


    }
}

function handleDeleteTodo(todo) {

    return (dispatch) => {

        dispatch(removeTodoAction(todo.id))
        return API.deleteTodo(todo.id)
            //optimistic update
            .catch(() => {
                dispatch(addTodoAction(todo))
                alert('An error occurred. Try again.')
            })
    }
}

function handleToggle(id) {
    return (dispatch) => {
        dispatch(toggleTodoAction(id))

        //optimistic update
        return API.saveTodoToggle(id)
            .catch(() => {
                dispatch(toggleTodoAction(id))
                alert('An error occurred, Try again.')
            })
    }
}

function handleAddGoal(name, cb) {
    return (dispatch) => {
        return API.saveGoal(name)
            .then((goal) => {
                dispatch(addGoalAction(goal))
                cb()
            })
            .catch(() => alert('There was an error. Try again.'))
    }
}

function handleDeleteGoal(goal) {
    return (dispatch) => {
        dispatch(removeGoalAction(goal.id))

        return API.deleteGoal(goal.id)
            //optimistic update
            .catch(() => {
                dispatch(addGoalAction(goal))
                alert('An error occurred. Try again.')
            })
    }
}

function handleInitialData() {
    return (dispatch) => {
        //fetch/load todos and goals from api
        Promise.all([
            API.fetchTodos(),
            API.fetchGoals()
        ]).then(([todos, goals]) => {
            dispatch(receiveDataAction(todos, goals))
        })
    }
}


//reducers - pure functions
function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return state.concat([action.todo])
        case REMOVE_TODO:
            return state.filter((todo) => todo.id !== action.id)
        case TOGGLE_TODO:
            return state.map((todo) => todo.id !== action.id ? todo :
                Object.assign({}, todo, {
                    complete: !todo.complete
                }))
        case RECEIVE_DATA:
            return action.todos
        default:
            return state
    }
}

function goals(state = [], action) {
    switch (action.type) {
        case ADD_GOAL:
            return state.concat([action.goal])
        case REMOVE_GOAL:
            return state.filter((goal) => goal.id !== action.id)
        case RECEIVE_DATA:
            return action.goals
        default:
            return state
    }
}

function loading(state = true, action) {
    switch (action.type) {
        case RECEIVE_DATA:
            return false
        default:
            return state
    }
}

//Middleware
const checker = (store) => (next) => (action) => {

    if (action.type === ADD_TODO) {
        console.log('action', action.todo.name)
        if (action.todo.name.length === 0)
            return alert('Don\'t forget to name your todo item!');
    }

    if (action.type === ADD_GOAL) {
        if (action.goal.name.length === 0)
            return alert('Don\'t forget to name your goal item!');
    }

    return next(action);
}

const logger = (store) => (next) => (action) => {
    console.group(action.type)
    console.log('The action: ', action)
    const result = next(action)
    console.log('The new state: ', store.getState())
    console.groupEnd()
    return result
}

//custom thunk middleware
/*const thunk = (store) => (next) => (action) => {//add APIs to middleware thunk for seperation of concerns
    if (typeof action === 'function') {
        return action(store.dispatch)
    }

    return next(action)
}*/

const store = Redux.createStore(Redux.combineReducers({
    todos,
    goals,
    loading
}), Redux.applyMiddleware(/*thunk*/ReduxThunk.default, checker, logger))



