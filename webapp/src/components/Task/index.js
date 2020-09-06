import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  Button,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Zoom
} from '@material-ui/core';
import { tasksActions } from '../../store/actions';
import MoreVertIcon from '@material-ui/icons/MoreVert';

class Task extends Component {
  state = { anchorEl: null, open: false };

  handleClick(event) {
    this.setState({ anchorEl: event.currentTarget, open: true });
  }
  handleClose() {
    this.setState({ anchorEl: null, open: false });
  }
  render() {
    const { task, user } = this.props;

    return (
      <Grid item>
        <Card variant="outlined">
          <CardHeader
            avatar={
              <Avatar
                aria-label="recipe"
                style={{ backgroundColor: '#f44336' }}
              >
                {user.username ? user.username.charAt(0) : ''}
              </Avatar>
            }
            action={
              <IconButton
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={event => this.handleClick(event)}
              >
                <MoreVertIcon />
              </IconButton>
            }
            title={task.title}
            subheader={`Created at ${new Date(
              task.createdAt
            ).toLocaleDateString()}`}
          />
          <CardContent>
            <Menu
              id="simple-menu"
              anchorEl={this.state.anchorEl}
              keepMounted
              open={Boolean(this.state.anchorEl)}
              onClose={() => this.handleClose()}
              TransitionComponent={Zoom}
            >
              <MenuItem
                onClick={() => {
                  this.props.deleteTaskRequest({
                    workspace: task.workspace,
                    _id: task._id
                  });
                  this.handleClose();
                }}
              >
                Delete
              </MenuItem>
              <MenuItem onClick={() => this.handleClose()}>Update</MenuItem>
            </Menu>
            <Typography variant="body2" component="p">
              {task.description}
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="outlined" color="primary">
              Change status
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

const mapDispathToProps = dispatch => {
  return {
    deleteTaskRequest: task => dispatch(tasksActions.deleteTaskRequest(task))
  };
};

export default connect(null, mapDispathToProps)(Task);
