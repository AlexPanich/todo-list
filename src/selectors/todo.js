import { createSelector } from 'reselect';
import { getFilter } from './routing';
import { getSearch } from './search';
import Parser from '../utils/Parser';

export const getTodos = state => state.todos;


export const getFilteredTodos = createSelector(
    getTodos,
    getFilter,
    (todos, filter) => {
        switch (filter) {
            case 'All':
              return todos;

            case 'Completed':
              return todos.filter(todo => todo.completed);

            case 'New':
              return todos.filter(todo => !todo.completed);
        }
    }
);

export const getSearchedTodos = createSelector(
    getFilteredTodos,
    getSearch,
    (todos, search) => {
        const parser = new Parser(search);
        return todos.filter(todo => parser.check(todo))
    }
);
