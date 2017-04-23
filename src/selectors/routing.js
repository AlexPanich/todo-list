import { createSelector } from 'reselect';

export const getLocation = state => state.routing.locationBeforeTransitions;

export const getQuery = createSelector(
    getLocation,
    location => location.query
);

export const getPathname = createSelector(
    getLocation,
    location => location.pathname
)

export const getFilter = createSelector(
    getQuery,
    query => query && query.filter || 'All'
);
