import axios from 'axios';
import React, { useState } from 'react';


const initFormVal = {
    username: '',
    phoneNumber: '',
    password: '',
}
const initErrors = {
    username: '',
    phoneNumber: '',
    password: '',
}
const SignUp = (props) => {
    const [formVal, setFormVal] = useState(initFormVal);
    const [errors, setErrors] = useState(initErrors);
    const [disabled, setDisabled] = useState(true);


    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormVal({...formVal, [name]: newValue})

        if (formVal.username !== '' &&  formVal.phoneNumber !== '' && formVal.password !== '') {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }

    const onSubmit = evt => {
        evt.preventDefault();

        axios.post("http://localhost:3000/api/auth/register", formVal)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err));
    }

    return (

        <form onSubmit={onSubmit}>
            <div className='header'>
                Sign Up
            </div>
            

            <div className='box'>
                <label>Username
                    <input
                        type='text'
                        name='username'
                        value={formVal.username}
                        onChange={onChange}
                    />
                </label>
                {errors.username}
            </div>

            <div>
                <label >Password
                    <input
                        type='text'
                        name='password'
                        value={formVal.password}
                        onChange={onChange}
                    />
                </label>
                {errors.password}
            </div>

            <div>
                <label >Phone Number
                    <input
                        type='text'
                        name='phoneNumber'
                        value={formVal.phoneNumber}
                        onChange={onChange}
                    />
                </label>
                {errors.phoneNumber}
            </div>

            <button disabled={disabled}>Sign Up </button>

        </form>
    );

}

export default SignUp;