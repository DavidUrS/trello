import React from 'react';
import './App.css';
import Signin from './components/Signin';
import Signup from './components/Signup';
import { Container } from '@material-ui/core';
import ContainerBg from './components/Styleds/ContainerBg';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <ContainerBg className="App">
      <BrowserRouter>
        <Switch>
          <React.Fragment>
            <Container>
              <Route exact path="/" render={() => <Redirect to="/signin" />} />
              <Route path="/signin" component={Signin} />
              <Route path="/signup" component={Signup} />
            </Container>
          </React.Fragment>
        </Switch>
      </BrowserRouter>
    </ContainerBg>
  );
};

export default App;
