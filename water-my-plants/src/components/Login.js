import React, { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';

const initialFormValues = {
    username:'',
    password:'',
};
const initialFormErrors = {
    username:'',
    password:'',
};
const initialDisabled = true;


const Login = (props) => {
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
        evt.preventDefault()
        
        axios.post('https://water-the-plants-api.herokuapp.com/api/auth/login', formVal)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            push('/plants');
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <div>

                <h1>Login</h1>

                <label>Username
                    <input
                        type='text'
                        name='username'
                        value={formVal.username}
                        onChange={onChange}
                    />
                </label>
                {formErrors.username}

                <label >Password
                    <input
                        type='text'
                        name='password'
                        value={formVal.password}
                        onChange={onChange}
                    />
                </label>
                {formErrors.password}

                <button disabled={disabled}>Login</button>
            </div>
        </form>
    );
}





export default Login;