import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppBar, Toolbar, Typography, Button, Box } from '@material-ui/core';
import { userActions } from '../../store/actions';

class Header extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Box p={1}>
              <Typography variant="h6">Workspaces</Typography>
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
