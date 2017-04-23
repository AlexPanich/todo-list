import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { search } from '../actions/search';

import SearchField from '../components/SearchField';

function mapDispatchToProps(dispatch) {
    return {
        onSearch: (value) => dispatch(search(value))
    }
}

function Search(props) {
    return <SearchField placeholder="Search todo..." onSearch={props.onSearch}/>
}

export default connect(undefined, mapDispatchToProps)(Search);
