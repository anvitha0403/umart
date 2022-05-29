import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'
import { Navigate } from 'react-router-dom'

 function AuthGuard (Component) {
   const Check= (props) => {
     const user = useSelector((state) => state.user);
     useEffect(() => {
       console.log("i was run");
     },[user])
     console.log(`auth ${user}`)
     return (
       <>
         {user && user.data.email ? (
           <>
             <Component user={user} {...props}/>
           </>
         ) : (
           <Navigate to="/signin" />
         )}
       </>
     );
      
   }
   return Check;
    

    
}
export default AuthGuard;
