import React from 'react';

import Todo from './Todo';

import styles from './TodoList.less';

export default function TodoList(props) {
    return (
        <div className={styles.root}>
            <div
                className={styles.checkAll}
                onClick={props.onCheckAll}
            />
            {
                props.todos.map(todo =>
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        isEditing={todo.isEditing}
                        onToggle={() => props.onToggleTodo(todo.id)}
                        onRemove={() => props.onRemoveTodo(todo.id)}
                        onEdit={() => props.onEditTodo(todo.id)}
                    />
                )
            }
        </div>
    );
}
