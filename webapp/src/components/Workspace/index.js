import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Box,
  Fab,
  Grid,
  List,
  Paper,
  Switch,
  Dialog,
  Backdrop,
  Snackbar,
  ListItem,
  Container,
  Typography,
  CircularProgress
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Header from '../Header';
import { Redirect } from 'react-router-dom';
import { workspaceActions } from '../../store/actions';
import CreateTaskForm from '../Forms/CreateTask';
import SearchTaskForm from '../Forms/SearchTask';
import Task from '../Task';

class Workspace extends Component {
  state = {
    open: false,
    initialValues: {
      _id: '',
      title: '',
      description: ''
    },
    viewArchived: false
  };
  toggleArchived() {
    this.setState({ viewArchived: !this.state.viewArchived });
  }
  editTask(task) {
    this.setState({
      open: true,
      initialValues: {
        title: task.title,
        description: task.description,
        _id: task._id
      }
    });
  }
  componentWillMount() {
    this.props.getInfoRequest(this.props.match.params._id);
  }
  handleOpenDialog() {
    this.setState({ open: true, initialValues: {} });
  }
  handleCloseDialog() {
    this.setState({ open: false });
  }
  render() {
    const { workspace, user } = this.props;
    if (!window.localStorage.getItem('token')) return <Redirect to="/signin" />;

    return (
      <Container fixed>
        <Header title={workspace.name} username={user.username} />
        <Typography ml="auto" component="div">
          Archived
          <Switch
            checked={this.state.viewArchived}
            onChange={() => this.toggleArchived()}
            name="viewArchived"
            color="primary"
          />
        </Typography>

        <Backdrop
          style={{
            zIndex: 1,
            color: '#fff'
          }}
          open={workspace.pending || false}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <Box p={1}>
          <Fab size="small" aria-label="add">
            <AddIcon
              onClick={() => {
                this.handleOpenDialog();
              }}
            />
          </Fab>
        </Box>
        <SearchTaskForm workspace={workspace} />
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
          <CreateTaskForm
            workspace={workspace._id}
            initValues={this.state.initialValues}
            closeForm={() => this.handleCloseDialog()}
          />
        </Dialog>
        <Grid direction="row" justify="center" alignItems="center" container>
          {workspace && workspace.taskStatus && !this.state.viewArchived ? (
            workspace.taskStatus.map(status => {
              return (
                <List key={status} style={{ minWidth: 300 }}>
                  <Paper style={{ padding: '5px' }} width={100}>
                    <Typography variant="h5">{status}</Typography>
                  </Paper>

                  <ListItem>
                    {workspace.tasks && workspace.tasks.length ? (
                      <Paper
                        style={{
                          maxHeight: 500,
                          minHeight: 500,
                          overflow: 'auto'
                        }}
                      >
                        {workspace.tasks.map(task => {
                          return (
                            <Paper spacing={3} key={task._id}>
                              {task.status === status && !task.isArchived ? (
                                <Box p={1}>
                                  <Task
                                    task={task}
                                    user={user}
                                    taskStatusList={workspace.taskStatus}
                                    editTask={() => this.editTask(task)}
                                  />
                                </Box>
                              ) : null}
                            </Paper>
                          );
                        })}
                      </Paper>
                    ) : (
                      <div>
                        <Snackbar open={true} message="No tasks found" />
                      </div>
                    )}
                  </ListItem>
                </List>
              );
            })
          ) : (
            <List>
              <Paper style={{ padding: '5px' }} width={100}>
                <Typography variant="h5">Archived</Typography>
              </Paper>
              <ListItem>
                {workspace.tasks && workspace.tasks.length ? (
                  <Paper
                    style={{
                      maxHeight: 500,
                      minHeight: 500,
                      overflow: 'auto'
                    }}
                  >
                    {workspace.tasks.map(task => {
                      return (
                        <Paper spacing={3} key={task._id}>
                          {task.isArchived ? (
                            <Box p={1}>
                              <Task
                                task={task}
                                user={user}
                                taskStatusList={workspace.taskStatus}
                                editTask={() => this.editTask(task)}
                              />
                            </Box>
                          ) : null}
                        </Paper>
                      );
                    })}
                  </Paper>
                ) : (
                  <div>
                    <Snackbar open={true} message="No tasks found" />
                  </div>
                )}
              </ListItem>
            </List>
          )}
        </Grid>
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
