import React from "react";
import { Link } from "react-router-dom";

/**
 * 
 * @returns   <header className="bck_b_light">
      <div className="container">
        <div className="left">
          <div className="logo">WAVES</div>
        </div>
        <div className="right">
          <div className="top">
            <>
              <div className="cart_link">
                <span>1</span>
                <Link to="/dashboard/user/user_cart">My cart</Link>
              </div>

              <Link to="/dashboard">My account</Link>
              <span onClick={() => alert("log out")}>Log out</span>

              <Link to="/sign_in">Log in</Link>
            </>
          </div>
          <div className="bottom">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
          </div>
        </div>
      </div>
    </header>
 */
const Header = () => {
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
          <Link className="side_links" to="/">
            <span onClick={() => alert("log out")}>Log out</span>
          </Link>

          <Link className="side_links" to="/sign_in">
            Log in
          </Link>
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
