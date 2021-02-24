import React from 'react'
import './Employee.css'

const employee = (props) => {
    return(
        <div className="Employee">
            <p onClick={props.click}>Employee Name: {props.employeeName}</p>
        </div>
    )
}


export default employee;