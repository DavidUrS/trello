import { connect } from 'react-redux';
import React, { Component } from 'react';
import BgDivRGBA from '../Styleds/BgDivRGBA';
import { Field, reduxForm } from 'redux-form';
import { Input, Container, Typography, Button } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import { userActions } from '../../store/actions';

class Signup extends Component {
  renderInput = ({ input, type, placeholder }) => {
    return (
      <div>
        <Input
          {...input}
          type={type}
          placeholder={placeholder}
          size="small"
          style={{ marginBottom: '2px' }}
        />
      </div>
    );
  };

  onSubmit(formValues) {
    this.props.signUpRequest(formValues);
    return this.props.reset('signUp');
  }

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
          <form
            noValidate
            autoComplete="off"
            onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}
          >
            <div style={{ padding: '2%' }}>
              <Field
                name="username"
                component={this.renderInput}
                type="text"
                placeholder="Username"
              />
            </div>
            <div style={{ padding: '2%' }}>
              <Field
                name="password"
                component={this.renderInput}
                type="password"
                placeholder="Password"
              />
            </div>
            <div>
              <Button type="submit" variant="outlined" size="small">
                Signin
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

const mapDispathToProps = dispatch => {
  return {
    signUpRequest: user => dispatch(userActions.signUpRequest(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(
  reduxForm({
    form: 'signUp',
    destroyOnUnmount: false
  })(Signup)
);
