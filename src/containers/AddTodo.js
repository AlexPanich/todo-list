import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions/todo';

import AddField from '../components/AddField';


function AddTodo(props) {
    return <AddField placeholder="What needs to be done?" onEnter={props.addTodo} />
}

export default connect(undefined, { addTodo })(AddTodo)
