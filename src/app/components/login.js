import React from 'react';

import {Panel, Button, ButtonToolbar, Input} from 'react-bootstrap';

require("./login.css")

export default class Login extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    const title = (
      <h3>Login Form</h3>
    );
    const loginPanel = (
      <div className="loginPanelWrapper">
        <Panel header={title} bsStyle="primary" className="loginPanel">
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
