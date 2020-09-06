import { connect } from 'react-redux';
import React, { Component } from 'react';
import { tasksActions } from '../../store/actions';
import { Field, reduxForm } from 'redux-form';
import { Input, Button, Box, TextField } from '@material-ui/core';

class CreateTaskForm extends Component {
  renderInput = ({ input, type, placeholder }) => {
    return (
      <div>
        <Input
          {...input}
          style={{ width: '100%' }}
          type={type}
          placeholder={placeholder}
          size="small"
        />
      </div>
    );
  };

  renderTextArea = ({ input, placeholder }) => {
    return (
      <TextField
        {...input}
        style={{ width: '100%' }}
        label={placeholder}
        multiline
        rows={20}
      />
    );
  };

  onSubmit(formValues) {
    formValues.workspace = this.props.workspace;
    this.props.createTaskRequest(formValues);
    return this.props.reset('createTask');
  }

  render() {
    return (
      <Box
        p={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <form
          style={{ width: '100%' }}
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
              component={this.renderTextArea}
              type="text"
              placeholder="Description task"
            />
          </div>
          <div>
            <Button type="submit" color="primary" size="small">
              Save
            </Button>
          </div>
        </form>
      </Box>
    );
  }
}

const mapDispathToProps = dispatch => {
  return {
    createTaskRequest: task => dispatch(tasksActions.createTaskRequest(task))
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
