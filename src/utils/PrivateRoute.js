import React from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { getToken } from './Common';

const PrivateRoute = ({component: Component, ...rest}) => {
     return(
         <Route
            {...rest}
            render = {props =>{
                return(
                    getToken()? <Component {...props}/>
                    :<Redirect to={{pathname:'/components/login', state :{from: props.location}}}/>
                )
            }}
        />
     )
 }
export default PrivateRoute ;