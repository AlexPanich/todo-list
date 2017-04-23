import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { getFilter } from '../selectors/routing';

import Link from '../components/Link';

function mapStateToProps(state, ownProps) {
    return {
        active: ownProps.filter === getFilter(state)
    };
}

@connect(mapStateToProps, { push })
class FilterLink extends Component {
    handleClick = ev => {
        ev.preventDefault();

        const { push, filter} = this.props;

        push({
            pathname: '/',
            query: { filter }
        });
    }

    render() {
        const { active, children } = this.props;

        return (
            <Link active={active} onClick={this.handleClick}>{children}</Link>
        );
    }
}

export default FilterLink;
