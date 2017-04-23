import React, { Component } from 'react';

import styles from './SearchField.less';

export default class SearchField extends Component {
    state = {
        text: ""
    }

    handleTextChange = e => {
        this.setState({
            text: e.target.value
        }, () => this.props.onSearch(this.state.text));
    };

    render() {
        return (
            <div className={styles.root}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder={this.props.placeholder}
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
            </div>
        );
    }

}
