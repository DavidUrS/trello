import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Container, Typography } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import SignupForm from '../Forms/SignUp';

class Signup extends Component {
  render() {
    const { user } = this.props;
    if (user && user._id) return <Redirect to="/workspaces" />;

    return (
      <Container>
        <Typography variant="h3" gutterBottom>
          My own task application
        </Typography>
        <SignupForm />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Signup);
