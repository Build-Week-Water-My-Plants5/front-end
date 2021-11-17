import React from 'react';

/* const intialFormvalues = {
    username:'',
    password:'',
};
const intialFormErrors = {
    username:'',
    password:'',
};
const initialDisabled = true;

const Login = (props) => {
     const { change, submit, disabled, errors } = props;
     const [newValue, setNewValue] = useState(intialFormValues);
     const [disabled, setDisabled] = useState(initialDisabled);
    const [formErrors, setFormErrors] = useState(initialFormErrors);

    const onChange = evt => {
        setNewValue({ ...formNewValue, [evt.target.name]: evt.target.value })
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
}
 */


const Login = (props) => {

    const { change, submit, disabled, errors } = props;
    const { username, password } = props.value;

    const onChange = evt => {
        const { name, value , type } = evt.target
        const newValue = (values => ({...values, [name]: value}))
    }
    // dont think newValue is correct but wasnt sure what to put in place.

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <form onSubmit={onSubmit}>
            <div>

                <h1>Login</h1>

                <label>Username
                    <input
                        type='text'
                        name='username'
                        value={username}
                        onChange={onChange}
                    />
                </label>
                {errors.username}

                <label >Password
                    <input
                        type='text'
                        name='password'
                        value={password}
                        onChange={onChange}
                    />
                </label>
                {errors.password}

                <button disabled={disabled}>Login</button>
            </div>
        </form>
    );
}





export default Login;