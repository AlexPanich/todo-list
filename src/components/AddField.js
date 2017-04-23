import React, { Component } from 'react';

import styles from './AddField.less';

const ENTER_KEY = 13;

export default class AddField extends Component {
    state = {
        text: ""
    }

    handleTextChange = e => this.setState({
        text: e.target.value
    });

    handleKeyDown = e => {
        if (e.keyCode === ENTER_KEY) {
            this.props.onEnter(this.state.text);
            this.setState({ text: "" });
        }
    }

    render() {
        return (
            <div className={styles.root}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder={this.props.placeholder}
                    value={this.state.text}
                    onChange={this.handleTextChange}
                    onKeyDown={this.handleKeyDown}
                />
            </div>
        );
    }
}
