import React from "react"
import { Route, Redirect } from 'react-router-dom'


const PrivateRoute = ({
    isLogged,
    component: Comp,
    ...rest
}) => {
    
    return <Route {...rest} component={(props) => (
        isLogged ?
            <Comp {...props} />
            :
            <Redirect to="/login" />
    )} />
}
export default PrivateRoute