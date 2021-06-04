/* eslint-disable no-unused-vars */
import React from 'react'
import {
    Button,
    Dropdown,
    DropdownButton,
    Form,
    FormControl,
    Nav,
    Navbar,
} from 'react-bootstrap'
import fcclogo from "./component-images/fcc_secondary_small.svg"

function Navigation() {
    return (

        <Navbar fixed="top" sticky="top" bg="light" expand="lg">
            <Navbar.Brand href="#">
                <div>
                    <img className="logo" src={fcclogo} alt="coursera-logo"></img>
                    <span className="logo-text"> freeCodeCamp</span>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll"/>
            <Navbar.Collapse id="navbarScroll">
                <DropdownButton
                    variant="outline-success"
                    id="dropdown-basic-button"
                    className="nav-dropdown"
                    title="Explore"
                    size="md">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
                <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{
                    maxHeight: '100px'
                }}
                    navbarScroll>
                </Nav>
                <Nav.Link href="#action1"><span className="navlink-item">Home</span></Nav.Link>
                <Nav.Link href="#action2"><span className="navlink-item">About</span></Nav.Link>
                <Button variant="outline-success" size="sm">
                    Donate
                </Button>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default Navigation
