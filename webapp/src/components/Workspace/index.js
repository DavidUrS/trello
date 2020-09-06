import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box, Fab, Container, Dialog, Grid, Snackbar } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Header from '../Header';
import { Redirect } from 'react-router-dom';
import { workspaceActions } from '../../store/actions';
import CreateTaskForm from '../Forms/CreateTask';
import Task from '../Task';

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
        <Header title={workspace.name} username={user.username} />
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
          fullWidth={true}
          onClose={() => {
            this.handleCloseDialog();
          }}
          aria-labelledby="create-task-dialog"
          open={this.state.open}
          PaperProps={{
            style: {
              position: 'absolute',
              marginTop: 0,
              paddingTop: 0,
              top: 0,
              backgroundColor: '#eeeeee'
            }
          }}
        >
          <CreateTaskForm workspace={workspace._id} />
        </Dialog>

        {workspace.tasks && workspace.tasks.length ? (
          <Grid container spacing={3} justify="center" alignItems="center">
            {workspace.tasks.map(task => {
              return (
                <Task
                  key={task._id}
                  task={task}
                  user={user}
                  taskStatusList={workspace.taskStatus}
                />
              );
            })}
          </Grid>
        ) : (
          <div>
            <Snackbar open={true} message="You don't have any tasks yet" />
          </div>
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
