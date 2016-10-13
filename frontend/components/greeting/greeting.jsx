import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <ul className="login-list">
      <li>
        <Link to="/signup" activeClassName="current" className="sign-up">Sign up!</Link>
      </li>
      <li>
        <Link to="/login" activeClassName="current" className="login">Login</Link>
      </li>
    </ul>

  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group group">
    <div className="header-user-info">
      <img src= { window.yowlAssets.genericUser } className="user-image" />
      <div className="button-stuff">
        <h2 className="header-name">{currentUser.username}</h2>
        <br/>
        <button className="header-button" onClick={logout}>Log Out</button>
      </div>
    </div>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
    return personalGreeting(currentUser, logout);
  } else {
    return sessionLinks();
  }
}

export default Greeting;
