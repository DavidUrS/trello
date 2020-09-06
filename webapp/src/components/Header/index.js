import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Avatar
} from '@material-ui/core';
import { userActions } from '../../store/actions';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    const { username } = this.props;
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Box p={1}>
              <Avatar
                aria-label="recipe"
                style={{ backgroundColor: '#f44336' }}
              >
                {username ? username.charAt(0) : ''}
              </Avatar>
            </Box>
            <Box p={1}>
              <Typography variant="h5">
                <Link
                  to="/workspaces"
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  Workspaces
                </Link>
              </Typography>
            </Box>
            <Box p={1}>
              <Typography variant="h6">{this.props.title || ''}</Typography>
            </Box>
            <Box p={1} ml="auto">
              <Button
                onClick={() => {
                  window.localStorage.removeItem('token');
                  this.props.logOut();
                }}
                color="inherit"
              >
                Logout
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.users
  };
};

const mapDispathToProps = dispatch => {
  return {
    logOut: () => dispatch(userActions.logOut({}))
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Header);
