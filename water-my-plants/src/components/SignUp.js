import axios from 'axios';
import { useHistory } from 'react-router';
import React, { useState } from 'react';
import styled from "styled-components";
import '../SignUp.css'

document.body.style.backgroundColor = "#b2c2c0";

const StyledButton = styled.button`
  background-color: #D2DECE;
  font-size: 20px;
  color: black;
  border-radius: 5px;
  width: 25%;
  margin-bottom: 15px;
`;

const StyledH1 = styled.h1`
  font-size: 32px;
`;

const StyledLabel = styled.label`
    font-size: 20px;
    font-weight: bold;
    
`;

const StyledInput = styled.input`
  width: 40%;
  margin: auto;
  display: block;
`;




const initFormVal = {
    username: '',
    phoneNumber: '',
    password: ''
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
    const { push } = useHistory();

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

        axios.post("https://water-the-plants-api.herokuapp.com/api/auth/register", formVal)
        .then(res => {
            push('/login')
        })
        .catch(err => console.log(err));
    }

    return (
        <div className="container">
            <div className='header'>
                <StyledH1>Sign Up</StyledH1>
            </div>
            

            <div className="border">
            <form onSubmit={onSubmit}>
            <div className="box">
                <StyledLabel>Username
                    <StyledInput
                        type='text'
                        name='username'
                        value={formVal.username}
                        onChange={onChange}
                    />
                </StyledLabel>
                {errors.username}
            </div>

            <div>
                <StyledLabel >Password
                    <StyledInput
                        type='text'
                        name='password'
                        value={formVal.password}
                        onChange={onChange}
                    />
                </StyledLabel>
                {errors.password}
            </div>

            <div>
                <StyledLabel >Phone Number
                    <StyledInput
                        type='text'
                        name='phoneNumber'
                        value={formVal.phoneNumber}
                        onChange={onChange}
                    />
                </StyledLabel>
                {errors.phoneNumber}
            </div>

            <StyledButton disabled={disabled}>Sign Up </StyledButton>


        </form>
        </div>
        </div>
    );

}

export default SignUp;