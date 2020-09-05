import { connect } from 'react-redux';
import React, { Component } from 'react';
import { userActions } from '../../store/actions';
import BgDivRGBA from '../Styleds/BgDivRGBA';
import { Field, reduxForm } from 'redux-form';
import { Input, Container, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

class SigninForm extends Component {
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
