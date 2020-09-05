import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Typography,
  Box,
  Button,
  Input,
  Fab,
  Container,
  Dialog,
  DialogTitle
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Header from '../Header';
import { Redirect } from 'react-router-dom';
import { workspaceActions } from '../../store/actions';

class Workspace extends Component {
  state = {
    open: false
  };
  componentWillMount() {
    this.props.getInfoRequest(this.props.match.params._id);
  }
  handleOpenDialog() {
    this.setState({ open: true });
  }
  handleCloseDialog() {
    this.setState({ open: false });
  }
  render() {
    const { workspace, user } = this.props;
    if (!window.localStorage.getItem('token')) return <Redirect to="/signin" />;

    return (
      <Container>
        <Header title={workspace.name} />
        <Box p={2}>
          <Fab size="small" aria-label="add">
            <AddIcon
              onClick={() => {
                this.handleOpenDialog();
              }}
            />
          </Fab>
        </Box>
        <Dialog
          onClose={() => {
            this.handleCloseDialog();
          }}
          aria-labelledby="simple-dialog-title"
          open={this.state.open}
        >
          <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
        </Dialog>

        {workspace.tasks && workspace.tasks.length ? (
          <div>sasis</div>
        ) : (
          <div>No data yet</div>
        )}
      </Container>
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
    getInfoRequest: _id => dispatch(workspaceActions.getInfoRequest(_id))
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Workspace);
