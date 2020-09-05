import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Container, Typography } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import SigninForm from '../Forms/SignIn';

class Signin extends Component {
  render() {
    const { user } = this.props;
    if (user && user._id) return <Redirect to="/workspaces" />;
    return (
      <Container>
        <Typography variant="h3" gutterBottom>
          My own task application
        </Typography>
        <SigninForm />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Signin);
