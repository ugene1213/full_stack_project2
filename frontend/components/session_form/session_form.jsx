import React from 'react';
import { Link, hashHistory } from 'react-router';


export default class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.messageType = this.messageType.bind(this);
    this.navLink = this.navLink.bind(this);
    this.genericUser = this.genericUser.bind(this);
  }

  componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn(){
		if (this.props.loggedIn) {
			hashHistory.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}


  genericUser(e) {
    e.preventDefault();
    this.props.processForm({user: {username:"generic",password:"genericpassword"}});
  }

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup">Sign up</Link>;
		} else {
			return <Link to="/login">Login instead</Link>;
		}
	}
  /* This changes the message based on if it is a signup or a signin

  */
  messageType() {
    if (this.props.formType == "login") {
      return (
        <div className="form-header">
          Login In to Yowl
          <br/>
            <div className="login-signup-redirect">New To Yowl? { this.navLink() }</div>
            <button className="generic-user" onClick={this.genericUser}>Guest Login</button>
        </div>
      );
    } else {
        return (
          <div className="form-header">
            Sign Up for Yowl
            <br/>
            <div className="login-signup-redirect">Already on Yowl? { this.navLink() }</div>
          </div>
        );
    }
  }

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}


	render() {
		return (
      <div className="mega-container">
        <div className='yowl-header'>
          <Link to='/'><img src= {window.yowlAssets.logo} /></Link>
        </div>
        <div className="login-form-container group">
          <div className='non-pic-session-stuff'>
            <div className='message'>
              {this.messageType()}
            </div>
            <form onSubmit={this.handleSubmit} className="login-form-box">
              { this.renderErrors() }
              <div className="login-form">
                <input type="text"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.update("username")}
                  className="login-input username" />
                <input type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  className="login-input password" />

                <br/>
                <input type="submit" value="Submit" id="hello" />
                <br/>

              </div>
            </form>
          </div>
          <div className="signup-logo-container">
            <img
              src={window.yowlAssets.loginImage}
              className="signup-logo"
              />
          </div>

        </div>
        <div className='signup-login-footer'>
          <footer className='copyright'>Copyright © 2017 By Eugene Cheng </footer>
        </div>
      </div>
		);
	}
}
