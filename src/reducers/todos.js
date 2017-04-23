import { getTodosFromStorage } from '../utils/Storage';
import {
    ADD_TODO,
    TOGGLE_TODO,
    CHECK_ALL_TODO,
    EDIT_TODO,
    CHANGE_TODO,
    REMOVE_TODO,
} from '../actions/todo';

function todo(state, action) {
    switch (action.type) {
        case ADD_TODO: {
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        }

        case TOGGLE_TODO: {
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                completed: !state.completed
            };
        }

        case CHECK_ALL_TODO: {
            return {
                ...state,
                completed: action.clear ? false : true
            }
        }

        case EDIT_TODO: {
            return {
                ...state,
                isEditing: true
            }
        }

        case CHANGE_TODO: {
            return {
                ...state,
                isEditing: false,
                text: action.text
            }
        }

        default: {
            return state;
        }
    }
};

const defaultState =  getTodosFromStorage().map(todo => ({...todo, isEditing: false}));

export default function todos(state = defaultState, action) {
    switch (action.type) {
        case ADD_TODO: {
            return [
                ...state,
                todo(undefined, action)
            ];
        }

        case TOGGLE_TODO: {
            return state.map(item => todo(item, action));
        }

        case REMOVE_TODO: {
            return state.filter(item => item.id !== action.id);
        }

        case CHECK_ALL_TODO: {
            if (state.every(item => item.completed)) {
                action.clear = true;
            }
            return state.map(item => todo(item, action));
        }

        case CHANGE_TODO: {
            return state.map(item => item.id !== action.id ? item : todo(item, action));
        }

        case EDIT_TODO: {
            return state.map(item => item.id !== action.id ? item : todo(item, action));
        }

        default: {
            return state;
        }
    }
};
