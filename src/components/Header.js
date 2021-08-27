import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Badge from "@material-ui/core/Badge";
import Switch from "react-switch";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import "../style/Header.css";
import useStore from "../state";

import {
  Nav,
  Navbar,
  DropdownButton,
  Form,
  FormControl,
  Button,
  Dropdown,
} from "react-bootstrap";

const Header = () => {
  const setMode = useStore((state) => state.setMode);
  const mode = useStore((state) => state.mode);

  return (
    <div className={mode ? "header-dark" : "header-light"}>
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://uploads-ssl.webflow.com/6098c701cacf0bbc451cab04/6098ca68d36f2270e2844630_F%26S%20logo%20circle.png"
          />
        </Navbar.Brand>
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
              <Button variant="primary" className="search-btn">
                Search
              </Button>
            </Form>
          </Nav>
          <div>
            <label>
              <Switch
                onChange={setMode}
                checked={mode}
                className="react-switch"
              />
            </label>
          </div>
          <Nav>
            <Nav.Link href="#deets">
              <div>
                <Badge badgeContent={4} color="error">
                  <NotificationsNoneOutlinedIcon
                    className={mode ? "badge-icon-dark" : "badge-icon-light"}
                  />
                </Badge>
              </div>
            </Nav.Link>
            <Nav.Link href="#deets">
              <img
                id="nav_pic"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
              />
            </Nav.Link>
            <DropdownButton
              align="end"
              title="Dropdown end"
              id={
                mode
                  ? "dropdown-menu-align-end-dark"
                  : "dropdown-menu-align-end-light"
              }
              className="dropdown-btn"
            >
              <Dropdown.Item eventKey="1">View account</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Log out</Dropdown.Item>
            </DropdownButton>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
