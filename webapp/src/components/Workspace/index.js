import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Box,
  Fab,
  Container,
  Dialog,
  Grid,
  Card,
  CardActions,
  CardContent,
  Typography,
  Button
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Header from '../Header';
import { Redirect } from 'react-router-dom';
import { workspaceActions } from '../../store/actions';
import CreateTaskForm from '../Forms/CreateTask';

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
    const { workspace } = this.props;
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
          <CreateTaskForm workspace={workspace._id} />
        </Dialog>

        {workspace.tasks && workspace.tasks.length ? (
          <Grid container spacing={3}>
            {workspace.tasks.map(task => {
              return (
                <Grid key={task._id} item xs>
                  <Card>
                    <CardContent>
                      <Typography color="textSecondary" gutterBottom>
                        {task.title}
                      </Typography>
                      <Typography variant="body2" component="p">
                        {task.title}
                        <br />
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
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
