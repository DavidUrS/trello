import { connect } from 'react-redux';
import React, { Component } from 'react';
import { userActions } from '../../store/actions';
import BgDivRGBA from '../Styleds/BgDivRGBA';
import { Field, reduxForm } from 'redux-form';
import { Input, Container, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Alert } from '@material-ui/lab';

const required = value => (value ? undefined : 'Required');

class SigninForm extends Component {
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
    this.props.signInRequest(formValues);
    return this.props.reset('singin');
  }

  render() {
    return (
      <Container>
        <BgDivRGBA style={{ padding: '5%' }}>
          <Typography variant="h4" gutterBottom>
            Sign In
          </Typography>
          <Typography variant="body2" gutterBottom>
            Enter your credentials and you will access your workspace
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
                Sign In
              </Button>
            </div>
            <div style={{ padding: '2%' }}>
              <Link to="/signup">I don't have an account</Link>
            </div>
          </form>
        </BgDivRGBA>
      </Container>
    );
  }
}

const mapDispathToProps = dispatch => {
  return {
    signInRequest: user => dispatch(userActions.signInRequest(user))
  };
};

export default connect(
  null,
  mapDispathToProps
)(
  reduxForm({
    form: 'signin',
    destroyOnUnmount: false
  })(SigninForm)
);
