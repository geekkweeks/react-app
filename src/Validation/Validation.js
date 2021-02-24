import React from 'react'

const validation = (props) => {
    let validationMessage = "Text good enugh";

    if(props.inputLength <= 5){
        validationMessage = "Text too short"
    }
    return (
        <div>
            {validationMessage}
        </div>
    )
}

export default validation;