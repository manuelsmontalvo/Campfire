import React from 'react';
import { Link } from 'react-router-dom';
import "../css/layout.css"

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  
  return (
    <div>
      <div className = "nav">
      <p className="title">Campfire</p>
      <Link className="nav_link" to="/">Campsites</Link>
        <Link className="nav_link" to={`/users/${currentUser?.id}`}>Profile</Link>
      {
        currentUser ?
        <>
              <button className = "logout_btn" onClick={handleLogout}>Logout</button>
            </>
            :
            <Link className = "login_link" to='/login'>Login</Link>
          }
      </div>
      {props.children}
    </div>
  )
}
