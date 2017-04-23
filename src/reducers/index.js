import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import todos from './todos';
import search from './search';

export default combineReducers({
    todos,
    search,
    routing: routerReducer
});
