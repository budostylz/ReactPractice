import API from 'goals-todos-api'

//action creator constant types
export const RECEIVE_DATA = 'RECEIVE_DATA'

//action creator
function receiveData(todos, goals) {
    return {
        type: RECEIVE_DATA,
        todos,
        goals
    }
}

//async action creator
export function handleInitialData() {
    return (dispatch) => {
        //fetch/load todos and goals from api
        Promise.all([
            API.fetchTodos(),
            API.fetchGoals()
        ]).then(([todos, goals]) => {
            dispatch(receiveData(todos, goals))
        })
    }
}