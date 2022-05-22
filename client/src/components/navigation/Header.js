import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch ,useSelector} from 'react-redux'
import {clearUser} from '../../features/user/userSlice'


const Header = () => {
  const dispatch = useDispatch();
  const user=useSelector(state=>state.user)
  const Navigate = useNavigate();
  const handlelogout = () => {
    dispatch(clearUser())
    localStorage.removeItem('token')
    Navigate("/")
  }
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-child  logo">UMART</div>

        <div className="nav-child">
          <Link className="side_links" to="/dashboard/user/user_cart">
            <span>1</span>
            My cart
          </Link>

          <Link className="side_links" to="/dashboard">
            My account
          </Link>
          {user && user.data.token ? (
            <Link className="side_links" to="/">
              <span onClick={handlelogout}>Log out</span>
            </Link>
          ) : (
            <Link className="side_links" to="/signin">
              Log in
            </Link>
          )}
        </div>
      </div>
      <div className="nav-home">
        <Link to="/" className="side_links central-links">
          Home
        </Link>

        <Link className="side_links central-links " to="/shop">
          Shop
        </Link>
      </div>
    </nav>
  );
};

export default Header;
