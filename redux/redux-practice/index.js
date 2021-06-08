
//library code
function createStore(reducer) {
    //store
    //1. The state
    //2. Get the state
    //3. Listen to changes on the state
    //4. Update the state

    let state //1.
    let listeners = []

    const getState = () => state //2.

    const subscribe = (listener) => { //3.
        listeners.push(listener)
        return () => {
            listeners = listeners.filter((l) => l !== listener)
        }
    }

    const dispatch = (action) => { //4.
        state = reducer(state, action)
        listeners.forEach((listener) => listener())
    }

    return {
        getState,
        subscribe,
        dispatch
    }


}


//app code
function todos(state = [], action) { //pure function

    switch (action.type) {
        case: 'ADD_TODO'
    }
    if (action.type === 'ADD_TODO') {
        return state.concat([action.todo])
    } else if (action.type === 'REMOVE_TODO') {
        return state.filter((todo) => todo.id !== action.id)
    } else if (action.type === 'TOGGLE_TODO') {
        return state.map((todo) => todo.id !== action.id
            ? todo
            : Object.assign({}, todo, { complete: !todo.complete }))
    } else {
        return state
    }


}

const store = createStore(todos)

store.subscribe(() => {
    console.log('The new state is: ', store.getState());
})

store.dispatch({
    type: 'ADD_TODO',
    todo: {
        id: 0,
        name: 'Learn Redux',
        complete: false
    }
})


