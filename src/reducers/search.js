import { SEARCH } from '../actions/search';

export default function search(state = '', action) {
    switch (action.type) {
        case SEARCH: {
            return action.value;
        }

        default: {
            return state;
        }
    }
};
