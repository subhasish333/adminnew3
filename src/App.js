/*  <--ROUTES-->
/checkuser --> for aadhar number checking
/register --> for register form
/login --> for login form
/setpassword --> setpassword page
/home --> user dashboard
/admin --> Admin page
*/

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginForm from "./component/login";
import Protected from './component/protectedh';

import Admin from './component/admin';

import UserWrapper from "./component/UserWrapper";

import { Redirect } from 'react-router-dom';
import Nav from './component/navbar';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
       
          <Nav />
          <Switch>
          <Route path="/login">
              <LoginForm />
            </Route>
            
            
            <Protected exact path="/admin">
              <UserWrapper>
                <Admin />
              </UserWrapper>
            </Protected>
            <Redirect from="*" to='/' />
          </Switch>
       
      </Router>
    );
  }
}

export default App;