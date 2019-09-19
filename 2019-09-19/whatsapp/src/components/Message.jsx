import React from 'react';
import './Message.css';
import PropTypes from 'prop-types';

function Message(props) {
    return (
        <li>
            <img src={props.imgURL} alt={props.name} />
            <div className="body">
                <h3>{props.name}</h3>
                <p>{props.number}</p>
                <p>{props.message}</p>
                <p>{props.time}</p>
            </div>
        </li>
    )
}

Message.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string,
    time: PropTypes.string,
    imgURL: PropTypes.string.isRequired,
    message: PropTypes.string,
}

export default Message;