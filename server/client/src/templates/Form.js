import React, { useEffect, useState,} from 'react'
import { signinuser,signupuser } from "../features/user/userSlice"
import { useDispatch, useSelector } from "react-redux"
import {useNavigate} from "react-router-dom"
const Form = () => {

  const history = useNavigate();
     const [password, setPassword] = useState("a1234");
  const [submit, onSubmit] = useState(false);
  const [signUp, setSignUp] = useState(true);
  const [email, setEmail] = useState("a1234@gmail.com");
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const user = useSelector(state => state.user.data.email);
  const dispatch = useDispatch();
  const doit = async () => {
    if (signUp === false)
      dispatch(signinuser({ email, password }));
    else {
      dispatch(signupuser({ email, password ,firstName }));
    }
    
  }
  useEffect(() => {
    if (submit) {
      console.log("submit")
      doit();
     
      
    
      onSubmit(false);
    }
  }, [submit, dispatch])
 
  useEffect(() => {
    if (user) {
     history('/')
   }
 },[user])
  
  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  
}
  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  
  }
  const handleChangefirstName = (e) => {
    setfirstName(e.target.value)
  }
  const handleSubmit = () => {
    onSubmit(true);
  }
  
    

  return (
    <div className="form-container">
      <div className="form-information">
        <div
          className="product-card__info-price"
          onClick={() => {
            setSignUp(false);
          }}
        >
          Login
        </div>
        <div className="circle">or</div>
        <div
          className="product-card__info-price"
          onClick={() => {
            setSignUp(true);
          }}
        >
          SignUp
        </div>
      </div>
      {signUp ? (
        <>
          <div className="form-content">
            <div className="hero-heading">Sign Up</div>
            <div className="label-container">
              <div className="label">Enter your Name</div>
              <input
                type="text"
                className="form-input"
                value={firstName}
                onChange={handleChangefirstName}
              />
            </div>
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
              Sign UP
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="form-content">
            <div className="hero-heading">Login</div>

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
        </>
      )}
    </div>
  );
}

export default Form;