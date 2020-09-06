import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Zoom,
  Box,
  Tooltip,
  Chip
} from '@material-ui/core';
import { tasksActions } from '../../store/actions';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class Task extends Component {
  state = { anchorElMoreOptions: null, anchorElStatus: null };

  handleOpenStatus(event) {
    this.setState({ anchorElStatus: event.currentTarget });
  }
  handleCloseStatus() {
    this.setState({ anchorElStatus: null });
  }

  handleOpenMoreOptions(event) {
    this.setState({ anchorElMoreOptions: event.currentTarget });
  }
  handleCloseMoreOptions() {
    this.setState({ anchorElMoreOptions: null });
  }
  render() {
    const { task, user, taskStatusList } = this.props;

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
                aria-controls="more-options"
                aria-haspopup="true"
                onClick={event => this.handleOpenMoreOptions(event)}
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
              id="more-options"
              anchorEl={this.state.anchorElMoreOptions}
              keepMounted
              open={Boolean(this.state.anchorElMoreOptions)}
              onClose={() => this.handleCloseMoreOptions()}
              TransitionComponent={Zoom}
            >
              <MenuItem
                onClick={() => {
                  this.props.deleteTaskRequest({
                    workspace: task.workspace,
                    _id: task._id
                  });
                  this.handleCloseMoreOptions();
                }}
              >
                Delete
              </MenuItem>
              <MenuItem onClick={() => this.handleCloseMoreOptions()}>
                Update
              </MenuItem>
            </Menu>
            <Typography variant="body2" component="p">
              {task.description}
              <br />
            </Typography>
          </CardContent>
          <Box display="flex" justifyContent="center">
            <CardActions>
              <Chip label={task.status} color="secondary" variant="outlined" />
              <Tooltip
                title="Change status"
                aria-label="Change status"
                placement="top"
              >
                <IconButton
                  aria-label="share"
                  aria-controls="status"
                  aria-haspopup="true"
                  onClick={event => this.handleOpenStatus(event)}
                >
                  <ExpandMoreIcon />
                </IconButton>
              </Tooltip>

              <Menu
                id="status"
                anchorEl={this.state.anchorElStatus}
                keepMounted
                open={Boolean(this.state.anchorElStatus)}
                onClose={() => this.handleCloseStatus()}
                elevation={0}
                TransitionComponent={Zoom}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center'
                }}
                getContentAnchorEl={null}
              >
                {taskStatusList && taskStatusList.length
                  ? taskStatusList.map(status => {
                      return (
                        <MenuItem
                          key={status}
                          onClick={() => this.handleCloseStatus()}
                        >
                          {status}
                        </MenuItem>
                      );
                    })
                  : null}
              </Menu>
            </CardActions>
          </Box>
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
