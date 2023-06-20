import React, { useState } from "react"
import "./Employee.css"

const Employee = (props) => {
    const {name, gender, email, phone, picture} = props.worker

    function getFullName(name){
        return `${name.title} ${name.first} ${name.last}`
    }

    const [mobile, setMobile] = useState("")

    function displayNumber(){
        setMobile(phone)
    }

    return (
        <div className="employee">
            <div>
                <img src={picture.large} alt="worker" />
            </div>
            <div>
                <p><strong>Name: {getFullName(name)}</strong></p>
                <p>Gender: {gender}</p>
                <p>Email: {email}</p>
                <p>Phone: {mobile}</p>
                <button onClick={displayNumber}>See phone number</button> &nbsp;
                <button onClick={() => {props.addWorker(props.worker)}}>Add me</button>
            </div>
        </div>
    )
}

export default Employee