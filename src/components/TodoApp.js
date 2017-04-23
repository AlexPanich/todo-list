import React from 'react';

import TodoList from '../containers/VisibleTodoList';
import Editor from './Editor';
import Footer from './Footer';
import Search from '../containers/Search';
import AddTodo from '../containers/AddTodo';

import styles from './TodoApp.less';

export default function TodoApp() {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <h2 className={styles.header}>To do</h2>
                <div className={styles.app}>
                    <Search />
                    <AddTodo />
                    <TodoList />
                    <Footer />
                </div>
            </div>
        </div>
    );
}
