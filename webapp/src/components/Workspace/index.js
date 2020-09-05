import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography, Box, Button, Input } from '@material-ui/core';
import Header from '../Header';
import { Redirect } from 'react-router-dom';
import { workspaceActions } from '../../store/actions';

class Workspace extends Component {
  componentDidMount() {
    const { workspace } = this.props;
    if (!workspace) this.props.getInfoRequest();
  }
  render() {
    const { user } = this.props;
    if (!user._id) return <Redirect to="/signin" />;
    return (
      <div>
        <Header title={this.props.match.params._id} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    workspace: state.workspace
  };
};

const mapDispathToProps = dispatch => {
  return {
    getInfoRequest: () => dispatch(workspaceActions.getInfoRequest())
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Workspace);
