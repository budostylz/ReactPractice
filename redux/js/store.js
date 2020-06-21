function todos(state = [], action) {
    if (action.type === 'ADD_TODO') {
        return state.concat([action.todo])
    }

    return state

}


function createStore() {
    /*
        The store have four parts
        1. The store
        2. Get the state
        3. Listen to changes on the state
        4. Update the state.
    
    */

    let state
    let listeners = []

    const getState = () => state

    const subscribe = (listener) => {
        listeners.push(listener)
        return () => {
            listeners: listeners.filter((l) => l !== listener)
        }
    }


    return {
        getState,
        subscribe
    }

}

const store = createStore()
console.log('store', store)

store.subscribe(() => {
    console.log('The new state is: ', store.getState())
})

const unsubscribe = store.subscribe(() => {
    console.log('The store changed.')
})

unsubscribe();

