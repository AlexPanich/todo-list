import React from 'react';

import styles from './Link.less';

export default function Link(props) {
    const { active, children, onClick } = props;

    if (active) {
        return <span className={styles.active}>{children}</span>;
    }

    return <span className={styles.root} onClick={onClick}>{children}</span>;
}
