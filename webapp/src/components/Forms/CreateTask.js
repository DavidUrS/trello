import { connect } from 'react-redux';
import React, { Component } from 'react';
import { userActions } from '../../store/actions';
import BgDivRGBA from '../Styleds/BgDivRGBA';
import { Field, reduxForm } from 'redux-form';
import { Input, Container, Typography, Button, Box } from '@material-ui/core';

class CreateTaskForm extends Component {
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
    return this.props.reset('createTask');
  }

  render() {
    return (
      <Container>
        <BgDivRGBA style={{ padding: '5%' }}>
          <Box p={2}>
            <Typography variant="h6" gutterBottom>
              Create task
            </Typography>
            <form
              noValidate
              autoComplete="off"
              onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}
            >
              <div style={{ padding: '2%' }}>
                <Field
                  name="title"
                  component={this.renderInput}
                  type="text"
                  placeholder="Title"
                />
              </div>
              <div style={{ padding: '2%' }}>
                <Field
                  name="description"
                  component={this.renderInput}
                  type="text"
                  placeholder="description"
                />
              </div>
              <div>
                <Button
                  type="submit"
                  variant="outlined"
                  color="primary"
                  size="small"
                >
                  Save
                </Button>
              </div>
            </form>
          </Box>
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
    form: 'createTask',
    destroyOnUnmount: false
  })(CreateTaskForm)
);
