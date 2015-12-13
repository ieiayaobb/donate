import React from 'react';

import {Panel, Button, ButtonToolbar, Input} from 'react-bootstrap';

class Login extends React.Component{
  render() {
    var loginPanelWrapperStyle = {
      width: '100%',
      height: '100%'
    }
    var loginPanelStyle = {
      width: '400px',
      height: '300px',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }

    const title = (
      <h3>Login Form</h3>
    );
    const loginPanel = (
      <div style={loginPanelWrapperStyle}>
        <Panel header={title} bsStyle="primary" style={loginPanelStyle}>
          <form>
            <Input type="email" label="Username" placeholder="Username" />
            <Input type="password" label="Password" placeholder="Password"/>
            <Input type="checkbox" label="Remember me" checked readOnly />
          <ButtonToolbar>
            <Button bsStyle="primary" bsSize="large">Login</Button>
            <Button bsSize="large">Cancel</Button>
          </ButtonToolbar>
          </form>
        </Panel>
      </div>
    );
    return(loginPanel)
  }
}
module.exports = Login;
