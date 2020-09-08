import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Box,
  Chip,
  Avatar,
  Divider,
  Container,
  Typography
} from '@material-ui/core';
import {
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent
} from '@material-ui/lab';
import { tasksActions } from '../../store/actions';
import MDReactComponent from 'markdown-react-js';

class OpenedTask extends Component {
  render() {
    const { task, user } = this.props;
    const { username } = user;
    let backgroundColor = 'white';
    let color = 'black';
    switch (task.status) {
      case 'Pending':
        backgroundColor = '#b26a00';
        color = 'white';
        break;

      case 'Done':
        backgroundColor = '#357a38';
        color = 'white';
        break;

      case 'In progress':
        backgroundColor = '#008394';
        color = 'white';
        break;

      default:
        break;
    }
    return (
      <Container
        style={{
          backgroundColor: '#eeeeee'
        }}
      >
        <Box p={2}>
          <Typography variant="h3">{task.title}</Typography>
        </Box>

        <Divider variant="middle" />
        <Box p={2}>
          <Chip
            avatar={
              <Avatar
                style={{ backgroundColor, color, border: '2px solid white' }}
              >
                {username ? username.charAt(0).toUpperCase() : ''}
              </Avatar>
            }
            label={task.status}
            clickable
            style={{ backgroundColor, color }}
          />
        </Box>
        <Box p={4}>
          <MDReactComponent text={task.description} />
        </Box>
        <Box p={4}>
          <Timeline align="right">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                {`Updated at ${new Date(task.updatedAt).toLocaleDateString()}`}
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>{`Created at ${new Date(
                task.createdAt
              ).toLocaleDateString()}`}</TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
      </Container>
    );
  }
}

const mapDispathToProps = dispatch => {
  return {
    deleteTaskRequest: task => dispatch(tasksActions.deleteTaskRequest(task)),
    changeStatusRequest: task => dispatch(tasksActions.chageStatusRequest(task))
  };
};

export default connect(null, mapDispathToProps)(OpenedTask);
