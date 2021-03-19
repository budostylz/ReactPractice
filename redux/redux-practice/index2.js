//helper
function generateId() {
    return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
}


//app code - entry
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const ADD_GOAL = 'ADD_GOAL'
const REMOVE_GOAL = 'REMOVE_GOAL'


//action creators
function addToDoAction(todo) {
    return {
        type: ADD_TODO,
        todo,
    }
}

function removeToDoAction(id) {
    return {
        type: REMOVE_TODO,
        id,
    }
}

function toggleToDoAction(id) {
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


//reducers - pure functions
function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return state.concat([action.todo]);
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
            return state.filter((goal) => goal.id !== action.id)
        default:
            return state
    }
}

//reducer composition



const store = Redux.createStore(Redux.combineReducers({
    todos,
    goals
}))


store.subscribe(() => {
    const { goals, todos } = store.getState()

    //reset dom
    document.getElementById('goals').innerHTML = ''
    document.getElementById('todos').innerHTML = ''

    //draw dom
    goals.forEach(addGoalToDOM)
    todos.forEach(addTodoToDOM)
})


//dom code
function addToDo() {
    const input = document.getElementById('todo');
    const name = input.value
    input.value = ''

    store.dispatch(addToDoAction({
        name,
        complete: false,
        id: generateId()
    }))
}

function addGoal() {
    const input = document.getElementById('goal');
    const name = input.value
    input.value = ''

    store.dispatch(addGoalAction({
        name,
        id: generateId()
    }))

}

//event handlers
document.getElementById('todoBtn')
    .addEventListener('click', addToDo);

document.getElementById('goalBtn')
    .addEventListener('click', addGoal);

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
        store.dispatch(removeToDoAction(todo.id))
    })

    node.appendChild(text)
    node.appendChild(removeBtn)
    node.style.textDecoration = todo.complete ? 'line-through' : 'none'
    node.addEventListener('click', () => {
        store.dispatch(toggleToDoAction(todo.id));
    })


    document.getElementById('todos')
        .appendChild(node)

}

function addGoalToDOM(goal) {
    const node = document.createElement('li');
    const text = document.createTextNode(goal.name);
    const removeBtn = createRemoveButton(() => {
        store.dispatch(removeGoalAction(goal.id))
    })

    node.appendChild(text)
    node.appendChild(removeBtn)
    node.style.textDecoration = goal.complete ? 'line-through' : 'none'



    document.getElementById('goals')
        .append(node);

}


/*

//todos
store.dispatch(addToDoAction({
    id: 0,
    name: 'Walk the dog',
    complete: false,
}))

store.dispatch(addToDoAction({
    id: 1,
    name: 'Wash the car',
    complete: false,
}))


store.dispatch(addToDoAction({
    id: 2,
    name: 'Go to the Gym',
    complete: false,
}))

store.dispatch(removeToDoAction(1))
store.dispatch(toggleToDoAction(0))


//goals
store.dispatch(addGoalAction({
    id: 0,
    name: 'Learn Redux'
}))

store.dispatch(addGoalAction({
    id: 1,
    name: 'Lose 20 pounds'
}))

store.dispatch(removeGoalAction(1))

*/


