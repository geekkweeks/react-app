import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Your name is {props.userName}</p>
            <p>Your age is {props.age}</p>
        </div>
    )
}

export default userOutput;