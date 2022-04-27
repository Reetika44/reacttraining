import React from "react";
import LogInButton from "./LogInButton";
import LogOutButton from "./LogOutButton";
import Greeting from "./Greeting";

class LoginControl extends React.Component {
  constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogOutClick = this.handleLogOutClick.bind(this);
      this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
      this.setState({isLoggedIn: true});
  }

  handleLogOutClick() {
      this.setState({isLoggedIn: false});
  }

  render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
      if (isLoggedIn) {
        button = <LogOutButton onClick={this.handleLogOutClick} />
      } else {
        button = <LogInButton onClick={this.handleLoginClick} />
      }

      return (
          <div>
              <Greeting isLoggedIn={isLoggedIn} />
              {button}
          </div>
      );
  }
}

export default LoginControl;