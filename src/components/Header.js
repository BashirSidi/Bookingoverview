import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from '@material-ui/core/Badge';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import '../style/Header.css'
import {
  Nav,
  Navbar,
  DropdownButton,
  Form,
  FormControl,
  Button,
  Dropdown
} from 'react-bootstrap';


const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home"><img alt="" src="https://uploads-ssl.webflow.com/6098c701cacf0bbc451cab04/6098ca68d36f2270e2844630_F%26S%20logo%20circle.png" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Looking for anything?..."
                className="mr-2"
                aria-label="Search"
                className="ml-5 custom-input"
              />
              <Button variant="primary" className="search-btn">Search</Button>
            </Form>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <div>
                <Badge badgeContent={4} color="error">
                  <NotificationsNoneOutlinedIcon className="badge-icon" />
                </Badge>
              </div>
            </Nav.Link>
            <Nav.Link href="#deets"><img id="nav_pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU" /></Nav.Link>
            <DropdownButton align="end" title="Dropdown end" id="dropdown-menu-align-end" className="dropdown-btn">
              <Dropdown.Item eventKey="1">View account</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Log out</Dropdown.Item>
            </DropdownButton>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
