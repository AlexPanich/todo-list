import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { getFilter, getPathname } from '../selectors/routing';

import Link from '../components/Link';

function mapStateToProps(state, ownProps) {
    return {
        active: ownProps.filter === getFilter(state),
        pathname: getPathname(state)
    };
}

@connect(mapStateToProps, { push })
class FilterLink extends Component {
    handleClick = ev => {
        ev.preventDefault();

        const { push, filter, pathname } = this.props;

        push({
            pathname,
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
