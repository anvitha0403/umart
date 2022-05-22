import React from 'react'
import {useSelector} from 'react-redux'
import { Navigate } from 'react-router-dom'

 const AuthGuard = (props) => {
    const user = useSelector(state => state.user)
    

    return (
      <>
        {user && user.data.token ? (
          <>{props.children}</>
        ) : (
          <Navigate to="/signin" />
        )}
      </>
    );
}
export default AuthGuard;
