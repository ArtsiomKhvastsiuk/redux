import React from 'react';
import Link from './Link';
import {connect} from 'react-redux';

const mapStateToProps = (state, props) => {
    return {
        active: state.visibilityFilter === props.filter
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onClick: () => {
            dispatch({
                type: 'SET_VISIBILITY_FILTER',
                filter: props.filter
            })
        }
    }
};

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;