//helper function to generate random ids
function generateId() {
    return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
}

//App Code
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const ADD_GOAL = 'ADD_GOAL';
const REMOVE_GOAL = 'REMOVE_GOAL';

//Action Creators
function addTodoAction(todo) {
    return {
        type: ADD_TODO,
        todo
    }
}

function removeTodoAction(id) {
    return {
        type: REMOVE_TODO,
        id
    }
}

function toggleTodoAction(id) {
    return {
        type: TOGGLE_TODO,
        id
    }
}

function addGoalAction(goal) {
    return {
        type: ADD_GOAL,
        goal
    }
}

function removeGoalAction(id) {
    return {
        type: REMOVE_GOAL,
        id
    }
}


//Reducers(pure functions)
function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return state.concat([action.todo])
        case REMOVE_TODO:
            return state.filter((todo) => todo.id !== action.id)
        case TOGGLE_TODO:
            return state.map((todo) => todo.id !== action.id ? todo :
                Object.assign({}, todo, { complete: !todo.complete }))
        default:
            return state
    }
}

function goals(state = [], action) {
    switch (action.type) {
        case ADD_GOAL:
            return state.concat([action.goal])
        case REMOVE_GOAL:
            return state.filter((todo) => todo.id !== action.id)
        default:
            return state
    }
}



//create store
const store = Redux.createStore(Redux.combineReducers({
    todos: todos,
    goals: goals
}))

console.log('store', store)

//subscribe action listeners
store.subscribe(() => {
    //console.log('The new state is: ', store.getState())

    //add to DOM
    const { goals, todos } = store.getState()

    document.getElementById('goals').innerHTML = ''
    document.getElementById('todos').innerHTML = ''

    goals.forEach(addGoalToDOM)
    todos.forEach(addTodoToDOM)

})


//add todo
function addTodo() {
    const input = document.getElementById('todo')
    const name = input.value
    input.value = ''

    store.dispatch(addTodoAction({
        id: generateId(),
        name,
        complete: false
    }))

}

//add goal
function addGoal() {
    const input = document.getElementById('goal');
    const name = input.value
    input.value = ''

    store.dispatch(addGoalAction({
        id: generateId(),
        name
    }))
}

//handlers
document.getElementById('todoBtn')
    .addEventListener('click', addTodo)

document.getElementById('goalBtn')
    .addEventListener('click', addGoal)

//change DOM
function createRemoveButton(onClick) {
    const removeBtn = document.createElement('button')
    removeBtn.innerHTML = 'X'
    removeBtn.addEventListener('click', onClick)
    return removeBtn
}



function addTodoToDOM(todo) {
    const node = document.createElement('li')
    const text = document.createTextNode(todo.name)

    const removeBtn = createRemoveButton(() => {
        store.dispatch(removeTodoAction(todo.id))
    })

    node.appendChild(text)
    node.appendChild(removeBtn)

    node.style.textDecoration = todo.complete ? 'line-through' : 'none'
    node.addEventListener('click', () => {
        store.dispatch(toggleTodoAction(todo.id))
    })


    document.getElementById('todos')
        .appendChild(node)
}

function addGoalToDOM(goal) {

    const node = document.createElement('li')
    const text = document.createTextNode(goal.name)

    const removeBtn = createRemoveButton(() => {
        store.dispatch(removeGoalAction(goal.id))
    })

    node.appendChild(text)
    node.appendChild(removeBtn)

    document.getElementById('goals')
        .appendChild(node)

}
