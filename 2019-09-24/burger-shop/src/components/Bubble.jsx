import React from 'react';
import './Bubble.css';
import PropTypes from 'prop-types';

export default function Bubble(props) {
    return (
        <div className="Bubble" style={ { 
            backgroundColor: props.color,
            height: `${props.radius}px`,
            width: `${props.radius}px`
        } }>
            <h1>Rs. {props.price}</h1>
            <p>dsjgkhsk gfhsj</p>
        </div>
    )
}

Bubble.propTypes = {
    price: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
};
