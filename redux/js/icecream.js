function appReducer(state, action) {

    if (action.type === 'DELETE_FLAVOR') {
        return state.filter(f => f.flavor !== action.flavor)
    }
    return state
}


let state = [{ flavor: 'Vanilla', count: 50 }, { flavor: 'Chocolate', count: 100 }];
let action = { type: 'DELETE_FLAVOR', flavor: 'Vanilla' };


console.log(appReducer(state, action));