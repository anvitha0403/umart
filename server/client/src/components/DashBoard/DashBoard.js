import React from 'react'
import AuthGuard from '../hoc/AuthGuard'
import {Link} from 'react-router-dom'
const DashBoard = (props) => {
  const user_links = [
    {
      name: "my account",
      path: "/dashboard",
    },
    {
      name: "my cart",
      path: "/dashboard/user/user_cart",
    },
    {
      name: "user information",
      path: "/dashboard/user/user_info",
    },
  ];
  const admin_links = [
    {
      name: "products",
      path:"/dashboard/admin/products"
       }
  ]
  const user = props.user.data;
    return (
      <>
        <div className="dashboard-container">
          <div className="dashboard-navigation">
            <div className="side_links dh-links">Acccount Settings</div>
            {user_links.map((m) => {
              return (
                <Link className="product-card__button d-links" to={m.path}>
                  {m.name}
                </Link>
              );
            })}
            {user && user.role && user.role === "admin" ? (
              <>
                <div className="side_links dh-links">Admin Settings</div>

                {admin_links.map((m) => {
                  return (
                    <Link className="product-card__button" to={m.path}>
                      {m.name}
                    </Link>
                  );
                })}
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="dashboard-main">
            <div className="dashboard-user-info">
              <div className="hero-heading">OVERVIEW </div>
              {user ? (
                <div className="overview-back">
                  <div className="product-card__button overview-m">
                    FIRSTNAME:{" "}
                    {user.firstName === "" ? (
                      <Link to="/dashboard/user/user_info">
                        click to add first Name
                      </Link>
                    ) : (
                      user.firstName
                    )}
                  </div>
                  <div className="product-card__button overview-m">
                    LASTNAME:{" "}
                    {user.lastName === "" ? (
                      <Link to="/dashboard/user/user_info">
                        click to add Last Name
                      </Link>
                    ) : (
                      user.lastName
                    )}
                  </div>
                  <div className="product-card__button overview-m">
                    EMAIL:{" "}
                    {user.email === "" ? (
                      <Link to="/dashboard/user/user_info">
                        click to add firstName
                      </Link>
                    ) : (
                      user.email
                    )}
                  </div>
                  <Link
                    to="/dashboard/user/user_info"
                    className="product-card__button inline"
                  >
                    Click to Edit Details
                  </Link>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </>
    );
}

export default AuthGuard(DashBoard)