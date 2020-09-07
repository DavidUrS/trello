import { connect } from 'react-redux';
import React, { Component } from 'react';
import { tasksActions } from '../../store/actions';
import { Field, reduxForm } from 'redux-form';
import { Input, Button, Box, TextField, Hidden } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const required = value => (value ? undefined : 'Required');
class CreateTaskForm extends Component {
  renderInput = ({ input, type, placeholder, hidden, meta: { error } }) => {
    if (hidden) {
      return (
        <Hidden>
          <Input
            {...input}
            style={{ width: '100%' }}
            type="hidden"
            placeholder={placeholder}
            size="small"
          />
        </Hidden>
      );
    } else {
      return (
        <div>
          <Input
            {...input}
            style={{ width: '100%' }}
            type={type}
            placeholder={placeholder}
            size="small"
            required={true}
          />
          {error ? (
            <Alert severity="warning" color="warning">
              {error}
            </Alert>
          ) : null}
        </div>
      );
    }
  };

  renderTextArea = ({ input, placeholder, meta: { error } }) => {
    return (
      <Box p={2}>
        <TextField
          {...input}
          style={{ width: '100%' }}
          label={placeholder}
          multiline
          rows={20}
        />
        {error ? (
          <Alert severity="warning" color="warning">
            {error}
          </Alert>
        ) : null}
      </Box>
    );
  };

  onSubmit(formValues) {
    formValues.workspace = this.props.workspace;
    this.props.createTaskRequest(formValues);
    this.props.reset('createTask');
    this.props.closeForm();
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
          <Field name="_id" component={this.renderInput} hidden={true} />
          <div style={{ padding: '2%' }}>
            <Field
              name="title"
              component={this.renderInput}
              type="text"
              placeholder="Title"
              validate={[required]}
            />
          </div>
          <div style={{ padding: '2%' }}>
            <Field
              name="description"
              component={this.renderTextArea}
              type="text"
              placeholder="Description task"
              validate={[required]}
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

const mapStateToProps = (state, props) => {
  let initValues = props && props.initValues ? props.initValues : {};
  return {
    initialValues: initValues
  };
};

const mapDispathToProps = dispatch => {
  return {
    createTaskRequest: task => dispatch(tasksActions.createTaskRequest(task))
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(
  reduxForm({
    form: 'createTask'
  })(CreateTaskForm)
);
