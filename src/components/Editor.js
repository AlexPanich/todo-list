import React from 'react';

import styles from './Editor.less';

export default function Editor(props) {
    return (
        <div className={styles.root}>
            <div
                className={styles.checkAll}
                onClick={this.handleClickCheckAll}
            />
            <AddTodo />
        </div>
    );
}
