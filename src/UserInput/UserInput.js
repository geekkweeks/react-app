import React from 'react';


const userInput = (props) => {
    const inputStyle = {
        width: '40%',
        cursor: 'pointer'
    }

    return(
        <div>
            <input style={inputStyle} type="text" onChange={props.changed} value={props.currentUserName} />
        </div>
    )
}

export default userInput;