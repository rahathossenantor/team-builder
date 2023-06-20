import React from 'react'
import './Employee.css'

const Employee = (props) => {
    const {name, gender, email, phone, picture} = props.worker

    return (
        <div className='employee'>
            <div>
                <img src={picture.large} alt="worker" />
            </div>
            <div>
                <p><strong>Name: {`${name.title} ${name.first} ${name.last}`}</strong></p>
                <p>Gender: {gender}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <button>Add me</button>
            </div>
        </div>
    )
}

export default Employee