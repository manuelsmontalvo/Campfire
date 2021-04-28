import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div>
      <div className = "nav">
      <p className="title">Campfire</p>
      <link>Profile</link>
      <link>Campsites</link>
      {
          currentUser ?
            <>
              <button className = "logout_btn" onClick={handleLogout}>Logout</button>
            </>
            :
            <Link className = "login_link" to='/signup'>Login/Register</Link>
        }
      </div>
      {props.children}
    </div>
  )
}
