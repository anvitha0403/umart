import React, { useEffect } from 'react'
import { useSelector,useDispatch } from "react-redux"
import {removeNotification} from "./notificationSlice"
 const Notification = (props) => {
    const dispatch=useDispatch();
    const { error, success, message } = useSelector(state => state.notification);
    useEffect(() => {
        if (error) {
            dispatch(removeNotification());
            alert("error");
            
        }
    },[error,success,dispatch])
  return (
      <div>{props.children}</div>
  )
}
export default Notification
