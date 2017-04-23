import React, { Component } from 'react';

import Parser from '../utils/Parser';

import styles from './Todo.less';

import TodoEditor from '../containers/TodoEditor'

export default class Todo extends Component {
    handleRemoveClick = ev => {
        ev.stopPropagation();
        this.props.onRemove();
    };

    handleToggleClick = ev => {
        ev.stopPropagation();
        this.props.onToggle();
    };

    renderTags = tags => {
        return (
            tags.length
            ? <div className={styles.tags}>
                 {tags.map(tag => <span key={tag}>{tag}</span>)}
              </div>
            : null
        );
    };

    render() {
        const { id, text, completed, onEdit, isEditing } = this.props;

        const parser = new Parser(text);

        if (isEditing) return <TodoEditor id={id} text={text} />

        return (
            <div
                className={completed ? styles.completed : styles.root}
                onClick={onEdit}
            >
                <span
                    className={completed ? styles.checkCompleted : styles.check}
                    onClick={this.handleToggleClick}
                />
                {parser.getText()}
                <span
                    className={styles.remove}
                    onClick={this.handleRemoveClick}
                >
                    &times;
                </span>
                {this.renderTags(parser.getTags())}
            </div>
        );
    }
}
