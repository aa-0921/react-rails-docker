import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Login from './Login';
import Logout from './Logout';
import List1 from './List1';
import List2 from './List2';
import Auth from './Auth';
import User from './User';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Auth>
            <Switch>
              <Route exact path="/list1" component={List1} />
              <Route exact path="/list2" component={List2} />
              <Redirect from="/" to="/List1" />
            </Switch>
          </Auth>
        </Switch>
      </Router>
    );
  }
}

// import * as React from 'react';
// import { useState, useEffect } from 'react';

// class Input extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       inputVal: '',
//     };
//     this.changeHandler = this.changeHandler.bind(this);
//   }

//   changeHandler(e) {
//     this.props.parentFunction(e.target.value);
//   }

//   render() {
//     return (
//       <div>
//         <label>{this.props.labelName}</label>
//         <input type={this.props.inputType} id={this.props.id} onChange={this.changeHandler} />
//       </div>
//     );
//   }
// }

// export const LoginForm = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//     // this.clickHandler = this.clickHandler.bind(this);
//     // this.setUsername = this.setUsername.bind(this);
//     // this.setPassword = this.setPassword.bind(this);
//   }

//   clickHandler() {
//     // put your own code here
//     alert(`Username: ${username} Password: ${password}`);
//   }

//   render() {
//     return (
//       <div>
//         <Input
//           id="username"
//           labelName="Username: "
//           inputType="text"
//           parentFunction={this.setUsername}
//         />
//         <Input
//           id="password"
//           labelName="Password: "
//           inputType="password"
//           parentFunction={this.setPassword}
//         />
//         <button onClick={this.clickHandler}>{this.props.buttonName}</button>
//       </div>
//     );
//   }
// }

// export const Login = () => {
//     return (
//       <div>
//         <h1>Login</h1>
//         <LoginForm buttonName="Submit" />
//         <h3>Put some style on it</h3>

//       </div>
//     );
//   }
// }
