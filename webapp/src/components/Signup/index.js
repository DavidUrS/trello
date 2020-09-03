import { connect } from 'react-redux';
import React, { Component } from 'react';
import BgDivRGBA from '../Styleds/BgDivRGBA';
import { Field, reduxForm } from 'redux-form';
import { Input, Container, Typography, Button } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';

class Signup extends Component {
  render() {
    const { user } = this.props;
    if (user && user._id) return <Redirect to="/workplaces" />;

    return (
      <Container>
        <Typography variant="h3" gutterBottom>
          My own task application
        </Typography>
        <BgDivRGBA style={{ padding: '5%' }}>
          <Typography variant="h4" gutterBottom>
            Sign Up
          </Typography>
          <Typography variant="body2" gutterBottom>
            Here you can create an account to access your workspace
          </Typography>
          <form noValidate autoComplete="off">
            <div style={{ padding: '2%' }}>
              <Input id="username" label="Username" placeholder="Username" />
            </div>
            <div style={{ padding: '2%' }}>
              <Input
                id="password"
                label="Password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div>
              <Button variant="outlined" size="small">
                Singup
              </Button>
            </div>
            <div style={{ padding: '2%' }}>
              <Link to="/signin">I already have an account</Link>
            </div>
          </form>
        </BgDivRGBA>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  null
)(
  reduxForm({
    form: 'signup',
    destroyOnUnmount: false
  })(Signup)
);
