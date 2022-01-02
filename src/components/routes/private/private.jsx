import React, {useContext} from 'react';
import {Route, useNavigate} from 'react-router-dom';
import StoreContext from '../../context/Context';

export default function RoutesPrivate ({component: Component, ...rest}){
    const {token} = useContext(StoreContext);
    let navigate = useNavigate();

    return (
    <Route {...rest} render={() => token
        ? <Component {...rest}/>
        : navigate("/login")
        }/>
        
    )
    
}