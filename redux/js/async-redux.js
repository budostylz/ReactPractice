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



const store = Redux.createStore(Redux.combineReducers({
    todos,
    goals,
    loading
}), Redux.applyMiddleware(checker))



