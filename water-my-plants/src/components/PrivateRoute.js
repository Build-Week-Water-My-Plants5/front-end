import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, setToken, ...rest}) => {

    return (
        <Route {...rest} render={props => (
            localStorage.getItem('token') ? <Component setToken={setToken} {...props} /> : <Redirect to="/signup" />
        )} />
    );
};

export default PrivateRoute;