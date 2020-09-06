import { connect } from 'react-redux';
import React, { Component } from 'react';
import { tasksActions } from '../../store/actions';
import { Field, reduxForm } from 'redux-form';
import { Input, Box, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

class SearchTaskForm extends Component {
  executeSearch(textToSearch) {
    this.props.searchTaskRequest({
      workspace: this.props.workspace._id,
      textToSearch
    });
  }
  renderInput = props => {
    return (
      <Input
        {...props}
        onChange={event => {
          let textToSearch = event.target.value;
          if (
            (textToSearch.length % 2 === 0 && textToSearch.length > 1) ||
            textToSearch.length === 0
          ) {
            this.executeSearch(textToSearch);
          }
        }}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
    );
  };

  onSubmit(formValues) {
    formValues.workspace = this.props.workspace;
    this.props.createTaskRequest(formValues);
    return this.props.reset('searchTask');
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
            <Field name="name" component={this.renderInput} type="text" />
          </div>
        </form>
      </Box>
    );
  }
}

const mapDispathToProps = dispatch => {
  return {
    searchTaskRequest: task => dispatch(tasksActions.searchTaskRequest(task))
  };
};

export default connect(
  null,
  mapDispathToProps
)(
  reduxForm({
    form: 'searchTask',
    destroyOnUnmount: false
  })(SearchTaskForm)
);
