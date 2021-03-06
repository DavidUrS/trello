import { connect } from 'react-redux';
import React, { Component } from 'react';
import BgDivRGBA from '../Styleds/BgDivRGBA';
import { Field, reduxForm } from 'redux-form';
import {
  Input,
  Button,
  Backdrop,
  Container,
  Typography,
  CircularProgress
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { userActions } from '../../store/actions';
import { Alert } from '@material-ui/lab';
import Message from '../Styleds/Message';

const required = value => (value ? undefined : 'Required');

class SignupForm extends Component {
  renderInput = ({ input, type, placeholder, meta: { error } }) => {
    return (
      <div>
        <Input
          {...input}
          type={type}
          placeholder={placeholder}
          size="small"
          style={{ marginBottom: '2px' }}
        />
        {error ? (
          <Alert
            style={{ width: '15%', margin: 'auto' }}
            severity="warning"
            color="warning"
          >
            {error}
          </Alert>
        ) : null}
      </div>
    );
  };

  onSubmit(formValues) {
    this.props.signUpRequest(formValues);
    this.props.reset('signUp');
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <Backdrop
          style={{
            zIndex: 1,
            color: '#fff'
          }}
          open={user.pending || false}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <Message />
        <Container>
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
                  validate={[required]}
                />
              </div>
              <div style={{ padding: '2%' }}>
                <Field
                  name="password"
                  component={this.renderInput}
                  type="password"
                  placeholder="Password"
                  validate={[required]}
                />
              </div>
              <div>
                <Button type="submit" variant="outlined" size="small">
                  Sign Up
                </Button>
              </div>
              <div style={{ padding: '2%' }}>
                <Link to="/signin">I already have an account</Link>
              </div>
            </form>
          </BgDivRGBA>
        </Container>
      </div>
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
  })(SignupForm)
);
