import React, { Component } from 'react';
import './App.css';
import { decode } from 'jsonwebtoken';
import { connect } from 'react-redux';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Workspaces from './components/Workspaces';
import Workspace from './components/Workspace';
import { Container } from '@material-ui/core';
import { userActions } from './store/actions';
import ContainerBg from './components/Styleds/ContainerBg';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    const token = window.localStorage.getItem('token');
    const user = decode(token);
    if (user && user._id) this.props.getUserInfoRequest();
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
                      <Redirect to="/workspaces" />
                    ) : (
                      <Redirect to="/signin" />
                    )
                  }
                />
                <Route path="/signin" component={Signin} />
                <Route path="/signup" component={Signup} />
                <Route path="/workspaces" component={Workspaces} />
                <Route path="/workspace/:_id" component={Workspace} />
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
    user: state.users
  };
};

const mapDispathToProps = dispatch => {
  return {
    getUserInfoRequest: () => dispatch(userActions.getUserInfoRequest())
  };
};

export default connect(mapStateToProps, mapDispathToProps)(App);
