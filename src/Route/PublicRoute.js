import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from '../Utility';

function PublicRoute({ component: Component, restricted = false, ...rest }) {
    return (
        <Route {...rest} render={props => (
            isLogin() && restricted ?
                <Redirect to={"/"} />
                :
                <Component {...props} />
        )
        }
        />
        
    );
}

export default PublicRoute;