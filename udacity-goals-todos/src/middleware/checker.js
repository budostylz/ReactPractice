import { ADD_TODO } from '../actions/todos'
import { ADD_GOAL } from '../actions/goals'


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

export default checker