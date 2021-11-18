import React, { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import styled from "styled-components";

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

const initialFormValues = {
    username:'',
    password:'',
};
const initialFormErrors = {
    username:'',
    password:'',
};
const initialDisabled = true;


const Login = ({ setToken }) => {
    const [formVal, setFormVal] = useState(initialFormValues);
    const [disabled, setDisabled] = useState(initialDisabled);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const { push } = useHistory();


    const onChange = evt => {
        if (formVal.username !== '' && formVal.password !== '') {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
        setFormVal({ ...formVal, [evt.target.name]: evt.target.value })
    }

    const onSubmit = evt => {
        evt.preventDefault();
        
        axios.post('https://water-the-plants-api.herokuapp.com/api/auth/login', formVal)
        .then(res => {
            console.log(res);
            localStorage.setItem('uid', res.data.user_id.toString());
            localStorage.setItem('token', res.data.token);
            setToken(localStorage.getItem('token'));
            push('/plants');
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div className="container">

                <StyledH1>Login</StyledH1>

                <div className="border">
                <form onSubmit={onSubmit}>
                <StyledLabel>Username
                    <StyledInput
                        type='text'
                        name='username'
                        value={formVal.username}
                        onChange={onChange}
                    />
                </StyledLabel>
                {formErrors.username}

                <StyledLabel >Password
                    <StyledInput
                        type='text'
                        name='password'
                        value={formVal.password}
                        onChange={onChange}
                    />
                </StyledLabel>
                {formErrors.password}

                <StyledButton disabled={disabled}>Login</StyledButton>
            
        </form>
        </div>
        </div>
    );
}





export default Login;