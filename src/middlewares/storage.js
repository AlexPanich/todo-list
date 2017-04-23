import { setTodosToStorage } from '../utils/Storage';

export default store => next => action => {
    next(action);

    if (action.type.includes('_TODO')) {
        setTodosToStorage(store.getState().todos.map(({id, text, completed}) => ({id, text, completed})));
    }
}
