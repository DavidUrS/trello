import React, { Component } from 'react';
import styled from 'styled-components';
import { Input, Container, Typography, Button, Link } from '@material-ui/core';

const BgDivRGBA = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.7);
  with: 100%;
`;

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Typography variant="h3" gutterBottom>
          My own task application
        </Typography>
        <BgDivRGBA style={{ padding: '5%' }}>
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
          <form noValidate autoComplete="off">
            <div style={{ padding: '2%' }}>
              <Input id="username" label="Username" placeholder="Username" />
            </div>
            <div style={{ padding: '2%' }}>
              <Input
                id="password"
                label="Password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div>
              <Button variant="outlined" size="small">
                Save
              </Button>
            </div>
            <div style={{ padding: '2%' }}>
              <Link href="#">I don't have an account</Link>
            </div>
          </form>
        </BgDivRGBA>
      </Container>
    );
  }
}
