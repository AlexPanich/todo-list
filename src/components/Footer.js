import React from 'react';

import FilterLink from '../containers/FilterLink';

import styles from './Footer.less';

export default function Footer() {
    return (
        <div className={styles.root}>
            <FilterLink filter="All">All</FilterLink>
            <FilterLink filter="New">New</FilterLink>
            <FilterLink filter="Completed">Completed</FilterLink>
        </div>
    );
}
