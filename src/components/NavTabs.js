/* eslint-disable no-unused-vars */
import React from 'react'
import {Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

function NavTabs() {
    return (
        <div>
            <Nav fill variant="tabs" defaultActiveKey="/">
                <Nav.Item>
                    <LinkContainer to="/">
                        <Nav.Link><span className="individual-tab-links">Home</span></Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="/curriculum">
                        <Nav.Link><span className="individual-tab-links">Curriculum</span></Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="/tutorials">
                        <Nav.Link eventKey="link-1"><span className="individual-tab-links">Video Tutorials</span></Nav.Link>
                    </LinkContainer>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default NavTabs
