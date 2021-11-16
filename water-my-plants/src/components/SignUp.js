

const SignUp = () => {
    const { change, submit, disabled, errors } = props;
    const { username, email, password, number } = props.value;

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const newValue = type === 'checkbox' ? checked : value;
        change(name, newValue)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()


    }

    return (

        <form onSubmit={onSubmit}>
            <div className='header'>
                Sing SignUp
            </div>
        
          {errors.password}
          {errors.email}
          {errors.number}
            
            
            <div className='box'>
                <label>Username
                    <input
                        type='text'
                        name='username'
                        value={username}
                        onChange={onChange}
                    />
                </label>
            </div>

            <div>
                <label>email
                    <input
                        type='text'
                        name='email'
                        value={email}
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
                        value={password}
                        onChange={onChange}
                    />
                </label>
            </div>

            <div>
                <label >Phone Number
                    <input
                        type='text'
                        name='number'
                        value={number}
                        onChange={onChange}
                    />
                </label>
            </div>

            <div>
                <label> Terms of Service
                    <input
                        type='checkbox'
                        name='tos'
                        checked={tos}
                        onChange={onChange}
                    />
                </label>
            </div>
            <button disabled={disabled}>Sign Up </button>

        </form>
    );

}

export default SignUp;