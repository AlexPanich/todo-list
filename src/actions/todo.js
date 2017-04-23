export const ADD_TODO = 'ADD_TODO';

export const addTodo = text => {
    return {
        type: ADD_TODO,
        id: Date.now(),
        text
    };
};

export const TOGGLE_TODO = 'TOGGLE_TODO'

export const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        id
    };
};

export const CHECK_ALL_TODO = 'CHECK_ALL_TODO';

export const checkAll = () => {
    return {
        type: CHECK_ALL_TODO
    };
};

export const REMOVE_TODO = 'REMOVE_TODO';

export const removeTodo = id => {
    return {
        type: REMOVE_TODO,
        id
    };
};

export const EDIT_TODO = 'EDIT_TODO'

export const editTodo = id => {
    return {
        type: EDIT_TODO,
        id
    };
};

export const CHANGE_TODO = 'CHANGE_TODO';

export const changeTodo = (id, text) => {
    return {
        type: CHANGE_TODO,
        id,
        text
    };
};
