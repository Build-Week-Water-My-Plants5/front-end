import React from 'react';

const Login = (props) => {

    const { change, submit, disabled, errors } = props;
    const { username, password } = props.value;

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const newValue = type === 'checkbox' ? checked : value;
        change(name, newValue)
    }
    // dont think newValue is correct but wasnt sure what to put in place.

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <form onSubmit={onSubmit}>

            <div className='header'>
                Login
            </div>
            <div className='box'>
                <label>Username
                    <input
                        type='text'
                        name='username'
                        value={username}
                        onChange={onChange}
                    />
                </label>
                {errors.username}
            </div>


            <div className='input-p'>
                <label >Password
                    <input
                        type='text'
                        name='password'
                        value={password}
                        onChange={onChange}
                    />
                </label>
                {errors.password}
            </div>
            <button disabled={disabled}>Login</button>

        </form>
    );
}





export default Login;