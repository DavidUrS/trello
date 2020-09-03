import React, { Component } from 'react';
import './App.css';
import { decode } from 'jsonwebtoken';
import { connect } from 'react-redux';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Workplaces from './components/Workplaces';
import { Container } from '@material-ui/core';
import { userActions } from './store/actions';
import ContainerBg from './components/Styleds/ContainerBg';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    const token = window.localStorage.getItem('token');
    const user = decode(token);
    if (user && user._id) this.props.signInSuccess(user);
  }
  render() {
    const { user } = this.props;
    return (
      <ContainerBg className="App">
        <BrowserRouter>
          <Switch>
            <React.Fragment>
              <Container>
                <Route
                  exact
                  path="/"
                  render={() =>
                    user && user._id ? (
                      <Redirect to="/workplaces" />
                    ) : (
                      <Redirect to="/signin" />
                    )
                  }
                />
                <Route path="/signin" component={Signin} />
                <Route path="/signup" component={Signup} />
                <Route path="/workplaces" component={Workplaces} />
              </Container>
            </React.Fragment>
          </Switch>
        </BrowserRouter>
      </ContainerBg>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispathToProps = dispatch => {
  return {
    signInSuccess: user => dispatch(userActions.signInSuccess(user))
  };
};

export default connect(mapStateToProps, mapDispathToProps)(App);
