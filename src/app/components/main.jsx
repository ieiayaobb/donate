import React from 'react';
import {Navbar, NavbarHeader, Nav, NavItem, NavDropdown, NavbarCollapse, MenuItem, NavbarBrand, NavbarToggle, Grid, Row, Col, Tabs, Tab, Table} from 'react-bootstrap';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const navbarInstance = (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Link Right</NavItem>
            <NavItem eventKey={2} href="#">Link Right</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );

    const leftTabsInstance = (
      <Nav bsStyle="pills" stacked activeKey={1} onSelect={handleSelect}>
        <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
        <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
        <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
      </Nav>
    );

    function handleSelect(selectedKey) {
      alert('selected ' + selectedKey);
    }

    const tableInstance = (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    );

    const gridInstance = (
      <Grid>
        <Row className="show-grid">
          <Col xs={6} md={4}><code>{leftTabsInstance}</code></Col>
          <Col xs={12} md={8}><code>{tableInstance}</code></Col>
        </Row>
      </Grid>
    );
    const mainInstance = (
      <div>
        <div>{navbarInstance}</div>
        <div>{gridInstance}</div>
      </div>
    )

    return mainInstance;
  }
}
