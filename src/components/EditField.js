import React, { Component } from 'react';

import styles from './EditField.less';

const ENTER_KEY = 13;

export default class EditField extends Component {
    state = {
        text: this.props.text,
        id: this.props.id
    };

    componentDidMount() {
        this.input.focus();
    }

    handleTextChange = e =>  this.setState({
        text: e.target.value
    });


    handleKeyDown = e => {
        if (e.keyCode === ENTER_KEY) {
            this.props.onSave(this.state.id, this.state.text);
        }
    }

    handleBlur = () => this.props.onSave(this.state.id, this.state.text);

    handleClickCheckAll = () => this.props.onClickCheckAll();

    render() {
        return (
            <div className={styles.root}>
                <input
                    className={styles.input}
                    type="text"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                    onKeyDown={this.handleKeyDown}
                    onBlur={this.handleBlur}
                    ref={c => this.input = c}
                />
            </div>
        );
    }
}
