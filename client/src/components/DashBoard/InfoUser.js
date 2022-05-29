import React,{useState,useEffect} from 'react'
import AuthGuard from '../hoc/AuthGuard';
import { edituser } from '../../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
const InfoUser = (props) => {
    const user = props.user.data;
  const dispatch = useDispatch();
  const Navigate = useNavigate();
     const [firstName, setFirstName] = useState(user.firstName);
     const [lastName, setLastName] = useState(user.lastName);
     const [submit, onSubmit] = useState(false);
    const [email, setEmail] = useState(user.email);
    useEffect(() => {
        if (submit) {
            const token = user.token;
            const change = JSON.parse(JSON.stringify(props.user));
            Object.assign(change.data, { firstName, lastName });
            dispatch(edituser({
                change: change, token: token
            }))
          onSubmit(false);
          Navigate("/dashboard");
        }
    },[submit,dispatch])
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleSubmit = () => {
    onSubmit(true);
  };
  return (
    <div>
      <div className="form-container">
        <div className="form-content">
          <div className="hero-heading">Edit Your details</div>
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
            <div className="label">Enter your FirstName</div>
            <input
              type="text"
              className="form-input"
              value={firstName}
              onChange={handleChangeFirstName}
            />
          </div>
          <div className="label-container">
            <div className="label">Enter your LastName</div>
            <input
              type="text"
              className="form-input"
              value={lastName}
              onChange={handleChangeLastName}
            />
          </div>

          <div
            className="product-card__button 
       full"
            onClick={handleSubmit}
          >
        Edit details
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthGuard(InfoUser)