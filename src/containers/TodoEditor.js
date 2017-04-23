import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeTodo } from '../actions/todo'

import EditField from '../components/EditField';

function mapDisplatchToProps(dispatch, ownProps) {
    return {
        onChangeTodo: (id, value) => dispatch(changeTodo(id, value))
    };
}


function TodoEditor(props) {
    const { id, text, onChangeTodo } = props;

    return <EditField id={id} text={text} onSave={onChangeTodo}/>;
}

export default connect(undefined, mapDisplatchToProps)(TodoEditor)
