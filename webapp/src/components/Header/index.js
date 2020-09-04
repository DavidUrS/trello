import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@material-ui/core';

const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Box p={1}>
            <Typography variant="h6">Workspaces</Typography>
          </Box>
          <Box p={1} ml="auto">
            <Button color="inherit">Logout</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
