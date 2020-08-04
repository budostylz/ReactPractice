import API from 'goals-todos-api'

//action creator constant types
export const ADD_GOAL = 'ADD_GOAL'
export const REMOVE_GOAL = 'REMOVE_GOAL'

//action creators
function addGoal(goal) {
    return {
        type: ADD_GOAL,
        goal,
    }
}

function removeGoal(id) {
    return {
        type: REMOVE_GOAL,
        id,
    }
}

//async action creators
export function handleAddGoal(name, cb) {
    return (dispatch) => {
        return API.saveGoal(name)
            .then((goal) => {
                dispatch(addGoal(goal))
                cb()
            })
            .catch(() => alert('There was an error. Try again.'))
    }
}

export function handleDeleteGoal(goal) {
    return (dispatch) => {
        dispatch(removeGoal(goal.id))

        return API.deleteGoal(goal.id)
            //optimistic update
            .catch(() => {
                dispatch(addGoal(goal))
                alert('An error occurred. Try again.')
            })
    }
}