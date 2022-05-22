import React, { useEffect, useState,} from 'react'
import { signinuser } from "../features/user/userSlice"
import { useDispatch, useSelector } from "react-redux"
import {useNavigate} from "react-router-dom"
const Form = () => {
  const user = useSelector(state => state.user.data.token);
  const history = useNavigate();
     const [password, setPassword] = useState("a1234");
     const [submit, onSubmit] = useState(false);
     const [email, setEmail] = useState("a1234@gmail.com");
  const dispatch=useDispatch();
  useEffect(() => {
    if (submit) {
      console.log("submit")
      const register="signin"
      dispatch(signinuser({ email, password }));
    
      onSubmit(false);
    }
  }, [submit, dispatch])
  useEffect(() => {
    if (user) {
      localStorage.setItem("token", user);
      history('/dashboard')
    }
  }, [user,history]);
 
  
  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  
}
  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  
  }
  const handleSubmit = () => {
    onSubmit(true);
  }
  
    

  return (
    <div className="form-container">
      
      <div className="form-content">
        <div className="hero-heading">Sign IN</div>
        <div className="label-container">
          <div className="label">Enter your email</div>
          <input
            type="text"
            className="form-input"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>

        <div className="label-container">
          <div className="label">Enter your password</div>
          <input
            type="password"
            className="form-input"
            value={password}
            onChange={handleChangePassword}
          />
        </div>

        <div
          className="product-card__button 
       full"
          onClick={handleSubmit}
        >
          Login
        </div>
      </div>
    </div>
  );
}

export default Form;