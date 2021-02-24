import React from 'react'
// import './Person.css'
import styled from 'styled-components'


//the return is react component by library styled-component
const StylePersonDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;  

    @media (min-width: 500px){
        width: 450px;
    }
`;

const person = (props) => {
    const personStyle = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }
    return (
        // <div className="Person" style={personStyle}>
        <StylePersonDiv>
            <p onClick={props.click}>My name is {props.name} and im {props.age} years old</p>
            <p>{props.children}</p>
            <input type="tet" onChangeCapture={props.changed} value={props.name} />
        </StylePersonDiv>
    )
};

export default person;