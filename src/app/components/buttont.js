import React from 'react';

import {ButtonToolbar, Button} from 'react-bootstrap';
class ButtonT extends React.Component {
	render() {
		return(
			<div>
		    <ButtonToolbar>
		      <Button bsStyle="primary" bsSize="large">Large button</Button>
		      <Button bsSize="large">Large button</Button>
		    </ButtonToolbar>
		    <ButtonToolbar>
		      <Button bsStyle="primary">Default button</Button>
		      <Button>Default button</Button>
		    </ButtonToolbar>
		    <ButtonToolbar>
		      <Button bsStyle="primary" bsSize="small">Small button</Button>
		      <Button bsSize="small">Small button</Button>
		    </ButtonToolbar>
		    <ButtonToolbar>
		      <Button bsStyle="primary" bsSize="xsmall">Extra small button</Button>
		      <Button bsSize="xsmall">Extra small button</Button>
		    </ButtonToolbar>
		  </div>
		);
	}
}
module.exports = ButtonT;
